import React from 'react'
import { Container, TopicInfos, CommentsContainer, TopicAuthor } from './styles'
import Avatar from "../Avatar";
import commentIcon from '../../assets/images/icons/comment.png'

const Topic = ({}) => (
  <Container>
    <TopicInfos>
      <h2>
        Título tópico
      </h2>

      <p>
        Lorem ipsum dolor sit ...
      </p>

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

export default Topic
