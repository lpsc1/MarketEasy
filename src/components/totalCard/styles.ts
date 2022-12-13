import styled from 'styled-components';
import theme from '../../styles/theme';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5%;
    color: ${theme.COLORS.SECUNDARY};
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    background-color: transparent;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;
export const Title = styled.h3`
    color: ${theme.COLORS.TERCIARY};
    margin-bottom: 3%;
`;
export const Value = styled.h2`
    color: ${theme.COLORS.SECUNDARY};
`;
