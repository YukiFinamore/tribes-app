import React from 'react'
import { Container, TopicInfos, CommentsContainer, TopicAuthor, AvatarDefault } from './styles'
import Avatar from "../Avatar";
import commentIcon from '../../assets/images/icons/comment.png'

const Topic = ({post}) => (
  <Container>
    <TopicInfos>
      <h2>
        {post.title}
      </h2>

      <p>
        {post.description}
      </p>

      <CommentsContainer>
        <img src={commentIcon}></img>

        <p> {post.comments} </p>
      </CommentsContainer>
    </TopicInfos>
    
    <TopicAuthor>
      {
        post.author.image !== "" ? (
          <Avatar img={post.author.image}/>    
        ) : (
          <AvatarDefault>
            <p> {post.author.name.match(/\b(\w)/g).join('')} </p>
          </AvatarDefault>
        )
      }

      <p>
        {post.author.name}
      </p>
    </TopicAuthor>
  </Container>
)

export default Topic
