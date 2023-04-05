import React from 'react';
import styled from 'styled-components';
import HeroCard from './HeroCard';
import { Hero } from '../../redux/heroSlice';

interface HeroListProps {
    heroList: Hero[];
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
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
