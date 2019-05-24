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
           <nav className="home-nav">
              <div className="section">
                <h1><Link id="bloc-title" to='/'>Tune Jams</Link></h1>
              </div>
              <div className="section">
                <Link className="bloc-header" to='/'>Home</Link>
                <Link className="bloc-header" to='/library'>Library</Link>
              </div>
           </nav>
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


