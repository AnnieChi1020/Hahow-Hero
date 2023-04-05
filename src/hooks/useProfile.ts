import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getHeroProfile } from '../redux/heroAction';
import { HeroProfile } from '../redux/heroSlice';
import { updateHeroProfile } from '../utils/api';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

export interface Stats extends HeroProfile {
    rest: number;
}

const useProfile = () => {
    const { heroId } = useParams();

    const { heroProfiles, heroProfileIsFetching } = useAppSelector(
        (state) => state.hero
    );

    const [stats, setStats] = useState<Stats | null>(null);

    const dispatch = useAppDispatch();

    // Reset stats when heroId changed
    useEffect(() => {
        const resetStats = () => setStats(null);
        resetStats();
    }, [heroId]);

    // Get hero profile from server and update redux store
    const updateProfile = useCallback(async () => {
        if (heroId) {
            dispatch(getHeroProfile(heroId));
        }
    }, [dispatch, heroId]);

    // Update profile when heroId changed
    useEffect(() => {
        updateProfile();
    }, [updateProfile]);

    // Update stats when heroId or heroProfiles changed
    useEffect(() => {
        if (!heroId || !heroProfiles[heroId]) return;
        setStats({ ...heroProfiles[heroId], rest: 0 });
    }, [heroId, heroProfiles]);

    // Upload new profile to server
    const handleOnSaveProfile = async (newProfile: HeroProfile) => {
        if (!heroId) return;
        if (!newProfile) return;

        const isUpdated = await updateHeroProfile(heroId, newProfile);
        if (isUpdated) {
            toast.success('儲存成功！');
            updateProfile();
        } else {
            toast.error(`儲存失敗！您還有剩餘點數：${stats?.rest}點`);
        }
    };

    return {
        stats,
        setStats,
        handleOnSaveProfile,
        isFetching: heroProfileIsFetching,
    };
};

export default useProfile;
