import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Button, Container, Image, Menu, Responsive, List, Card, Reveal } from 'semantic-ui-react';
import './App.css';
import faqText from './faq.json';
import logosvg from './navaanavai.svg';
import policy from './policy.json';

const menuItems = [
  { key: 'home', name: "Home", href: '#', inverted: true},
  { key: 'faq', name: "FAQ", href: '#faq' },
]

const policyReveal = () => {//Reveal components have two parts, one visible, one hidden. In this case, both are Card components.
  let revealArr = [];
  policy.forEach((p) => {
    let img = <Image src={p.image} />
    let visible = <Reveal.Content visible><Card image={img} color={p.color} style={{margin: "10px", height: "250px", width: "auto", overflow: "hidden" }} /></Reveal.Content>
    let hidden = <Reveal.Content hidden><Card header={p.header} description={p.description} color={p.color} style={{margin: "10px", height: "250px", width: "250px", padding: "20px"}} /></Reveal.Content>
    revealArr.push(<Reveal animated={'fade'} content={[visible, hidden]} />);
  })
  return revealArr;
}

var topMenu = () => {
  return(
    <Menu className="topMenu" color={'red'} items={menuItems} fluid fixed='top' pointing floated />
  )
}

/* var socialButtons = () => {//needs to be redesigned
  return(
    <Responsive as={Container} className='buttonGroup' centered fluid >
        <Button href='https://web.facebook.com/navaanavai' className='socialButtons' circular color='facebook' icon='facebook' />
        <Button href='https://twitter.com/navaanavai' className='socialButtons' circular color='twitter' icon='twitter' />
        <Button href='mailto:navaanavai@gmail.com' className='socialButtons' circular color='google plus' icon='mail' />
    </Responsive>
  )
} */

const Home = () => {
  return(
    <Container className="Home">
      <Card.Group centered itemsPerRow={2} content={policyReveal()} />
    </Container>
  );
}

//function to loop json and create semantic-ui cards per FAQ 
const FaqText = () => {
  var resultSet = [];
  faqText.forEach((qna, i) => {
    let answer = qna.answer;
    if (qna.multiline) {
      answer = <List items={qna.answer} />
    }
    let result = {
      key: i,
      header: qna.question,
      description: answer,
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

/* TO DO 
<Route path='/blog' component={Blog} />
<Route path='/about' component={About} />
<Route path='/Finance' component={Finance} /> 
*/

export default App;
