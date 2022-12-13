import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
    display: flex;  
    padding: 5%;
    align-items: center;
    justify-content: center;
    background-color: ${theme.COLORS.PRIMARY};
    .icon-box{
        background-color: transparent;
        border: none;
        position: absolute;
        left: 0;
        margin-left: 5%;
        padding: 5px;
    }
    .icon {
        width: 22px;
        height: 22px;
        color: ${theme.COLORS.SECUNDARY};
    }
`;
export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const TextLogo1 = styled.h1`
    color: ${theme.COLORS.TERCIARY};
`;
export const TextLogo2 = styled.h1`
     color: ${theme.COLORS.SECUNDARY};
`;