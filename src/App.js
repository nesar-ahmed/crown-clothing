import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.scss';

import HomePage from './pages/homepage/HomePage.component';

const HatsPage = () => {
  return (
    <div>
      <Link to='/'> Home </Link>
      <Link to='/detail'> Detail </Link>
      <h1> Hats Page </h1>
    </div>
  )
}

const Detail = (props) => {
  return (
    <div>
      <h1> Detail Page </h1>
    </div>
  )
}

const TopicDetail = (props) => {
  return (
    <div>
      <h1> Topic Detail Page </h1>
      <p> ID: {props.match.params.id}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
      <Route path="/detail" component={Detail} />
      <Route path="/topic/:id" component={TopicDetail} />
    </div>
  );
}

export default App;
