import { render } from '@testing-library/react';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Hero } from '../../redux/heroSlice';
import HeroList from './HeroList';

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
    useParams: jest.fn(),
}));

describe('HeroList', () => {
    beforeEach(() => {
        (useNavigate as jest.Mock).mockReturnValue(jest.fn());
        (useParams as jest.Mock).mockReturnValue({});
    });

    it('should render correctly', () => {
        const heroList = [
            {
                id: '1',
                name: 'Hero 1',
                image: 'https://via.placeholder.com/150',
                stats: { str: 5, int: 2, agi: 8, luk: 3, rest: 0 },
            },
            {
                id: '2',
                name: 'Hero 2',
                image: 'https://via.placeholder.com/150',
                stats: { str: 5, int: 2, agi: 8, luk: 3, rest: 0 },
            },
        ];

        const { container } = render(
            <HeroList heroList={heroList as Hero[]} />
        );

        expect(container).toMatchSnapshot();
    });

    it('should render correctly when there are no heroes', () => {
        const heroList: Hero[] = [];

        const { container } = render(
            <HeroList heroList={heroList as Hero[]} />
        );

        expect(container).toMatchSnapshot();
    });
});
