import React from 'react';
import styled from 'styled-components';

interface LayoutProps {
    children: React.ReactNode;
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
`;

const MainContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding-top: 60px;
`;

function Layout(props: LayoutProps) {
    const { children } = props;
    return (
        <Container>
            <MainContainer>{children}</MainContainer>
        </Container>
    );
}

export default Layout;
