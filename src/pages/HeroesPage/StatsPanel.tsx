import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import { Stats } from '../../hooks/useProfile';
import { HeroProfile } from '../../redux/heroSlice';
import { H3 } from '../../styles/Fonts';
import StatItem from './StatItem';

interface StatsPanelProps {
    stats: Stats;
    setStats: (stats: Stats) => void;
    handleOnSaveProfile: (profile: HeroProfile) => void;
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 20px;

    @media (max-width: 768px) {
        margin-top: 40px;
        h3 {
            text-align: right;
        }
    }
`;

function StatsPanel(props: StatsPanelProps) {
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
            <div>
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
            </div>
            <RightContainer>
                <H3>{`剩餘點數: ${stats.rest}`}</H3>
                <Button onClick={() => handleOnSaveProfile(statItems)}>
                    儲存
                </Button>
            </RightContainer>
        </Container>
    );
}

export default StatsPanel;
