import React from 'react';
import { render } from '@testing-library/react';
import { useNavigate, useParams } from 'react-router-dom';
import HeroList from './HeroList';

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
    useParams: jest.fn(),
}));

describe('HeroList component', () => {
    beforeEach(() => {
        (useNavigate as jest.Mock).mockReturnValue(jest.fn());
        (useParams as jest.Mock).mockReturnValue({});
    });

    const mockHeroList = [
        { id: '1', name: 'Batman', image: 'https://via.placeholder.com/150' },
        { id: '2', name: 'Superman', image: 'https://via.placeholder.com/150' },
        {
            id: '3',
            name: 'Spiderman',
            image: 'https://via.placeholder.com/150',
        },
    ];

    it('should render a list of heroes', () => {
        const { getAllByTestId } = render(<HeroList heroList={mockHeroList} />);

        expect(getAllByTestId('hero-card-container')).toHaveLength(3);
        expect(getAllByTestId('hero-card-container')[0]).toHaveTextContent(
            'Batman'
        );
    });

    it('should render no heroes if the list is empty', () => {
        const { queryAllByTestId } = render(<HeroList heroList={[]} />);

        expect(queryAllByTestId('hero-card-container')).toHaveLength(0);
    });
});
