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

    .hide {
        display: none;
        visibility: hidden;
        opacity: 0;
    }

    
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
    width: 50%;

    @media (max-width: 768px) {
        position: relative;
        width: 100%;
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
        margin-bottom: 2rem;
        font-size: 1.1rem;
    }

`;

export const Cards = styled.div`

    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;

    
    .selected-card {
        border: 0.01rem solid hsl(243, 100%, 62%) !important;
    }

    @media (max-width: 768px) {
        gap: .5rem;
    }

`;

export const Card = styled.div`

    border: 0.01rem solid hsl(229, 24%, 87%);
    border-radius: .6rem;
    padding: 1.5rem 1rem;
    width: 100%;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        border-color: hsl(243, 100%, 62%);
    }

    @media (max-width: 768px) {
        padding: 1rem;
    }

`;

export const ImageCard = styled.img`

`;

export const TitleCard = styled.p`

    margin-top: 2.5rem;
    color: hsl(213, 96%, 18%);
    font-weight: 700;
    font-size: 1.1rem;

    @media (max-width: 768px) {
        font-size: 1rem;
        margin-top: 1.5rem;
    }

`;

export const Price = styled.p`

    margin-top: .3rem;
    color: hsl(229, 24%, 87%);

    span {
        color: hsl(213, 96%, 18%);
        font-size: .9rem;
    }

    @media (max-width: 768px) {
        span {
            font-size: .8rem;
        }
    }

`;

export const DivButton = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 100%;
    height: 7.3rem;

    @media (max-width: 768px) {
        background-color: white;
        margin-top: 3rem;
        padding: 2rem 3rem;
        position: fixed;
        margin-left: -3rem;
        margin-top: 8.3rem;
    }

`;

export const ButtonBack = styled.button`
    
    border-radius: .6rem;
    border: none;
    background-color: transparent;
    padding: 1rem 0;
    color: hsl(231, 11%, 63%);
    font-family: "Ubuntu";
    font-weight: 500;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        color: hsl(208, 96%, 18%);
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

export const DivCheck = styled.div`

    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    background-color: hsl(217, 100%, 97%);
    border-radius: .6rem;
    padding: .7rem;

    .checkbox-wrapper-2 .ikxBAC {
    appearance: none;
    background-color: #dfe1e4;
    border-radius: 72px;
    border-style: none;
    flex-shrink: 0;
    height: 20px;
    margin: 0;
    position: relative;
    width: 30px;
    
  }

  .checkbox-wrapper-2 .ikxBAC::before {
    bottom: -6px;
    content: "";
    left: -6px;
    position: absolute;
    right: -6px;
    top: -6px;
  }

  .checkbox-wrapper-2 .ikxBAC,
  .checkbox-wrapper-2 .ikxBAC::after {
    transition: all 100ms ease-out;
  }

  .checkbox-wrapper-2 .ikxBAC::after {
    background-color: #fff;
    border-radius: 50%;
    content: "";
    height: 14px;
    left: 3px;
    position: absolute;
    top: 3px;
    width: 14px;
  }

  .checkbox-wrapper-2 input[type=checkbox] {
    cursor: pointer;
  }

  .checkbox-wrapper-2 .ikxBAC:hover {
    background-color: #c9cbcd;
    transition-duration: 0s;
  }

  .checkbox-wrapper-2 .ikxBAC:checked {
    background-color: #6e79d6;
  }

  .checkbox-wrapper-2 .ikxBAC:checked::after {
    background-color: #fff;
    left: 13px;
  }

  .checkbox-wrapper-2 :focus:not(.focus-visible) {
    outline: 0;
  }

  .checkbox-wrapper-2 .ikxBAC:checked:hover {
    background-color: #535db3;
  }

  .selected-date {
        color: hsl(213, 96%, 18%);
    }

`;

export const TextCheck = styled.p`

    color: hsl(231, 11%, 63%);
    font-weight: 500;
    transition: all .3s;

`;

export const Check = styled.input.attrs({ type: 'checkbox' })`
 

`;