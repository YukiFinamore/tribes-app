import React, { Component } from 'react'
import { FormContainer, FormGroup, Label, Input, PasswordInputContainer, PasswordInput } from "./formStyle";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { LoginBg } from '../../styles/background'
import { LogoContainer, FooterText } from './styles'
import logo from '../../assets/images/logo.png'
import eyeIcon from '../../assets/images/icons/eye.png'

const Form = () => (
  <FormContainer>
    <FormGroup>
      <Label htmlFor="label">Email</Label>
      <Input id="label" />
    </FormGroup>

    <FormGroup>
      <Label>Senha</Label>
      <PasswordInputContainer>
    	  <PasswordInput/>
    		<img src={eyeIcon}></img>
      </PasswordInputContainer>
    </FormGroup>

    <Link to="/profile">
      <Button>
        Login
      </Button>
    </Link>
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