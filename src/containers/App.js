import * as React from 'react';
import AppContent from '../components/AppContent';
import Header from '../components/Header';
import logo from '../logo.svg';
import './App.css';
import { render }           from 'react-dom';

class App extends React.Component {

   render() {
    return (
      <div className="App">
        <Header pageTitle="Welcome to React and oidc-client-js" logoSrc={logo} />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <AppContent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;