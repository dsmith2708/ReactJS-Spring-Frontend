import React, { Component } from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from '../header/Header';
import { Home } from '../home/Home';
import { ViewUsers } from '../view/ViewUsers';
import { Edit } from '../edit/Edit';
import { DeleteMultiple } from '../delete/DeleteMultiple';

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
              <Route path="/edit" component={Edit} />
              <Route path="/delete" component={DeleteMultiple} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
