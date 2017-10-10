import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import AddItem from './components/AddItem2';
import IndexItem from './components/IndexItem';
import EditItem from './components/EditItem';
import Header from './components/Layout';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/add-item' component={AddItem} />
        <Route path='/index' component={IndexItem} />
        <Route path='/edit/:id' component={EditItem} />
        <Route path='/header' component={Header} />
      </div>
  </Router>,
  document.getElementById('root')
);
