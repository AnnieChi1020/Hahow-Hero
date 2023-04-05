import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useNavigate, useParams } from 'react-router-dom';
import HeroCard from './HeroCard';
import Colors from '../../styles/Colors';

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
    useParams: jest.fn(),
}));

describe('HeroCard component', () => {
    beforeEach(() => {
        (useNavigate as jest.Mock).mockReturnValue(jest.fn());
        (useParams as jest.Mock).mockReturnValue({});
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should render the component', () => {
        const hero = {
            id: '1',
            name: 'Hero 1',
            image: 'https://example.com/image.jpg',
        };

        const { getByText, getByRole } = render(<HeroCard hero={hero} />);

        expect(getByText('Hero 1')).toBeInTheDocument();
        expect(getByRole('img')).toHaveAttribute(
            'src',
            'https://example.com/image.jpg'
        );
    });

    it('should navigate to the hero page when clicked', () => {
        const hero = {
            id: '1',
            name: 'Hero 1',
            image: 'https://example.com/image.jpg',
        };

        const { getByTestId } = render(<HeroCard hero={hero} />);

        fireEvent.click(getByTestId('hero-card-container'));

        expect(useNavigate).toHaveBeenCalled();
    });

    it('should be active when the hero id is the same as the current hero id', () => {
        const hero = {
            id: '1',
            name: 'Hero 1',
            image: 'https://example.com/image.jpg',
        };

        (useParams as jest.Mock).mockReturnValue({ heroId: '1' });

        const { getByTestId } = render(<HeroCard hero={hero} />);

        expect(getByTestId('hero-card-container')).toHaveStyle(
            `background-color: ${Colors.orange};`
        );
    });

    it('should not be active when the hero id is not the same as the current hero id', () => {
        const hero = {
            id: '1',
            name: 'Hero 1',
            image: 'https://example.com/image.jpg',
        };

        (useParams as jest.Mock).mockReturnValue({ heroId: '2' });

        const { getByTestId } = render(<HeroCard hero={hero} />);

        expect(getByTestId('hero-card-container')).toHaveStyle(
            `background-color: ${Colors.beige};`
        );
    });
});
