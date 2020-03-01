import { put, takeLatest } from 'redux-saga/effects'
import { FETCH_ARTICLES_START, FETCH_ARTICLES_FAIL, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_TOP_START } from '../store/actions'
import { Articles } from './api'

function* fetchArticles(action) {
  try {
    const data = yield Articles.getAll(action.params)

    yield put({ type: FETCH_ARTICLES_SUCCESS, data })
  } catch (error) {
    yield put({ type: FETCH_ARTICLES_FAIL, error })
  }
}

function* fetchTopHeadlines(action) {
  try {
    const data = yield Articles.getTopHeadlines(action.params)

    yield put({ type: FETCH_ARTICLES_SUCCESS, data })
  } catch (error) {
    yield put({ type: FETCH_ARTICLES_FAIL, error })
  }
}

export default function* articleWatcher() {
  yield takeLatest(FETCH_ARTICLES_START, fetchArticles)
  yield takeLatest(FETCH_ARTICLES_TOP_START, fetchTopHeadlines)
}