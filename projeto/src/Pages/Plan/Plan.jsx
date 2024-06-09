import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BoldText, ButtonBack, ButtonNext, Card, Cards, Check, ComboTextOption, Container, Desc, DivButton, DivCheck, ImageCard, Menu, NumberOption, Option, Price, Register, Screen, TextCheck, TextOption, Title, TitleCard } from './style'


export function Plan() {

  const [mounted,setMounted] = useState(false)
  const navigate = useNavigate();

  const BackPage = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const NextPage = (e) => {
    e.preventDefault();
    navigate('/actives');
  };

  const Page4 = (e) => {
    e.preventDefault();
    navigate('/summary');
  };

  useEffect(() => {
          
    if(mounted){

      let buttons = document.querySelectorAll('.buttons');
      let cards = document.querySelectorAll('.cards');
      let dates = document.querySelectorAll('.dates');
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      let pricesMonth = document.querySelectorAll('.prices-month');
      let pricesYear = document.querySelectorAll('.prices-year');

      buttons.forEach(button => {
        button.addEventListener("click", () => {
          buttons.forEach(btn => {
            btn.classList.remove("select");
          });
          button.classList.add("select");
        });

      });

      cards.forEach(card => {
        card.addEventListener("click", () => {
          Array.from(cards).forEach(cd => {
            cd.classList.remove("selected-card");
          });
          card.classList.add("selected-card");
        });
      });

      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("click", () => {
          dates.forEach(date => {
            date.classList.toggle('selected-date');
          });

          if (pricesMonth.length > 0) {
            pricesMonth.forEach(pricem => {
              pricem.classList.toggle('hide');
            });
          }

          if (pricesYear.length > 0) {
            pricesYear.forEach(pricey => {
              pricey.classList.toggle('hide');
            });
          }
        });
      });

    }

    else{
        setMounted(true);
    }

  },[mounted])

  return (
    <>
      <Container>
        <Screen>
          <Menu>
            <Option>
              <NumberOption className='buttons' onClick={BackPage}>1</NumberOption>
              <ComboTextOption>
                <TextOption>Step 1</TextOption>
                <TextOption><BoldText>Your Info</BoldText></TextOption>
              </ComboTextOption>
            </Option>
            <Option>
              <NumberOption className='buttons select'>2</NumberOption>
              <ComboTextOption>
                <TextOption>Step 2</TextOption>
                <TextOption><BoldText>Select Plan</BoldText></TextOption>
              </ComboTextOption>
            </Option>
            <Option>
              <NumberOption className='buttons' onClick={NextPage}>3</NumberOption>
              <ComboTextOption>
                <TextOption>Step 3</TextOption>
                <TextOption><BoldText>Add-Ons</BoldText></TextOption>
              </ComboTextOption>
            </Option>
            <Option>
              <NumberOption className='buttons' onClick={Page4}>4</NumberOption>
              <ComboTextOption>
                <TextOption>Step 4</TextOption>
                <TextOption><BoldText>Summary</BoldText></TextOption>
              </ComboTextOption>
            </Option>
          </Menu>
          <Register>
            <Title>Select your plan</Title>
            <Desc>You have the option of monthly or yearly billing.</Desc>
            <Cards>
              <Card className='cards selected-card'>
                <ImageCard src='icon-arcade.svg'></ImageCard>
                <TitleCard>Arcade</TitleCard>
                <Price className='prices-month'>$9/mo</Price>
                <Price className='prices-year hide'>$90/yr</Price>
                <Price className='prices-year hide'><span>2 months free</span></Price>
              </Card>
              <Card className='cards'>
                <ImageCard src='icon-advanced.svg'></ImageCard>
                <TitleCard>Advanced</TitleCard>
                <Price className='prices-month'>$12/mo</Price>
                <Price className='prices-year hide'>$120/yr</Price>
                <Price className='prices-year hide'><span>2 months free</span></Price>
              </Card>
              <Card className='cards'>
                <ImageCard src='icon-pro.svg'></ImageCard>
                <TitleCard>Pro</TitleCard>
                <Price className='prices-month'>$15/mo</Price>
                <Price className='prices-year hide'>$150/yr</Price>
                <Price className='prices-year hide'><span>2 months free</span></Price>
              </Card>
            </Cards>
            <DivCheck>
              <TextCheck className='dates selected-date'>Monthly</TextCheck>
              <div className="checkbox-wrapper-2">
                <Check className="sc-gJwTLC ikxBAC"/>
              </div>
              <TextCheck className='dates'>Yearly</TextCheck>
            </DivCheck>
            <DivButton>
              <ButtonBack onClick={BackPage}>Go Back</ButtonBack>
              <ButtonNext onClick={NextPage}>Next Step</ButtonNext>
            </DivButton>
          </Register>
        </Screen>
      </Container>
    </>
  )
}

