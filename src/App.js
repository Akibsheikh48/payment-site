import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/pages/HomePages/Home';
import Navbar from './components/pages/Navbar';
import Product from './components/pages/Product/Product';
import Services from './components/pages/Services/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/services'  component={Services}/>
          <Route path='/products'  component={Product}/>
        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
