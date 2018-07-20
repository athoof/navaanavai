import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Responsive, Image, Segment, Button, Icon, Card, Divider} from 'semantic-ui-react';
import './App.css';
import logo from './navaanavai.svg';
import { FullPage, Slide } from 'react-full-page';
// import faq from './faq.md';

const menuItems = [
  { key: 'home', active: true, name: "Home" },
  { key: 'faq', name: "FAQ" },
  // { key: 'contact', name: "Contact" },
]

var topMenu = () => {
  return(
    <Responsive as={Menu} inverted color={'red'} items={menuItems} fluid />
  )
}

var mainPage = () => {
  return(
    <Image className='logo' src={logo} centered />
  );
}

var socialButtons = () => {
  return(
    <Responsive as={Container} className='buttonGroup' centered fluid >
        <Button className='socialButtons' circular color='facebook' icon='facebook' />
        <Button className='socialButtons' circular color='twitter' icon='twitter' />
        <Button className='socialButtons' circular color='google plus' icon='mail' />
    </Responsive>
  )
}
class App extends Component {
  render() {
    return (
      <div className="main dark">
          {mainPage()}
          <Divider clearing inverted />
          {socialButtons()}
      </div>
    );
  }
}

export default App;
