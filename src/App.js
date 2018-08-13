import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import {Layout} from 'antd';

import store from './store';
import NavBar from './common/navBar';
import Header from './common/header';
import Content from './common/content';
import FooterPart from './common/footer';

class App extends Component {
  render() {
    return (
      <div className='AppRoot'>
        <Provider store={store}>
          <BrowserRouter>
            <Layout style={{height: '100%'}}>
              <NavBar></NavBar>
              <Layout>
                <Header></Header>
                <Content></Content>
                <FooterPart></FooterPart>
              </Layout>
            </Layout>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
