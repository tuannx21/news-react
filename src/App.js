import React, { useEffect, useCallback } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import './customBootstrap.css'
import { createBrowserHistory } from "history"
import Header from './components/Header'
import TopNews from './pages/TopNews'
import RecommendNews from './pages/RecommendNews'
import Profile from './pages/Profile'
import { useDispatch } from 'react-redux'
import { FETCH_CURRENT_USER } from './store/actions'

const history = createBrowserHistory()

const App = props => {
  const dispatch = useDispatch()
  const getCurrentUser = useCallback(() => dispatch({ type: FETCH_CURRENT_USER }), [dispatch])

  useEffect(() => {
    getCurrentUser()
  }, [getCurrentUser])

  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={TopNews} />
          <Route path="/recommend" component={RecommendNews} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router >
    </div>
  );
}

export default App
