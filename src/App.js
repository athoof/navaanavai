import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Button, Container, Image, Menu, Responsive, Accordion, Label, List, Message, Card } from 'semantic-ui-react';
import './App.css';
import faqText from './faq.json';
import logosvg from './navaanavai.svg';

const menuItems = [
  { key: 'home', name: "Home", href: '#', inverted: true},
  { key: 'faq', name: "FAQ", href: '#faq' },
]

var topMenu = () => {
  return(
    <Menu className="topMenu" color={'red'} items={menuItems} fluid fixed='top' pointing floated />
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

//function to loop json and create semantic-ui Accordion panels 
const FaqText = () => {
  var resultSet = [];
  faqText.forEach((qna, i) => {
    // qna.answer.replace(/\n/g, "n\\\\").replace(/\r/g, "\\\\r").replace(/\t/g, "\\\\t");//can't put newlines in JSON with RTL thaana
    let answer = qna.answer;
    // qna.answer.forEach((line) => {
    //   answer = answer ? answer + '\n' + line : line;
    // })
    if (qna.multiline) {
      answer = <List items={qna.answer} />
    }
    let result = {
      key: i,
      header: qna.question,
      description: answer,
      color: 'red',
      inverted: true,
      raised: true,
    }
    resultSet.push(result)
  });
  return(resultSet);
}

const Faq = () => {
  return(
    <Card.Group dir='rtl' className='thaana faq' itemsPerRow={1} color={'red'} items={FaqText()} />
  );
}

class App extends Component {
  render() {
    return (
      <div className="main">
      {topMenu()}
        <Container fluid style={{ marginTop: '7em' }}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/faq' component={Faq} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
