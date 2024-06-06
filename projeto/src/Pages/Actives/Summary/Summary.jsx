import { useState } from 'react'
import { BoldText, ButtonBack, ButtonNext, ComboTextOption, Confirmation, Container, Desc, DescConfirmation, DivButton, ImageCheck, Line, Menu, NumberOption, Option, Payment, Price, PriceTotal, Register, Screen, Service, TextOption, TextPrice, TextService, TextTotal, Title, TitleConfirmation, TotalPayment,} from './style'

let buttons = document.querySelectorAll('.buttons');
let adds = document.querySelectorAll('.adds');

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => {
      btn.classList.remove("select");
    });
    button.classList.add("select");
  });

});

adds.forEach(add => {
    add.addEventListener("click", () => {
        add.classList.toggle("selected-add");
    });
});

export function Summary() {

  return (
    <>
      <Container>
        <Screen>
          <Menu>
            <Option>
              <NumberOption className='buttons'>1</NumberOption>
              <ComboTextOption>
                <TextOption>Step 1</TextOption>
                <TextOption><BoldText>Your Info</BoldText></TextOption>
              </ComboTextOption>
            </Option>
            <Option>
              <NumberOption className='buttons'>2</NumberOption>
              <ComboTextOption>
                <TextOption>Step 2</TextOption>
                <TextOption><BoldText>Select Plan</BoldText></TextOption>
              </ComboTextOption>
            </Option>
            <Option>
              <NumberOption className='buttons'>3</NumberOption>
              <ComboTextOption>
                <TextOption>Step 3</TextOption>
                <TextOption><BoldText>Add-Ons</BoldText></TextOption>
              </ComboTextOption>
            </Option>
            <Option>
              <NumberOption className='buttons select'>4</NumberOption>
              <ComboTextOption>
                <TextOption>Step 4</TextOption>
                <TextOption><BoldText>Summary</BoldText></TextOption>
              </ComboTextOption>
            </Option>
          </Menu>
          <Register className=''>
            <Title>Finishing up</Title>
            <Desc>Double-check everything looks OK before confirming.</Desc>
            <Payment>
                <Line>
                    <Service>
                        <TextService className='title'>Arcade <span className=''>(Monthly)</span><span className='hide'>(Yearly)</span></TextService>
                        <TextService><u>Change</u></TextService>
                    </Service>
                    <Price>
                        <TextPrice className=''>$9/mo</TextPrice>
                        <TextPrice className='hide'>$90/yr</TextPrice>
                    </Price>
                </Line><hr></hr>
                <Line>
                    <Service>
                        <TextService>Online service</TextService>
                    </Service>
                    <Price>
                        <TextPrice className='parcial'>+$1/mo</TextPrice>
                        <TextPrice className='parcial hide'>+$10/yr</TextPrice>
                    </Price>
                </Line>
                <Line>
                    <Service>
                        <TextService>Larger storage</TextService>
                    </Service>
                    <Price>
                        <TextPrice className='parcial'>+$2/mo</TextPrice>
                        <TextPrice className='parcial hide'>+$20/yr</TextPrice>
                    </Price>
                </Line>
            </Payment>
            <TotalPayment>
                <TextTotal>Total <span className=''>(per month)</span><span className='hide'>(per year)</span></TextTotal>
                <PriceTotal className=''>$12/mo</PriceTotal>
                <PriceTotal className='hide'>$120/yr</PriceTotal>
            </TotalPayment>
            <DivButton>
                <ButtonBack>Go Back</ButtonBack>
                <ButtonNext>Confirm</ButtonNext>
            </DivButton>
          </Register>
          <Confirmation className='hide'>
            <ImageCheck src='check.png'></ImageCheck>
            <TitleConfirmation>Thank You!</TitleConfirmation>
            <DescConfirmation>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</DescConfirmation>
          </Confirmation>
        </Screen>
      </Container>
    </>
  )
}