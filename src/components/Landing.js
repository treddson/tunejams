import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import './Landing.css';


const Landing = () => (
  <section className="library">
      <div className="point">
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description">The world is full of music - why should you have to listen to music that someone else will choose.</p>
      </div>
      <div className="point">
        <h2 className="point-title">Unlimited streaming, ad-free</h2>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </div>
      <div className="point">
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </div>
  </section>
);


export default Landing;
