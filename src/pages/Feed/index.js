import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators } from '../../store/ducks/feed'
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import TopicWithBg from "../../components/TopicWithBg";
import Topic from "../../components/Topic";
import { Wrapper, Container, TopicContainer } from './styles'
import arrowIcon from '../../assets/images/icons/arrow_down.png'

const Feed = ({getPosts, profile, feed}) => {
  useEffect(() => {
    getPosts()
  }, []);

  return(
    <>
      {
        feed.loading
          ? <Loader/>
          : 
            <Wrapper>
              <Header title={profile.name} right={arrowIcon}/>
              <Container>
                <TopicContainer>
                  {
                    feed.posts.map((post, index) => 
                      post.background !== "" ? (
                        <TopicWithBg key={index} post={post}/>
                      ) : (
                        <Topic key={index} post={post}/>
                      )
                    )
                  }
                </TopicContainer>
              </Container>
            </Wrapper>
      }
    </>
  )
}

const mapStateToProps = state => ({
  profile: state.profile,
  feed: state.feed,
});

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed)