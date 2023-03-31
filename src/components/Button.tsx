import React from 'react';
import styled from 'styled-components';
import Colors from '../styles/Colors';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
    const { onClick, children, disabled } = props;

    return (
        <Btn onClick={onClick} disabled={disabled || false}>
            {children}
        </Btn>
    );
};

export default Button;

const Btn = styled.button<{ disabled: boolean }>`
    min-width: 40px;
    min-height: 40px;
    padding: 0 20px;
    background-color: ${Colors.orange};
    border-radius: 8px;
    color: ${Colors.gray1};
    font-size: 20px;
    transition: all 100ms ease-in-out;
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

    :active {
        transform: scale(${({ disabled }) => (disabled ? 1 : 0.95)};);
    }
`;
