import { put, retry } from 'redux-saga/effects'
import { tribeApi } from '../../operation/api'
import { Creators } from '../ducks/feed'

export function* getPostsRequest(action) {
  try {
    const response = yield retry(6, 10000, tribeApi.get, '/posts')
    yield put(Creators.setPosts(response.data))
  } catch (err) {
    console.log(err)
  }
}