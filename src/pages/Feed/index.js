import React from 'react'
import Header from "../../components/Header";
import TopicWithBg from "../../components/TopicWithBg";
import Topic from "../../components/Topic";
import { Wrapper, Container, TopicContainer } from './styles'

export default () => (
  <Wrapper>
    <Header/>
    <Container>
      <TopicContainer>
        <TopicWithBg/>
        <Topic/>
        <TopicWithBg/>
        <Topic/>
        <TopicWithBg/>
        <Topic/>
        <TopicWithBg/>
        <Topic/>
      </TopicContainer>
    </Container>
  </Wrapper>
)
