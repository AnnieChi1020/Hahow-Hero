import React from 'react';
import styled from 'styled-components';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Container>
            <MainContainer>{children}</MainContainer>
        </Container>
    );
};

export default Layout;

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
