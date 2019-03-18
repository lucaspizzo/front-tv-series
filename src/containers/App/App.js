import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/Header';
import { GlobalStyle } from '../../global'
import Home from '../Home/Home';
import Detail from '../Detail/Detail';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <React.Fragment>
            <GlobalStyle />
            <Header />
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/detail' component={Detail} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
