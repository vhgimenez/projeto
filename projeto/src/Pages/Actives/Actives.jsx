import { useState } from 'react'
import { Adds, Add, BoldText, ButtonBack, ButtonNext, Check, ComboTextOption, Container, ContentInfos, Desc, DescInfo, DivButton, Infos, Menu, NumberOption, Option, Price, Register, Screen, TextInfo, TextOption, TextPrice, Title, TitleInfo, } from './style'

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

export function Actives() {

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
              <NumberOption className='buttons select'>3</NumberOption>
              <ComboTextOption>
                <TextOption>Step 3</TextOption>
                <TextOption><BoldText>Add-Ons</BoldText></TextOption>
              </ComboTextOption>
            </Option>
            <Option>
              <NumberOption className='buttons'>4</NumberOption>
              <ComboTextOption>
                <TextOption>Step 4</TextOption>
                <TextOption><BoldText>Summary</BoldText></TextOption>
              </ComboTextOption>
            </Option>
          </Menu>
          <Register>
            <Title>Pick add-ons</Title>
            <Desc>Add-ons help enhance your gaming experience.</Desc>
            <Adds>
                <Add className='adds selected-add'>
                    <Infos>
                        <Check></Check>
                        <ContentInfos>
                                <TitleInfo>Online service</TitleInfo>
                                <DescInfo>Access to multiplayer games</DescInfo>
                        </ContentInfos>
                    </Infos>
                    <Price>
                        <TextPrice className=''>+$1/mo</TextPrice>
                        <TextPrice className='hide'>+$10/yr</TextPrice>
                    </Price>
                </Add>
                <Add className='adds selected-add'>
                    <Infos>
                        <Check></Check>
                        <ContentInfos>
                                <TitleInfo>Larger storage</TitleInfo>
                                <DescInfo>Extra 1TB of cloud save</DescInfo>
                        </ContentInfos>
                    </Infos>
                    <Price>
                        <TextPrice className=''>+$2/mo</TextPrice>
                        <TextPrice className='hide'>+$20/yr</TextPrice>
                    </Price>
                </Add>
                <Add className='adds'>
                    <Infos>
                        <Check></Check>
                        <ContentInfos>
                                <TitleInfo>Customizable Profile</TitleInfo>
                                <DescInfo>Custom theme on your profile</DescInfo>
                        </ContentInfos>
                    </Infos>
                    <Price>
                        <TextPrice className=''>+$2/mo</TextPrice>
                        <TextPrice className='hide'>+$20/yr</TextPrice>
                    </Price>
                </Add>
            </Adds>
            <DivButton>
                <ButtonBack>Go Back</ButtonBack>
                <ButtonNext>Next Step</ButtonNext>
            </DivButton>
          </Register>
        </Screen>
      </Container>
    </>
  )
}