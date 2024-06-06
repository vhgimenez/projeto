import styled from 'styled-components';

export const Container = styled.div`

    background-color: hsl(217, 100%, 97%);
    height: 100vh;
    display: flex;

`;

export const Screen = styled.div`

    margin: auto;
    width: 50%;
    height: 65%;
    background-color: white;
    border-radius: 2rem;
    padding: 1rem;
    display: flex;

    .hide {
        display: none;
        visibility: hidden;
        opacity: 0;
    }

`

export const Menu = styled.div`

    background: black url("bg-sidebar-desktop.svg") no-repeat;
    width: 17rem;
    height: 100%;
    border-radius: 1rem;
    padding: 2.5rem 2rem;

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

`

export const Register = styled.div`

    margin: 0 auto;
    width: 50%;

`;

export const Title = styled.h1`

    margin-top: 3rem;
    color: hsl(213, 96%, 18%);

`;

export const Desc = styled.p`

    margin-top: .5rem;
    color: hsl(231, 11%, 63%);
    margin-bottom: 1.5rem;

`;


export const DivButton = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 100%;
    height: 5.5rem;

`;

export const ButtonBack = styled.button`
    
    border-radius: .6rem;
    border: none;
    background-color: transparent;
    padding: 1rem 1rem 1rem 0;
    color: hsl(231, 11%, 63%);
    font-family: "Ubuntu";
    font-weight: 500;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        color:  hsl(213, 96%, 18%);
    }

`;

export const ButtonNext = styled.button`

    border-radius: .6rem;
    border: none;
    background-color: hsl(208, 96%, 18%);
    padding: 1rem;
    width: 8rem;
    color: hsl(217, 100%, 97%);
    font-family: "Ubuntu";
    font-weight: 500;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all .3s;

    &:hover {
    }
`;

export const Adds = styled.div`

    .selected-add {
        border-color: hsl(243, 100%, 62%);
        background-color: hsl(217, 100%, 97%);
    }

`;

export const Add = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 0.01rem solid hsl(231, 11%, 63%);
    border-radius: .6rem;
    padding: 1.5rem;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        border-color: hsl(243, 100%, 62%);
    }

`;

export const Infos = styled.div`

    display: flex;
    align-items: center;
    gap: 1.5rem;

`;

export const Price = styled.div`

    display: flex;
    align-items: center;

`;

export const ContentInfos = styled.div`

    display: block;
    align-items: center;

`;

export const Check = styled.input.attrs({ type: 'checkbox' })`

    cursor: pointer;

`;

export const TextInfo = styled.div`

`;

export const TitleInfo = styled.h1`

    font-size: 1.2rem;
    color: hsl(213, 96%, 18%);

`;

export const DescInfo = styled.p`

    color: hsl(231, 11%, 63%);
    font-size: 1rem;

`;

export const TextPrice = styled.p`

    color: hsl(243, 100%, 62%);

`;
