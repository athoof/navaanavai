import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Responsive, Image, Segment } from 'semantic-ui-react';
import './App.css';
import logo from './navaanavai.svg';

const menuItems = [
  { key: 'home', active: true, name: "Home" },
  { key: 'faq', name: "FAQ" },
  { key: 'contact', name: "Contact" },
]

const menu = () => {
  <Responsive as={Menu} inverted color={'red'} items={menuItems} fluid />
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <Responsive as={Container} className="main" fluid >
        <Image className='logo' src={logo} centered />
        </Responsive>
      <Responsive as={Container} className='faq' fluid><Segment vertical secondary inverted color={'red'} as='h1'>Who are we?</Segment></Responsive>
      </div>
    );
  }
}

export default App;
