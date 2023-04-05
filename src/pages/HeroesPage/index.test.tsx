import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { useNavigate, useParams } from 'react-router-dom';
import HeroesPage from './index';
import useHeroes from '../../hooks/useHeroes';
import useProfile from '../../hooks/useProfile';

jest.mock('react-router-dom', () => ({
    useParams: jest.fn(),
    useNavigate: jest.fn(),
}));

jest.mock('../../hooks/useHeroes', () => ({
    __esModule: true,
    default: jest.fn(),
}));

jest.mock('../../hooks/useProfile', () => ({
    __esModule: true,
    default: jest.fn(),
}));

describe('HeroesPage', () => {
    beforeEach(() => {
        (useParams as jest.Mock).mockReturnValue({ heroId: '1' });
        (useNavigate as jest.Mock).mockReturnValue({});
        (useHeroes as jest.Mock).mockReturnValue([
            {
                id: '1',
                name: 'Hero 1',
                image: 'https://via.placeholder.com/150',
            },
            {
                id: '2',
                name: 'Hero 2',
                image: 'https://via.placeholder.com/150',
            },
            {
                id: '3',
                name: 'Hero 3',
                image: 'https://via.placeholder.com/150',
            },
        ]);
        (useProfile as jest.Mock).mockReturnValue({
            stats: { str: 10, agi: 6, int: 7, luk: 5 },
            setStats: jest.fn(),
            handleOnSaveProfile: jest.fn(),
            isFetching: false,
        });
    });

    test('should render hero list and profile when heroId is present', async () => {
        const { getByText } = render(<HeroesPage />);

        // Assert hero list is rendered
        expect(getByText('Hero 1')).toBeInTheDocument();
        expect(getByText('Hero 2')).toBeInTheDocument();
        expect(getByText('Hero 3')).toBeInTheDocument();

        // Assert profile is rendered
        await waitFor(() => {
            expect(getByText('STR')).toBeInTheDocument();
            expect(getByText('AGI')).toBeInTheDocument();
            expect(getByText('INT')).toBeInTheDocument();
            expect(getByText('LUK')).toBeInTheDocument();
        });
    });

    test('should render loading spinner when profile is fetching', async () => {
        (useProfile as jest.Mock).mockReturnValue({
            stats: null,
            setStats: jest.fn(),
            handleOnSaveProfile: jest.fn(),
            isFetching: true,
        });

        const { getByTestId } = render(<HeroesPage />);

        // Assert loading spinner is rendered
        expect(getByTestId('loader')).toBeInTheDocument();
    });

    test('should render "Cannot Find the Profile" when stats is null and not fetching', async () => {
        (useProfile as jest.Mock).mockReturnValue({
            stats: null,
            setStats: jest.fn(),
            handleOnSaveProfile: jest.fn(),
            isFetching: false,
        });

        const { getByText } = render(<HeroesPage />);

        // Assert "Cannot Find the Profile" text is rendered
        expect(getByText('Cannot Find the Profile')).toBeInTheDocument();
    });

    test('should not render hero profile when heroId is not present', async () => {
        (useParams as jest.Mock).mockReturnValue({});

        const { queryByText } = render(<HeroesPage />);

        // Assert hero list is rendered
        expect(queryByText('Hero 1')).toBeInTheDocument();
        expect(queryByText('Hero 2')).toBeInTheDocument();
        expect(queryByText('Hero 3')).toBeInTheDocument();

        // Assert profile is not rendered
        await waitFor(() => {
            expect(queryByText('STR')).not.toBeInTheDocument();
            expect(queryByText('AGI')).not.toBeInTheDocument();
            expect(queryByText('INT')).not.toBeInTheDocument();
            expect(queryByText('LUK')).not.toBeInTheDocument();
        });
    });
});
