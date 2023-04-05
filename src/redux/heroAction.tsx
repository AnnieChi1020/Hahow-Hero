import { AppThunk } from './store';
import {
    setHeroList,
    setHeroProfile,
    setHeroProfileIsFetching,
} from './heroSlice';
import { fetchHeroes, fetchHeroProfile } from '../utils/api';

export const getHeroList = (): AppThunk => async (dispatch) => {
    const heroList = await fetchHeroes();
    dispatch(setHeroList(heroList));
};

export const getHeroProfile =
    (heroId: string): AppThunk =>
    async (dispatch) => {
        dispatch(setHeroProfileIsFetching(true));
        try {
            const profile = await fetchHeroProfile(heroId);
            dispatch(setHeroProfile({ heroId, profile }));
        } catch (e) {
            // console.log(e);
        }
        dispatch(setHeroProfileIsFetching(false));
    };
