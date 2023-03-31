import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import { Stats } from '../../hooks/useProfile';
import { HeroProfile } from '../../redux/heroSlice';
import { H2 } from '../../styles/Fonts';
import StatItem from './StatItem';

type Props = {
    stats: Stats;
    setStats: (stats: Stats) => void;
    handleOnSaveProfile: (profile: HeroProfile) => void;
};

const StatsPanel: React.FC<Props> = (props) => {
    const { stats, setStats, handleOnSaveProfile } = props;

    const handleIncrement = (type: keyof Stats) => {
        if (stats.rest <= 0) return;
        setStats({
            ...stats,
            [type]: stats[type] + 1,
            rest: stats.rest - 1,
        });
    };

    const handleDecrement = (type: keyof Stats) => {
        if (stats[type] <= 0) return;
        setStats({
            ...stats,
            [type]: stats[type] - 1,
            rest: stats.rest + 1,
        });
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { rest, ...statItems } = stats;

    return (
        <Container>
            <LeftContainer>
                {Object.keys(statItems).map((stat) => (
                    <StatItem
                        key={stat}
                        label={stat.toUpperCase()}
                        point={stats[stat as keyof HeroProfile]}
                        handleIncrement={() =>
                            handleIncrement(stat as keyof HeroProfile)
                        }
                        handleDecrement={() =>
                            handleDecrement(stat as keyof HeroProfile)
                        }
                        restPoint={stats.rest}
                    />
                ))}
            </LeftContainer>
            <RightContainer>
                <H2>{`剩餘點數: ${stats.rest}`}</H2>
                <Button onClick={() => handleOnSaveProfile(statItems)}>
                    儲存
                </Button>
            </RightContainer>
        </Container>
    );
};

export default StatsPanel;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LeftContainer = styled.div``;

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 20px;
`;
