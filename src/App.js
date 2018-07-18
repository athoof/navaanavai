import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Menu, Container, Responsive } from 'semantic-ui-react';

const menuItems = [
  { key: 'home', active: true, name: "Home" },
  { key: 'faq', name: "FAQ" },
  { key: 'contact', name: "Contact" },
]

class App extends Component {
  render() {
    return (
      <div className="App">
      <Responsive className="main" as={Container} fluid >
        <Responsive as={Menu} inverted color={'red'} items={menuItems} fluid />
      </Responsive>
      </div>
    );
  }
}

export default App;
