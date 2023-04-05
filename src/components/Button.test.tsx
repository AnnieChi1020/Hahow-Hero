import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button from './Button';
import Colors from '../styles/Colors';

describe('Button', () => {
    const text = 'Button';
    const onClickMock = jest.fn();

    it('should render correctly', () => {
        const { getByText, getByRole } = render(
            <Button onClick={onClickMock}>{text}</Button>
        );

        const button = getByRole('button');

        expect(getByText(text)).toBeInTheDocument();
        expect(button).toHaveStyle(
            `background-color: ${Colors.orange}; color: ${Colors.gray1}; opacity: 1;}`
        );
    });

    it('should call onClick when clicked', () => {
        const { getByRole } = render(
            <Button onClick={onClickMock}>{text}</Button>
        );

        fireEvent.click(getByRole('button'));

        expect(onClickMock).toHaveBeenCalled();
    });

    it('should not call onClick when clicked and disabled', () => {
        const { getByRole } = render(
            <Button onClick={onClickMock} disabled>
                {text}
            </Button>
        );

        fireEvent.click(getByRole('button'));

        expect(onClickMock).not.toHaveBeenCalled();
    });

    it('should render correctly when disabled', () => {
        const { getByRole } = render(
            <Button onClick={onClickMock} disabled>
                {text}
            </Button>
        );

        const button = getByRole('button');

        expect(button).toHaveStyle(
            `background-color: ${Colors.orange}; color: ${Colors.gray1}; opacity: 0.5`
        );
    });
});
