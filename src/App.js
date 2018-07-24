import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Button, Container, Image, Menu, Responsive, Accordion } from 'semantic-ui-react';
import './App.css';
import faqText from './faq.json';
import logosvg from './navaanavai.svg';

const menuItems = [
  { key: 'home', active: true, name: "Home", href: '#' },
  { key: 'faq', name: "FAQ", href: '#faq' },
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
  var resultSet = [];
  faqText.forEach((qna, i) => {
    qna.answer.replace(/\n/g, "n\\\\").replace(/\r/g, "\\\\r").replace(/\t/g, "\\\\t");//can't put newlines in JSON with RTL thaana
    let result = {
      key: i,
      title: qna.question,
      content: qna.answer
    }
    resultSet.push(result)
  });
  return(resultSet);
}

const Faq = () => {
  return(
    <Accordion dir="rtl" className='thaana' styled fluid defaultActiveIndex={0} panels={FaqText()} />
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
