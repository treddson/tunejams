import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';


class Album extends Component {
  render() {
    return (
      <section className="album">
       {this.props.match.params.slug} Album will go here
      </section>
    );
  }
}

export default Album;