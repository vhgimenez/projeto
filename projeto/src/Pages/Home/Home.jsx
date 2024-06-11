import { useState } from 'react'
import { BoldText, ButtonNext, ComboInput, ComboTextOption, Container, Desc, DivButton, Form, Input, Menu, NumberOption, Option, Register, Screen, TextInput, TextOption, Title } from './style'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export function Home() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  let buttons = document.querySelectorAll('.buttons');

  const handleRegisterUsers = async () => {     
    try {
      const response = await axios.post("http://localhost:3000/users", {
        name,
        email,
        phone
      });

      console.log('Usuário cadastrado com sucesso!');
      navigate('/plan');
        
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      alert('Erro ao cadastrar usuário. Verifique o console para mais detalhes.');
    }
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => {
        btn.classList.remove("select");
      });
      button.classList.add("select");
    });

  });

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
            <Form onSubmit={handleSubmit} method='POST'>
            <ComboInput>
              <TextInput>Name</TextInput>
              <Input placeholder='e.g. Stephen King' required onChange={(event) => { setName(event.target.value) }} name='name' autoComplete='name'></Input>
            </ComboInput>
            <ComboInput>
              <TextInput>Email Address</TextInput>
              <Input placeholder='e.g. stephenking@lorem.com' required onChange={(event) => { setEmail(event.target.value) }} name='email' autoComplete='email'></Input>
            </ComboInput>
            <ComboInput>
              <TextInput>Phone Number</TextInput>
              <Input placeholder='e.g. +1 234 567 890' required onChange={(event) => { setPhone(event.target.value) }} name='phone' autoComplete='phone'></Input>
            </ComboInput>
            <DivButton>
              <ButtonNext onClick={handleRegisterUsers}>Next Step</ButtonNext>
            </DivButton>
            </Form>
          </Register>
        </Screen>
      </Container>
    </>
  )
}

