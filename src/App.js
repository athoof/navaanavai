import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Responsive, Image, Segment, Button, Icon} from 'semantic-ui-react';
import './App.css';
import logo from './navaanavai.svg';
import { FullPage, Slide } from 'react-full-page';

const menuItems = [
  { key: 'home', active: true, name: "Home" },
  { key: 'faq', name: "FAQ" },
  // { key: 'contact', name: "Contact" },
]

var mainPage = () => {
  return(
    <Responsive as={Container} className="main" >
      <Responsive as={Menu} inverted color={'red'} items={menuItems} fluid />              
      <Image className='logo' src={logo} centered />
      <Button color='twitter'>
        <Icon name='twitter' /> Twitter
      </Button>
      <Button color='facebook'>
        <Icon name='facebook' /> Facebook
      </Button>
    </Responsive>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <FullPage duration={1000}>
          <Slide className='dark'>
            {mainPage()}
          </Slide>
          <Slide className='light'>
            <Responsive as={Container} className='faq'>
              <Segment>Who are we?</Segment>
            </Responsive>
          </Slide>
        </FullPage>
      </div>
    );
  }
}

export default App;
