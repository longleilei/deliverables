import React, { Component } from 'react'; 
import './App.css'; 
import Layout from './components/Layout/Layout';
import Container from './containers/Container/Container';
import { BrowserRouter } from 'react-router-dom'; 

class App extends Component { 
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <Container /> 
          </Layout>
        </div>
      </BrowserRouter>
    ); 
  }
}

export default App;
