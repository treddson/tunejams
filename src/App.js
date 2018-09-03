import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import './App.css';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="App">
         <header>
           <nav className="home-nav">
            <div className="section">
            <h1 
              style={{
                textShadow: '3px 3px 5px  #bfe9ff',
                fontSize: '50px',
                color: '#333'
              }}
              className="bloc-header">Bloc Jams</h1>
            </div>
            <div 
               style={{
                 fontSize: '25px'
               }}
               className="section">
            <Link className="bloc-header" to='/'>Home</Link>
            <Link className="bloc-header" to='/library'>Library</Link>
            </div>
           </nav>
         </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
        </div>
        <Footer copyright="Copyright 2018" name="Taylor Short"/>
      </React.Fragment>
    );
  }
}

export default App;


