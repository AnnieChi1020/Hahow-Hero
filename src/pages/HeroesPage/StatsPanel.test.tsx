import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StatsPanel from './StatsPanel';

describe('StatsPanel', () => {
    const stats = {
        str: 5,
        agi: 3,
        int: 2,
        luk: 8,
        rest: 5,
    };

    const setStats = jest.fn();
    const handleOnSaveProfile = jest.fn();

    test('renders correctly', () => {
        const { getByText } = render(
            <StatsPanel
                stats={stats}
                setStats={setStats}
                handleOnSaveProfile={handleOnSaveProfile}
            />
        );

        // Assert that all stat labels are rendered
        expect(getByText('STR')).toBeTruthy();
        expect(getByText('AGI')).toBeTruthy();
        expect(getByText('INT')).toBeTruthy();
        expect(getByText('LUK')).toBeTruthy();
        expect(getByText('剩餘點數: 5')).toBeTruthy();

        // Assert that the Save button is rendered
        expect(getByText('儲存')).toBeTruthy();
    });

    test('calls setStats with updated stats on increment', () => {
        const { queryAllByRole } = render(
            <StatsPanel
                stats={stats}
                setStats={setStats}
                handleOnSaveProfile={handleOnSaveProfile}
            />
        );

        // Click on the increment button for STR
        const buttons = queryAllByRole('button');
        const incrementBtn = buttons[1];
        fireEvent.click(incrementBtn);

        // Assert that setStats is called with the updated stats
        expect(setStats).toHaveBeenCalledWith({
            str: 6,
            agi: 3,
            int: 2,
            luk: 8,
            rest: 4,
        });
    });

    test('calls setStats with updated stats on decrement', () => {
        const { queryAllByRole } = render(
            <StatsPanel
                stats={stats}
                setStats={setStats}
                handleOnSaveProfile={handleOnSaveProfile}
            />
        );

        // Click on the decrement button for STR
        const buttons = queryAllByRole('button');
        const decrementBtn = buttons[0];
        fireEvent.click(decrementBtn);

        // Assert that setStats is called with the updated stats
        expect(setStats).toHaveBeenCalledWith({
            str: 4,
            agi: 3,
            int: 2,
            luk: 8,
            rest: 6,
        });
    });

    test('calls handleOnSaveProfile on save button click', async () => {
        const { queryAllByRole } = render(
            <StatsPanel
                stats={stats}
                setStats={setStats}
                handleOnSaveProfile={handleOnSaveProfile}
            />
        );

        // Click on the Save button
        const buttons = queryAllByRole('button');
        const saveBtn = buttons[buttons.length - 1];
        fireEvent.click(saveBtn);

        expect(handleOnSaveProfile).toHaveBeenCalledWith({
            str: 5,
            agi: 3,
            int: 2,
            luk: 8,
        });
    });
});
