import { useEffect } from 'react';
import { getHeroList } from '../redux/heroAction';
import { Hero } from '../redux/heroSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const useHeroes = () => {
    const heroList = useAppSelector((state) => state.hero.heroList);

    const dispatch = useAppDispatch();

    // Get hero list from server and update redux store
    useEffect(() => {
        dispatch(getHeroList());
    }, [dispatch]);

    return heroList as Hero[];
};

export default useHeroes;
