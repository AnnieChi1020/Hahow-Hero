import { AppThunk } from './store';
import { setHeroList, setHeroProfile } from './heroSlice';
import { fetchHeroes, fetchHeroProfile } from '../utils/api';

export const getHeroList = (): AppThunk => async (dispatch) => {
    const heroList = await fetchHeroes();
    dispatch(setHeroList(heroList));
};

export const getHeroProfile =
    (heroId: string): AppThunk =>
    async (dispatch) => {
        const profile = await fetchHeroProfile(heroId);
        dispatch(setHeroProfile({ heroId, profile }));
    };
