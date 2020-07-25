import React, { Component } from 'react'
import Header from "../../components/Header";
import Avatar from "../../components/Avatar";
import { Link } from "react-router-dom";
import { Container, AvatarContainer, CamIcon, TopicsList, ListItemContainer } from './styles'
import { ProfileBg } from '../../styles/background'
import profileTopicIcon from '../../assets/images/icons/profile-topic.png'
import dragIcon from '../../assets/images/icons/drag.png'
import camIcon from '../../assets/images/icons/cam.png'

const ListItem = () => (
  <Link to="/feed">
  	<ListItemContainer>
  		<img src={profileTopicIcon}></img> 
  		<p> Lorem Ipsum </p>
  		<img src={dragIcon}></img>
  	</ListItemContainer>
  </Link>
)

export default () => (
  <ProfileBg>
  	<Header/>

  	<Container>
  		<AvatarContainer>
  			<Avatar/>

  			<CamIcon>
  				<img src={camIcon}></img>
  			</CamIcon>
  		</AvatarContainer>


  		<p> Prioridade de tópicos </p>

  		<TopicsList>
				<ListItem/>
				<ListItem/>
				<ListItem/>
				<ListItem/>
				<ListItem/>
  		</TopicsList>
  	</Container>
  </ProfileBg>
)
