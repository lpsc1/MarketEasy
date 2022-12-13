import styled from 'styled-components';
import theme from '../../styles/theme';

interface props {
    moving: boolean;
    editing?: boolean;
}

export const Main = styled.div`
    width: 100%;
    display: flexbox;
    align-items: center;
`;

export const Container = styled.button<props>`
    width: 95%;
    display: flex;
    margin-inline: 2.5%;
    align-items: center;
    justify-content: space-between;
    padding: 2% 2%;
    //z-index: 99;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    margin-bottom: 11px;
    background-color: transparent;
    border: ${({editing, theme}) => editing ? `1px solid ${theme.COLORS.TERCIARY}` : 'none'};
    transition: linear .3s;
    transform: translateX(${({moving}) => moving ? '-80px' : ''});
`;

export const AmountInput = styled.input`
    width: 14%;
    padding:1% 2%;
    background-color: transparent;
    border: none;
    border-radius: 10px;
    text-align: center;
    color: ${theme.COLORS.SECUNDARY};
`;
export const ItemInput = styled.input`
    width: 50%;
    padding:1% 2%;
    background-color: transparent;
    border-radius: 10px;
    border: none;
    text-transform: capitalize;
    text-align: center;
    color: ${theme.COLORS.SECUNDARY};
`;

export const ValueInput = styled.input`
    width: 14%;
    padding:1% 2%;
    background-color: transparent;
    border: none;
    border-radius: 10px;
    text-align: center;
    color: ${theme.COLORS.SECUNDARY};
`;

export const Line = styled.div`
    padding: 2% 0;
    border-left: 1px solid ${theme.COLORS.SECUNDARY};
`;

export const Delete = styled.button<props>`
    background-color: transparent;
    border: none;
    padding: 4px;
    transition:ease-in-out 1s;
    transform: translateX(${({moving}) => moving ? '-70px' : '20px'});
    .icon {
        width: 22px;
        height: 22px;
        color: ${({theme}) => theme.COLORS.TERCIARY};
    }
`;
export const Edit = styled.button<props>`
    background-color: transparent;
    padding: 4px;
    border: none;
    transition:ease-in-out 1s;
    transform: translateX(${({moving}) => moving ? '-85px' : '20px'});
    .icon {
        width: 22px;
        height: 22px;
        color: ${({theme}) => theme.COLORS.TERCIARY};
    }
`;