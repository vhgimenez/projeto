import styled from 'styled-components';

export const Container = styled.div`

    background-color: hsl(217, 100%, 97%);
    height: 100vh;
    display: flex;

    @media (max-width: 768px) {
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }

`;

export const Screen = styled.div`

    margin: auto;
    width: 50%;
    height: 65%;
    background-color: white;
    border-radius: 2rem;
    padding: 1rem;
    display: flex;

    @media (max-width: 768px) {
        width: 100%;
        display: grid;
        grid-template-rows: auto 1fr auto;
        gap: 1rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-top: 6rem;
        padding: 2rem;
    }

`

export const Menu = styled.div`

    background: black url("bg-sidebar-desktop.svg") no-repeat;
    width: 17rem;
    height: 100%;
    border-radius: 1rem;
    padding: 2.5rem 2rem;

    img {
        display: none;
        visibility: hidden;
    }

    @media (max-width: 768px) {
        background: black url("bg-sidebar-mobile.svg") no-repeat center center;
        background-size: cover;        
        display: flex;
        justify-content: center;
        gap: 1rem;
        width: 100%;
        height: 5rem;
    }

`

export const Option = styled.div`

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.7rem;

    .select {
        background-color: hsl(206, 94%, 87%);
        color: black;
        border: none;
    }

`

export const NumberOption = styled.button`

    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    border: 0.01rem solid white;
    font-family: "Ubuntu";
    font-weight: 700;
    color: white;
    background-color: transparent;
    cursor: pointer;
    transition: all .3s;

`

export const ComboTextOption = styled.div`


`;

export const BoldText = styled.span`

    font-weight: 700;
    letter-spacing: .1rem;
    color: hsl(231, 100%, 99%);

`;

export const TextOption = styled.p`

    text-transform: uppercase;
    font-weight: 400;
    color: hsl(229, 24%, 87%);

    @media (max-width: 768px) {
        display: none;
    }



`

export const Register = styled.div`

    margin: 0 auto;

    @media (max-width: 768px) {
        position: relative;
    }

`;

export const Title = styled.h1`

    margin-top: 3rem;
    color: hsl(213, 96%, 18%);

    @media (max-width: 768px) {
        margin-top: 1rem;
    }

`;

export const Desc = styled.p`

    margin-top: .5rem;
    color: hsl(231, 11%, 63%);
    margin-bottom: 3rem;

    @media (max-width: 768px) {
        width: 70%;
        font-size: 1.1rem;
        margin-bottom: 1rem;
    }

`;

export const ComboInput = styled.div`


`;

export const TextInput = styled.p`

    color: hsl(213, 96%, 18%);
    font-weight: 500;
    margin-top: 2rem;
    margin-bottom: .5rem;

`;

export const Input = styled.input`

    border-radius: .7rem;
    border: .01rem solid hsl(231, 11%, 63%);
    height: 3rem;
    width: 100%;
    font-family: "Ubuntu";
    color: hsl(213, 96%, 18%);
    font-weight: 700;
    padding: 1rem;
    font-size: 1.1rem;
    outline: none; /* Remover o contorno padrão do navegador */
    transition: all .3s;

    &:focus {
        border-color: hsl(243, 100%, 62%) !important;
    }

    &:hover {
        border-color: hsl(243, 100%, 62%) !important;
    }

    &::placeholder {
        color: hsl(231, 11%, 63%);
    }

    @media (max-width: 768px) {
        &::placeholder {
            font-size: 1rem;
        }
    }

`;

export const DivButton = styled.div`

    display: flex;
    justify-content: end;
    align-items: end;
    width: 100%;
    height: 7.3rem;

    @media (max-width: 768px) {
        background-color: white;
        justify-content: end;
        align-items: center;
        margin-top: 3rem;
        padding: 2rem 3rem;
        position: fixed;
        margin-left: -3rem;
    }

`;

export const ButtonNext = styled.button`

    border-radius: .6rem;
    border: none;
    background-color: hsl(213, 96%, 18%);
    padding: 1rem;
    width: 8rem;
    color: hsl(217, 100%, 97%);
    font-family: "Ubuntu";
    font-weight: 500;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background-color: hsl(208, 96%, 18%);
    }
`;

export const Form = styled.form`

`;