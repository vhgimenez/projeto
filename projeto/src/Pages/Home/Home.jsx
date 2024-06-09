import { useState } from 'react'
import { BoldText, ButtonNext, ComboInput, ComboTextOption, Container, Desc, DivButton, Form, Input, Menu, NumberOption, Option, Register, Screen, TextInput, TextOption, Title } from './style'
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/plan');
  };

  const Page3 = (e) => {
    e.preventDefault();
    navigate('/actives');
  };

  const Page4 = (e) => {
    e.preventDefault();
    navigate('/summary');
  };

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
              <NumberOption className='buttons' onClick={handleSubmit}>2</NumberOption>
              <ComboTextOption>
                <TextOption>Step 2</TextOption>
                <TextOption><BoldText>Select Plan</BoldText></TextOption>
              </ComboTextOption>
            </Option>
            <Option>
              <NumberOption className='buttons' onClick={Page3}>3</NumberOption>
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
            <Title>Personal Info</Title>
            <Desc>Please provide your name, email address, and phone number.</Desc>
            <Form onSubmit={handleSubmit}>
            <ComboInput>
              <TextInput>Name</TextInput>
              <Input placeholder='e.g. Stephen King' required></Input>
            </ComboInput>
            <ComboInput>
              <TextInput>Email Address</TextInput>
              <Input placeholder='e.g. stephenking@lorem.com' required></Input>
            </ComboInput>
            <ComboInput>
              <TextInput>Phone Number</TextInput>
              <Input placeholder='e.g. +1 234 567 890' required></Input>
            </ComboInput>
            <DivButton>
              <ButtonNext>Next Step</ButtonNext>
            </DivButton>
            </Form>
          </Register>
        </Screen>
      </Container>
    </>
  )
}

