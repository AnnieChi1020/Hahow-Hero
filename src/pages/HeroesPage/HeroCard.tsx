import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Hero } from '../../redux/heroSlice';
import Colors from '../../styles/Colors';
import { H2 } from '../../styles/Typography';

interface HeroCardProps {
    hero: Hero;
}

const Container = styled.div<{ isActive: boolean }>`
    width: 100%;
    padding: 20px;
    border-radius: 12px;
    background-color: ${({ isActive }) =>
        isActive ? Colors.orange : Colors.beige};
    display: grid;
    grid-template-rows: 200px 1fr;
    gap: 20px;
    cursor: pointer;
    transition: transform 200ms ease-in-out;

    :hover {
        transform: scale(1.05);
    }

    h2 {
        color: ${({ isActive }) => (isActive ? Colors.gray2 : Colors.gray6)};
    }
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    overflow: hidden;
`;

const Image = styled.img`
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

function HeroCard(props: HeroCardProps) {
    const { hero } = props;
    const { id, name, image } = hero;

    const navigate = useNavigate();
    const { heroId } = useParams();

    const isActive = !!(heroId && heroId === id);

    return (
        <Container
            data-testid="hero-card-container"
            onClick={() => navigate(`/heroes/${id}`)}
            isActive={isActive}
        >
            <ImageContainer>
                <Image src={image} />
            </ImageContainer>
            <div>
                <H2>{name}</H2>
            </div>
        </Container>
    );
}

export default HeroCard;
