import React from 'react'
import { Container, TopicBg, TopicInfos, CommentsContainer, TopicAuthor, AvatarDefault } from './styles'
import Avatar from "../Avatar";
import commentIcon from '../../assets/images/icons/comment.png'

const TopicWithBg = ({post}) => (
  <Container>
    <TopicBg>
      <img src={post.background} alt="Background"></img> 
    </TopicBg>

    <TopicInfos>
      <h2>
        {post.title}
      </h2>

      <CommentsContainer>
        <img src={commentIcon} alt="Comments"></img>

        <p> {post.comments} </p>
      </CommentsContainer>
    </TopicInfos>
    
    <TopicAuthor>
      {
        post.author.image !== "" ? (
          <Avatar img={post.author.image} alt="Author"/>    
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

export default TopicWithBg
