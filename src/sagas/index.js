import { all } from 'redux-saga/effects'
import articlesWatcher from './articles'
import authWatcher from './auth'

export default function* rootSaga() {
  yield all([
    articlesWatcher(),
    authWatcher()
  ])
}