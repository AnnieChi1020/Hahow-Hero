import React from 'react';
import HeroesPage from './index';
import { renderWithProviders } from '../../utils/test-utils';

describe('HeroesPage', () => {
    it('should render correctly', () => {
        const { container } = renderWithProviders(<HeroesPage />);
        expect(container).toMatchSnapshot();
    });
});
