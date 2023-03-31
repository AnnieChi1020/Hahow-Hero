import React from 'react';
import styled from 'styled-components';
import Colors from '../../styles/Colors';
import { H3 } from '../../styles/Fonts';
import Button from '../../components/Button';

type StatItemProps = {
    label: string;
    point: number;
    handleIncrement: () => void;
    handleDecrement: () => void;
    restPoint: number;
};

const StatItem: React.FC<StatItemProps> = (props) => {
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
};

export default StatItem;

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 12px 0;
`;

const StateLabel = styled(H3)`
    width: 120px;
    text-align: left;
`;

const StatePoint = styled(H3)`
    width: 120px;
`;

const ButtonText = styled(H3)`
    color: ${Colors.gray1};
`;
