
import React from 'react';
import './App.css';
import Title from './Title';
import ItemList from './ItemList'
import { HashRouter as Router, Route } from 'react-router-dom'
import PantryForm from './PantryForm'
import ItemDetails from './ItemDetails'
import Footer from './footer'

function App() {
  return (
    <Router>
    <div className="App">
      <Title />
      <Route exact path="/" component={ItemList}/>
      <Route path="/form" component={PantryForm} />
      <Route path="/details/:id" component={ItemDetails} />
      <Footer name="Franklin Phan" year="2020"/>
    </div>
    </Router>
  );
}

export default App;
