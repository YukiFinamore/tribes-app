import { put, retry } from 'redux-saga/effects'
import { tribeApi } from '../../operation/api'
import { Creators } from '../ducks/profile'

export function* getProfileRequest(action) {
  try {
    const response = yield retry(6, 10000, tribeApi.get, '/profile')
    yield put(Creators.setProfile(response.data))
    yield put(Creators.signInSuccess())
  } catch (err) {
    console.log(err)
  }
}