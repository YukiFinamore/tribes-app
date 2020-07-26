import React from 'react'
import { connect } from 'react-redux'
import Header from "../../components/Header";
import Avatar from "../../components/Avatar";
import Loader from "../../components/Loader";
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

const Profile = ({profile}) => (
  <>
    {
      profile.loading
        ? <Loader/>
        : 
          <ProfileBg>
            <Header title={profile.name}/>

            <Container>
              <AvatarContainer>
                <Avatar img={profile.image}/>

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
    }
  </>
)

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(
  mapStateToProps,
  null
)(Profile)
