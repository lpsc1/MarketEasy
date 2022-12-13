import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Title = styled.h1`
    color: ${theme.COLORS.TERCIARY};
    margin-bottom: 5vh;
`;
export const ItemInput = styled.input`
   width: 70%;
   padding: 1vh 0;
    background-color: ${theme.COLORS.SECUNDARY};
    border: none;
    border-radius: 10px;
    text-align: center;
    color: ${theme.COLORS.PRIMARY};
    text-transform: capitalize;
`;
export const ValueInput = styled.input`
    width: 50%;
    padding: 1vh 0;
    background-color: ${theme.COLORS.SECUNDARY};
    border: none;
    border-radius: 10px;
    text-align: center;
    color: ${theme.COLORS.PRIMARY};
`;
export const AmountInput = styled.input`
    width: 30%;
    padding: 1vh 0;
    background-color: ${theme.COLORS.SECUNDARY};
    border: none;
    border-radius: 10px;
    text-align: center;
    color: ${theme.COLORS.PRIMARY};
`;
export const Box = styled.div`
    width: 92%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 3vh;
`;
export const Label = styled.label`
    color: ${theme.COLORS.SECUNDARY};
    margin-bottom: 1%;
`;
export const BoxLabel = styled.div`
    width: 100%;
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    align-items: center;
`;
export const Button = styled.button`
    position: absolute;
    margin-top: 43vh;
    width: 40%;
    border: none;
    padding: 10px 0;
    border-radius: 10px;
    font-size: 14px;
    font-weight: bold;
    color: ${theme.COLORS.PRIMARY};
    background-color: ${theme.COLORS.TERCIARY};
`;