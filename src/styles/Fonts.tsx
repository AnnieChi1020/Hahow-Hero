import styled from 'styled-components';
import Colors from './Colors';

const H1 = styled.h1`
    font-weight: bold;
    font-size: 38px;
    line-height: 46px;
    color: ${Colors.gray6};
`;

const H2 = styled.h2`
    font-weight: bold;
    font-size: 32px;
    line-height: 48px;
    color: ${Colors.gray6};
`;

const H3 = styled.h3`
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    color: ${Colors.gray6};
`;

const H4 = styled.h4`
    font-size: 16px;
    line-height: 21px;
    font-style: normal;
    font-weight: normal;
`;

const H5 = styled.h5`
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${Colors.gray6};
`;

export { H1, H2, H3, H4, H5 };
