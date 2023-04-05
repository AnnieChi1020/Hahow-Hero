import React from 'react';
import styled from 'styled-components';
import HeroCard from './HeroCard';
import { Hero } from '../../redux/heroSlice';

interface HeroListProps {
    heroList: Hero[];
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @media (max-width: 976px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

function HeroList(props: HeroListProps) {
    const { heroList } = props;

    return (
        <Container>
            {heroList.length > 0 &&
                heroList.map((h) => <HeroCard key={h.id} hero={h} />)}
        </Container>
    );
}

export default HeroList;
