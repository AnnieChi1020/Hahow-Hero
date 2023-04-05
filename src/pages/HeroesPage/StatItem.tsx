import React from 'react';
import styled from 'styled-components';
import Colors from '../../styles/Colors';
import { H3 } from '../../styles/Typography';
import Button from '../../components/Button';

interface StatItemProps {
    label: string;
    point: number;
    handleIncrement: () => void;
    handleDecrement: () => void;
    restPoint: number;
}

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 12px 0;

    @media (max-width: 768px) {
        justify-content: space-between;
    }
`;

const Text = styled(H3)`
    @media (max-width: 768px) {
        font-size: 18px;
        line-height: 24px;
    }
`;

const StateLabel = styled(Text)`
    width: 120px;
    text-align: left;
`;

const StatePoint = styled(Text)`
    width: 120px;
    text-align: center;
`;

const ButtonText = styled(Text)`
    color: ${Colors.gray1};
`;

function StatItem(props: StatItemProps) {
    const { label, point, handleIncrement, handleDecrement, restPoint } = props;

    return (
        <Container>
            <StateLabel>{label}</StateLabel>
            <Button onClick={handleDecrement} disabled={point <= 0}>
                <ButtonText>-</ButtonText>
            </Button>
            <StatePoint>{point}</StatePoint>
            <Button onClick={handleIncrement} disabled={restPoint <= 0}>
                <ButtonText>+</ButtonText>
            </Button>
        </Container>
    );
}

export default StatItem;
