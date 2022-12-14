import styled from 'styled-components';
import theme from '../theme';


export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
    //padding-bottom: 15%;
    background-color: ${theme.COLORS.PRIMARY};
`;

export const HeadContainer = styled.div`
    display: flex;
    width: 90%;
    align-items: center;
    border-radius: 10px;
    padding: 2%;
    justify-content: space-around;
    margin: 2% 0 5% 0;
`;
export const Line = styled.div`
    padding: 2% 0;
    border-left: 1px solid ${theme.COLORS.SECUNDARY};
`;
export const ButtonAdd = styled.button`
    width: 40%;
    position: fixed;
    bottom: 0;
    margin-bottom: 5%;
    border: none;
    padding: 10px 0;
    border-radius: 10px;
    font-size: 14px;
    font-weight: bold;
    color: ${theme.COLORS.PRIMARY};
    background-color: ${theme.COLORS.TERCIARY};
`;
export const Box = styled.div`
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3%;
    padding: 2% 2% 4% 2%;
    border-bottom:1px solid ${theme.COLORS.TERCIARY};
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    overflow-y: auto;
    padding-bottom: 15%;
`

export const Text = styled.p`
    text-align: center;
    padding:1% 2%;
    color: ${theme.COLORS.SECUNDARY};
`;