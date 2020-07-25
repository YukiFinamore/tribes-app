import React, { Component } from 'react'
import { FormContainer, FormGroup, Label, Input, PasswordInputContainer, Message } from "./formStyle";
import Button from "../../components/Button";
import { LoginBg } from '../../styles/background'
import { LogoContainer, FooterText } from './styles'
import logo from '../../assets/images/logo.png'
import eyeIcon from '../../assets/images/icons/eye.png'

const Form = () => (
  <FormContainer>
    <FormGroup>
      <Label htmlFor="label">Email</Label>
      <Input id="label" />
      <Message>This is the validation message</Message>
    </FormGroup>

    <FormGroup>
      <Label>Senha</Label>
      <PasswordInputContainer>
    	  <Input/>
    		<img src={eyeIcon}></img>
      </PasswordInputContainer>

      <Message>This is the validation message</Message>
    </FormGroup>

    <Button>
    	Login
    </Button>
  </FormContainer>
);

export default () => (
  <LoginBg>
  	<LogoContainer>
  		<img src={logo}></img>
  	</LogoContainer>
  	
  	<Form/>

  	<FooterText>
  		<p> 
  			Ainda não possui uma conta?

  			<a href="javascript:void(0)">
  				Cadastre-se
  			</a>
  		</p>
  	</FooterText>
  </LoginBg>
)