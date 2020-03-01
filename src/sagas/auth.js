import { put, takeLatest } from 'redux-saga/effects'
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGIN_START, LOGOUT_START, FETCH_CURRENT_USER } from '../store/actions'

function* login(action) {
  try {
    yield put({ type: LOGIN_SUCCESS, user: action.user })
    yield localStorage.setItem('currentUser', JSON.stringify(action.user))

  } catch (error) {
    yield put({ type: LOGIN_FAIL, error })
  }
}

function* logout() {
  yield localStorage.removeItem('currentUser')
  yield put({ type: LOGOUT_SUCCESS })
}

function* getCurrentUser() {
  try {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'))
    if (!storedUser) return

    yield put({ type: LOGIN_SUCCESS, user: storedUser })
  } catch (error) {
    throw new Error(error)
  }
}

export default function* authWatcher() {
  yield takeLatest(LOGIN_START, login)
  yield takeLatest(LOGOUT_START, logout)
  yield takeLatest(FETCH_CURRENT_USER, getCurrentUser)
}