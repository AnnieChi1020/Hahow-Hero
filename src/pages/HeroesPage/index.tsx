import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import HeroList from './HeroList';
import StatsPanel from './StatsPanel';
import Colors from '../../styles/Colors';
import useHeroes from '../../hooks/useHeroes';
import useProfile from '../../hooks/useProfile';
import { H3 } from '../../styles/Typography';

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

    @media (max-width: 768px) {
        padding: 40px 40px;
    }
`;

const SubContainer = styled.div`
    width: 100%;
    padding: 60px;
    color: ${Colors.gray5};
    display: flex;
    justify-content: center;
`;

function HeroesPage() {
    const heroList = useHeroes();
    const { stats, setStats, handleOnSaveProfile, isFetching } = useProfile();

    const { heroId } = useParams();

    const showLoader = isFetching && !stats;
    const showProfile = stats;
    const showNoRecord = !isFetching && !stats;

    return (
        <Container>
            <HeroList heroList={heroList} />
            {heroId && (
                <>
                    {showLoader && (
                        <SubContainer>
                            <ClipLoader
                                color={Colors.orange}
                                size={60}
                                data-testid="loader"
                            />
                        </SubContainer>
                    )}
                    {showProfile && (
                        <ProfileContainer>
                            <StatsPanel
                                stats={stats}
                                setStats={setStats}
                                handleOnSaveProfile={handleOnSaveProfile}
                            />
                        </ProfileContainer>
                    )}
                    {showNoRecord && (
                        <SubContainer>
                            <H3>Cannot Find the Profile</H3>
                        </SubContainer>
                    )}
                </>
            )}
        </Container>
    );
}

export default HeroesPage;
