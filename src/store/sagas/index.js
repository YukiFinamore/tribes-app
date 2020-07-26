import { all, takeLatest } from 'redux-saga/effects'

import { Types as ProfileTypes } from '../ducks/profile'

import { getProfileRequest } from './profile'

export default function* rootSaga() {
  yield all([
    takeLatest(ProfileTypes.SIGN_IN_FETCHING, getProfileRequest),
  ])
}
