import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import '../App.css';
import './Library.css'

class Library extends Component {

  state = { albums: albumData };

  render() {
    return (
      <section className='library'>
      {
        this.state.albums.map( (album, index) =>
            <Link to={`/album/${album.slug}`} key={index}>
              <img className="Album-Cover" src={album.albumCover} alt={album.title} />
              <div className="song-info">
                <div>Song: {album.title}</div>
                <div>Artist: {album.artist}</div>
                <div>{album.songs.length} tracks</div>
              </div>
            </Link>
       )
      }
      </section>
    );
  }
}


export default Library;
