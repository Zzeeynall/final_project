import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from './Style';

import HomePage from '../home-page';
import Login from '../admin-panel-login';
import CoinList from '../coins-list';
import CoinMoreInfo from '../coin-more-info';
import Admin from '../admin';
import Add from '../admin-add';
import Edit from '../admin-edit';


function App() {
  return (
    <Container>
      <Switch>
          <Route path='/' component={HomePage} exact/>
          <Route path='/login' component={Login}/>
          <Route path='/coins/:type' component={CoinList}/>
          <Route path='/coin' component={CoinList}/>
          <Route path='/search' component={CoinList}/>
          <Route path='/desc/:id' component={CoinMoreInfo}/>
          <Route path='/admin' component={Admin}/>
          <Route path='/add' component={Add}/>
          <Route path='/edit/:id' component={Edit}/>
      </Switch>
    </Container>
  );
}

export default App;
