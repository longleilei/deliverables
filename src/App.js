import React, { Component } from 'react'; 
import './App.css'; 
import Layout from './components/Layout/Layout';
import Container from './containers/Container/Container';
//import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'; 


class App extends Component { 
  render() {
    return (
      <HashRouter>
        <div>
          <Layout>
            <Container /> 
          </Layout>
        </div>
      </HashRouter>
    ); 
  }
}

export default App;
