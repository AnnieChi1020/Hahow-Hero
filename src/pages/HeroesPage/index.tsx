import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import HeroList from './HeroList';
import StatsPanel from './StatsPanel';
import Colors from '../../styles/Colors';
import useHeroes from '../../hooks/useHeroes';
import useProfile from '../../hooks/useProfile';

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

function HeroesPage() {
    const heroList = useHeroes();
    const { stats, setStats, handleOnSaveProfile } = useProfile();

    const { heroId } = useParams();
    const showProfile = heroId && stats;

    return (
        <Container>
            <HeroList heroList={heroList} />
            {showProfile && (
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
}

export default HeroesPage;
