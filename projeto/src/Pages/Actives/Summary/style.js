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
    background-color: hsl(243, 100%, 62%);
    padding: 1rem;
    width: 8rem;
    color: hsl(217, 100%, 97%);
    font-family: "Ubuntu";
    font-weight: 500;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background-color: hsl(243, 40%, 62%);
    }
`;

export const Payment = styled.div`

    margin-top: 2.5rem;
    padding: 1.5rem;
    background-color: hsl(217, 100%, 97%);
    border-radius: .6rem;

    hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border-color: hsl(231, 100%, 99%);
    }

`;

export const Line = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: .8rem;

`;

export const Service = styled.div`

    .title {
        font-weight: 700;
        color: hsl(213, 96%, 18%);
        font-size: 1.1rem;
    }

`;

export const Price = styled.div`

    .parcial {
        font-weight: 500;
    }

`;

export const TextService = styled.p`

    margin-bottom: .5rem;
    color: hsl(231, 11%, 63%);

    u {
        cursor: pointer;
    }

`;

export const TextPrice = styled.p`

    font-weight: 700;
    color: hsl(213, 96%, 18%);
    font-size: 1.1rem;

`;

export const TotalPayment = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;

`;

export const TextTotal = styled.p`

    color: hsl(231, 11%, 63%);

`;

export const PriceTotal = styled.p`

    font-size: 1.2rem;
    color: hsl(243, 100%, 62%);
    font-weight: 700;

`;

export const Confirmation = styled.div`

    width: 50%;
    align-items: center;
    text-align: center;
    margin: auto;

`;

export const ImageCheck = styled.img`

    width: 5rem;
    height: 5rem;
    margin-bottom: 2rem;

`;

export const TitleConfirmation = styled.h1`

    color: hsl(213, 96%, 18%);
    margin-bottom: 1rem;

`;

export const DescConfirmation = styled.p`

    color: hsl(231, 11%, 63%);
    font-size: 1.05rem;

`;