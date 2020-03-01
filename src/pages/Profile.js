import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LOGIN_START, LOGOUT_START } from '../store/actions'

const LogOutView = props => {
  const [username, setUsername] = useState('')
  const [keyword, setKeyword] = useState('bitcoin')

  const dispatch = useDispatch()
  const logIn = () => dispatch({ type: LOGIN_START, user: { username, keyword } })

  return (
    <div>
      <h1 className="mb-5">Profile</h1>

      <div className="form-group">
        <label htmlFor="username">User Name <small Name="text-danger">(required)</small></label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
          id="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="userPreferenceKeyword">What you interested in ? Choose one</label>
        <select
          className="form-control"
          id="userPreferenceKeyword"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        >
          <option value="bitcoin">bitcoin</option>
          <option value="apple">apple</option>
          <option value="earthquake">earthquake</option>
          <option value="animal">animal</option>
        </select>
      </div>
      <button
        className="btn btn-primary"
        disabled={!username}
        onClick={logIn}
      >
        Register Now
      </button>
    </div>
  )
}

const LogInView = props => {
  const currentUser = useSelector(state => state.auth.currentUser)
  const dispatch = useDispatch()
  const logOut = () => dispatch({ type: LOGOUT_START })

  return (
    <div>
      <h1 className="mb-5">Welcome {currentUser.username} to the world-class news website ^^</h1>
      <p>Not you? Just sign out</p>
      <button
        className="btn btn-danger"
        onClick={logOut}
      >
        Sign Out
      </button>
    </div>
  )
}

const Profile = props => {
  const currentUser = useSelector(state => state.auth.currentUser)

  return (
    <div className="container" style={{ paddingTop: '80px' }}>
      {
        currentUser.username ? <LogInView /> : <LogOutView />
      }
    </div>
  )
}

export default Profile