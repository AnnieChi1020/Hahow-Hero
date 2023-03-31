import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getHeroProfile } from '../redux/heroAction';
import { HeroProfile } from '../redux/heroSlice';
import { updateHeroProfile } from '../utils/api';
import { useAppDispatch, useAppSelector } from '../utils/hooks';

export interface Stats extends HeroProfile {
    rest: number;
}

const useProfile = () => {
    const { heroId } = useParams();

    const heroProfiles = useAppSelector((state) => state.hero.heroProfiles);

    const [stats, setStats] = useState<Stats | null>(null);

    const dispatch = useAppDispatch();

    const updateProfile = useCallback(() => {
        if (heroId) {
            dispatch(getHeroProfile(heroId));
        }
    }, [dispatch, heroId]);

    useEffect(() => {
        updateProfile();
    }, [updateProfile]);

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
            alert('Profile updated successfully!');
            updateProfile();
        } else {
            alert('Profile updated failed!');
        }
    };

    return { stats, setStats, handleOnSaveProfile };
};

export default useProfile;
