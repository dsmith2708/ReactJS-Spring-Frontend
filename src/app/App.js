import React, { Component } from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from '../header/Header';
import { Home } from '../home/Home';
import { ViewUsers } from '../view/ViewUsers';

class App extends Component {
  render() {
    return (
      <div className="Base">
        <BrowserRouter>
          <div className="main-container">
            <Header />
            <div className="page-contents">
              <Route exact path="/" component={Home} />
              <Route path="/view" component={ViewUsers} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
