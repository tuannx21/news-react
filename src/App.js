import React from 'react';
import { Route, BrowserRouter , Switch } from 'react-router-dom'
import './customBootstrap.css';
import { createBrowserHistory } from "history";
import Header from './components/Header';
import TopNews from './pages/TopNews'
import RecommendNews from './pages/RecommendNews'
import Profile from './pages/Profile'

const history = createBrowserHistory()

function App() {
  return (
    <div className="App">
      <BrowserRouter  history={history}>
          <Header />
          <Switch>
            <Route exact path="/" component={TopNews} />
            <Route path="/recommend" component={RecommendNews} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </BrowserRouter >
    </div>
  );
}

export default App;
