import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Button, Container, Image, Menu, Responsive, Card } from 'semantic-ui-react';
import './App.css';
import logosvg from './navaanavai.svg';
import { Switch } from 'react-router-dom';
import faqText from './faq.json';

const menuItems = [
  { key: 'home', active: true, name: "Home" },
  { key: 'faq', name: "FAQ", href: '/faq' },
]

var topMenu = () => {
  return(
    <Responsive as={Menu} className="topMenu" color={'red'} items={menuItems} fluid />
  )
}

var logo = () => {
  return(
    <Image className='logo' src={logosvg} centered />
  );
}

var socialButtons = () => {
  return(
    <Responsive as={Container} className='buttonGroup' centered fluid >
        <Button href='https://web.facebook.com/navaanavai' className='socialButtons' circular color='facebook' icon='facebook' />
        <Button href='https://twitter.com/navaanavai' className='socialButtons' circular color='twitter' icon='twitter' />
        <Button href='mailto:navaanavai@gmail.com' className='socialButtons' circular color='google plus' icon='mail' />
    </Responsive>
  )
}

const Home = () => {
  return(
    <Container className="Home">
      {logo()}
      {socialButtons()}
    </Container>
  );
}

const FaqText = () => {
  //function to loop json and create semantic-ui Accordion panels 
}

const Faq = () => {
  return(
    <Container className="Faq">
      {FaqText}
    </Container>
  );
}

class App extends Component {
  render() {
    return (
      <div className="main">
      {topMenu()}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/faq' component={Faq} />
        </Switch>
      </div>
    );
  }
}

export default App;
