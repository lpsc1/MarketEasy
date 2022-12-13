import styled from 'styled-components';
import theme from '../styles/theme';

export const Container = styled.div`
    overflow: hidden;
    min-height: 100vh;
    color: ${theme.COLORS.SECUNDARY};
    background-color: ${theme.COLORS.PRIMARY};
    .img{
        max-width: 100%;
        max-height:100%;
        width: auto;
        height: auto;
    }
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
`;
export const Text = styled.p`
    color: ${theme.COLORS.SECUNDARY};
`;
export const Box = styled.button`
    width: 45%;
    height: 40vh;
    align-items: center;
    border-radius: 10px;
    background-color: transparent;
    border: none;
    margin-bottom: 10%;
    border:1px solid ${({theme}) => theme.COLORS.TERCIARY} ;
    padding: 5px;
    .text {
        color: ${({theme}) => theme.COLORS.TERCIARY} ;
    }
`;

export const OptionsBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    align-items: center;
    justify-content: space-between;
`;
export const Footer = styled.footer`
    position: absolute;
    //width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 5vh 0;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    margin-bottom: 1vh;
    gap: 10px;
   // border: 1px solid ${({theme}) => theme.COLORS.TERCIARY};
   .footer{
    color: ${({theme}) => theme.COLORS.TERCIARY};
   }
`;
