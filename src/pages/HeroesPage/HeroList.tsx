import React from 'react';
import styled from 'styled-components';
import HeroCard from './HeroCard';
import { Hero } from '../../redux/heroSlice';

const HeroList: React.FC<{ heroList: Hero[] }> = (props) => {
    const { heroList } = props;

    return (
        <Container>
            {heroList.map((h) => (
                <HeroCard key={h.id} hero={h} />
            ))}
        </Container>
    );
};

export default HeroList;

const Container = styled.div`
    display: flex;
    gap: 24px;
`;
