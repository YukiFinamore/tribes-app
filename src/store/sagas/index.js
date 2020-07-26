import { all, takeLatest } from 'redux-saga/effects'

import { Types as ProfileTypes } from '../ducks/profile'
import { Types as FeedTypes } from '../ducks/feed'

import { getProfileRequest } from './profile'
import { getPostsRequest } from './feed'

export default function* rootSaga() {
  yield all([
    takeLatest(ProfileTypes.SIGN_IN_FETCHING, getProfileRequest),
    takeLatest(FeedTypes.GET_POSTS, getPostsRequest),
  ])
}
