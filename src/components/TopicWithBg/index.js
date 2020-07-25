import React from 'react'
import { Container, TopicBg, TopicInfos, CommentsContainer, TopicAuthor } from './styles'
import Avatar from "../Avatar";
import postBg from '../../assets/images/bg/post-bg.png'
import commentIcon from '../../assets/images/icons/comment.png'

const TopicWithBg = ({}) => (
  <Container>
    <TopicBg>
      <img src={postBg}></img> 
    </TopicBg>

    <TopicInfos>
      <h2>
        Título tópico
      </h2>

      <CommentsContainer>
        <img src={commentIcon}></img>

        <p> 47 </p>
      </CommentsContainer>
    </TopicInfos>
    
    <TopicAuthor>
      <Avatar/>

      <p>
        Jéssica Oliveira
      </p>
    </TopicAuthor>
  </Container>
)

export default TopicWithBg
