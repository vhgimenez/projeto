import { useState } from 'react'
import { BoldText, ButtonNext, ComboInput, ComboTextOption, Container, Desc, DivButton, Input, Menu, NumberOption, Option, Register, Screen, TextInput, TextOption, Title } from './style'

let buttons = document.querySelectorAll('.buttons');

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => {
      btn.classList.remove("select");
    });
    button.classList.add("select");
  });

});

export function Home() {

  return (
    <>
      <Container>
        <Screen>
          <Menu>
            <img src="bg-sidebar-desktop.svg"></img>
            <Option>
              <NumberOption className='buttons select'>1</NumberOption>
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
              <NumberOption className='buttons'>4</NumberOption>
              <ComboTextOption>
                <TextOption>Step 4</TextOption>
                <TextOption><BoldText>Summary</BoldText></TextOption>
              </ComboTextOption>
            </Option>
          </Menu>
          <Register>
            <Title>Personal Info</Title>
            <Desc>Please provide your name, email address, and phone number.</Desc>
            <ComboInput>
              <TextInput>Name</TextInput>
              <Input placeholder='e.g. Stephen King'></Input>
            </ComboInput>
            <ComboInput>
              <TextInput>Email Address</TextInput>
              <Input placeholder='e.g. stephenking@lorem.com'></Input>
            </ComboInput>
            <ComboInput>
              <TextInput>Phone Number</TextInput>
              <Input placeholder='e.g. +1 234 567 890'></Input>
            </ComboInput>
            <DivButton>
              <ButtonNext>Next Step</ButtonNext>
            </DivButton>
          </Register>
        </Screen>
      </Container>
    </>
  )
}

