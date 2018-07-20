import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Container, Image, Menu, Responsive } from 'semantic-ui-react';
import './App.css';
import logosvg from './navaanavai.svg';

/* const menuItems = [
  { key: 'home', active: true, name: "Home" },
  { key: 'faq', name: "FAQ" },
]

var topMenu = () => {
  return(
    <Responsive as={Menu} inverted color={'red'} items={menuItems} fluid />
  )
} */

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
class App extends Component {
  render() {
    return (
      <div className="main dark">
          {logo()}
          {socialButtons()}
      </div>
    );
  }
}

export default App;
