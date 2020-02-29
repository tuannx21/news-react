import React from 'react';
import './customBootstrap.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="/#">News React</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Link</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container" style={{ padding: '48px 0' }}>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card" style={{ width: '100%' }}>
              <figure className="card-img-top">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Zac_Efron_at_the_Baywatch_Red_Carpet_Premiere_Sydney_Australia.jpg" alt="..." />
              </figure>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
