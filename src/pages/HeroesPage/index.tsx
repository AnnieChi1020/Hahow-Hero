import React from 'react';
import styled from 'styled-components';
import HeroList from './HeroList';
import StatsPanel from './StatsPanel';
import Colors from '../../styles/Colors';
import useHeroes from '../../hooks/useHeroes';
import useProfile from '../../hooks/useProfile';

const HeroesPage: React.FC = () => {
    const heroList = useHeroes();
    const { stats, setStats, handleOnSaveProfile } = useProfile();

    return (
        <Container>
            <HeroList heroList={heroList} />
            {stats && (
                <ProfileContainer>
                    <StatsPanel
                        stats={stats}
                        setStats={setStats}
                        handleOnSaveProfile={handleOnSaveProfile}
                    />
                </ProfileContainer>
            )}
        </Container>
    );
};

export default HeroesPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 24px;
`;

const ProfileContainer = styled.div`
    padding: 40px 60px;
    background-color: ${Colors.beige};
    border-radius: 12px;
`;
