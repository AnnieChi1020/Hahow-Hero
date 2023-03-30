import { useEffect } from 'react';
import { getHeroList } from '../redux/heroAction';
import { Hero } from '../redux/heroSlice';
import { useAppDispatch, useAppSelector } from '../utils/hooks';

const useHeroes = () => {
    const heroList = useAppSelector((state) => state.hero.heroList);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getHeroList());
    }, [dispatch]);

    return heroList as Hero[];
};

export default useHeroes;
