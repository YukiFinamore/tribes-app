import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FormContainer, FormGroup, Label, Input, PasswordInputContainer, PasswordInput } from "./formStyle";
import Button from "../../components/Button";
import { Creators } from '../../store/ducks/profile'
import { LoginBg } from '../../styles/background'
import { LogoContainer, FooterText } from './styles'
import logo from '../../assets/images/logo.png'
import eyeIcon from '../../assets/images/icons/eye.png'

const Form = ({signInFetching, profile, history}) => {
  const signInUser = () => {
    signInFetching()
    history.push('/profile');
  }

  return(
    <FormContainer>
      <FormGroup>
        <Label htmlFor="label">Email</Label>
        <Input id="label" />
      </FormGroup>

      <FormGroup>
        <Label>Senha</Label>
        <PasswordInputContainer>
      	  <PasswordInput/>
      		<img src={eyeIcon} alt="Show Password"></img>
        </PasswordInputContainer>
      </FormGroup>

      <Button onClick={() => signInUser()}>
        Login
      </Button>
    </FormContainer>
  )
};

const Login = ({signInFetching, profile, history}) => (
  <LoginBg>
  	<LogoContainer>
  		<img src={logo} alt="Tribes Logo"></img>
  	</LogoContainer>
  	
  	<Form
      signInFetching={signInFetching}
      profile={profile}
      history={history}
    />

  	<FooterText>
  		<p> 
  			Ainda não possui uma conta?

  			<a href="/">
  				Cadastre-se
  			</a>
  		</p>
  	</FooterText>
  </LoginBg>
)

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Login)