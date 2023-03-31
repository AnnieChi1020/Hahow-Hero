import { render, waitFor } from '@testing-library/react';
import React from 'react';
import StatsPanel from './StatsPanel';

describe('StatsPanel', () => {
    const setStats = jest.fn();
    const handleOnSaveProfile = jest.fn();

    it('should render correctly', () => {
        const stats = { str: 5, int: 2, agi: 8, luk: 3, rest: 0 };

        const { container } = render(
            <StatsPanel
                stats={stats}
                setStats={setStats}
                handleOnSaveProfile={handleOnSaveProfile}
            />
        );

        expect(container).toMatchSnapshot();
    });

    it('should call setStats when click on increment button', () => {
        const stats = { str: 5, int: 2, agi: 8, luk: 3, rest: 0 };

        const { queryAllByRole } = render(
            <StatsPanel
                stats={stats}
                setStats={setStats}
                handleOnSaveProfile={handleOnSaveProfile}
            />
        );

        const buttons = queryAllByRole('button');
        const incrementButton = buttons[1];

        incrementButton.click();

        waitFor(() => {
            expect(setStats).toHaveBeenCalled();
        });
    });

    it('should call setStats when click on decrement button', () => {
        const stats = { str: 5, int: 2, agi: 8, luk: 3, rest: 0 };

        const { queryAllByRole } = render(
            <StatsPanel
                stats={stats}
                setStats={setStats}
                handleOnSaveProfile={handleOnSaveProfile}
            />
        );

        const buttons = queryAllByRole('button');
        const decrementButton = buttons[0];

        decrementButton.click();

        waitFor(() => {
            expect(setStats).toHaveBeenCalled();
        });
    });

    it('should call handleOnSaveProfile when click on save button', () => {
        const stats = { str: 5, int: 2, agi: 8, luk: 3, rest: 0 };

        const { queryAllByRole } = render(
            <StatsPanel
                stats={stats}
                setStats={setStats}
                handleOnSaveProfile={handleOnSaveProfile}
            />
        );

        const buttons = queryAllByRole('button');
        const saveButton = buttons[buttons.length - 1];

        saveButton.click();

        waitFor(() => {
            expect(handleOnSaveProfile).toHaveBeenCalled();
        });
    });

    it('should not call handleOnSaveProfile when click on save button and restPoint is not zero', () => {
        const stats = { str: 5, int: 2, agi: 8, luk: 3, rest: 1 };

        const { queryAllByRole } = render(
            <StatsPanel
                stats={stats}
                setStats={setStats}
                handleOnSaveProfile={handleOnSaveProfile}
            />
        );

        const buttons = queryAllByRole('button');
        const saveButton = buttons[buttons.length - 1];

        saveButton.click();

        waitFor(() => {
            expect(handleOnSaveProfile).not.toHaveBeenCalled();
        });
    });
});
