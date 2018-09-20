import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Button, Container, Image, Menu, Responsive, Accordion, Label, List, Message, Card, Segment, Header, Grid } from 'semantic-ui-react';
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
      <Segment vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center' style={{padding: '5vh 0'}}>
            <Grid.Column>
              <Header as='h3'>Who we are</Header>
              <p>We are you</p>
              <Header as='h3'>Who we work for</Header>
              <p>We work for the ordinary people</p>
              <Header as='h3'>Who can join us</Header>
              <p>You can join us</p>
            </Grid.Column>
            <Grid.Column>
              <Header as='h3'>What we do</Header>
              <p>We do this</p>
              <Header as='h3'>What we believe</Header>
              <p>We believe in equality</p>
              <Header as='h3'>What you can do</Header>
              <p>We need your voice</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{padding: '10vh 0em'}} vertical>
        <Container text textAlign={'center'}>
          <Header>
            Use your voice, contribute
          </Header>
          <Button as='a' size='large' color={'red'}>
            Join us
          </Button>
        </Container>
      </Segment>
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
