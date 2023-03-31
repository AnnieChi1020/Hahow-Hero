import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import StatItem from './StatItem';

describe('StatItem', () => {
    const label = 'str';
    const handleIncrement = jest.fn();
    const handleDecrement = jest.fn();

    it('should render correctly', () => {
        const point = 5;
        const restPoint = 0;

        const { getByText } = render(
            <StatItem
                label={label.toUpperCase()}
                point={point}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                restPoint={restPoint}
            />
        );

        expect(getByText('STR')).toBeInTheDocument();
        expect(getByText('-')).toBeInTheDocument();
        expect(getByText('5')).toBeInTheDocument();
        expect(getByText('+')).toBeInTheDocument();
    });

    it('should call handleIncrement when click on increment button', () => {
        const point = 5;
        const restPoint = 1;

        const { queryAllByRole } = render(
            <StatItem
                label={label.toUpperCase()}
                point={point}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                restPoint={restPoint}
            />
        );
        const buttons = queryAllByRole('button');

        const incrementButton = buttons[1];

        fireEvent.click(incrementButton);
        expect(handleIncrement).toHaveBeenCalled();
    });

    it('should not call handleIncrement when click on increment button and restPoint is zero', () => {
        const point = 5;
        const restPoint = 0;

        const { queryAllByRole } = render(
            <StatItem
                label={label.toUpperCase()}
                point={point}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                restPoint={restPoint}
            />
        );
        const buttons = queryAllByRole('button');

        const incrementButton = buttons[1];

        fireEvent.click(incrementButton);
        expect(handleIncrement).not.toHaveBeenCalled();
    });

    it('should call handleDecrement when click on decrement button', () => {
        const point = 5;
        const restPoint = 0;

        const { queryAllByRole } = render(
            <StatItem
                label={label.toUpperCase()}
                point={point}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                restPoint={restPoint}
            />
        );
        const buttons = queryAllByRole('button');

        const decrementButton = buttons[0];

        fireEvent.click(decrementButton);
        expect(handleDecrement).toHaveBeenCalled();
    });

    it('should not call handleDecrement when click on decrement button and point is zero', () => {
        const point = 0;
        const restPoint = 0;

        const { queryAllByRole } = render(
            <StatItem
                label={label.toUpperCase()}
                point={point}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                restPoint={restPoint}
            />
        );
        const buttons = queryAllByRole('button');

        const decrementButton = buttons[0];

        fireEvent.click(decrementButton);
        expect(handleDecrement).not.toHaveBeenCalled();
    });
});
