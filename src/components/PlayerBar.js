import React, { Component } from 'react';


export default class PlayerBar extends Component {
    render() {
        return (
          <section 
            style={{
              marginBottom: '50px'
            }}
            className="player-bar">
            <section id="buttons">
              <button id="previous" onClick={this.props.handlePrevClick}>
                <span 
                    style={{
                      paddingRight: '5px',
                      borderRadius: '5%'
                    }}
                    className="fas fa-backward"></span>
              </button>
              <button id="play-pause" onClick={this.props.handleSongClick} >
                <span 
                    style={{
                      borderRadius: '5%',
                      paddingRight: '5px',
                      paddingLeft: '5px'
                    }}
                  className={this.props.isPlaying ? 'fas fa-pause' : 'fas fa-play'}></span>
              </button>
              <button id="next" onClick={this.props.handleNextClick}>
                <span 
                    style={{
                      borderRadius: '5%',
                      paddingLeft: '5px'
                    }}
                className="fas fa-forward"></span>
              </button>
            </section>
            <section id="time-control">
              <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
              <input
                type="range"
                className="seek-bar"
                value={(this.props.currentTime / this.props.duration) || 0}
                max="1"
                min="0"
                step=".01"
                onChange={this.props.handleTimeChange}
              />
              <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
            </section>
            <section id="volume-control">
              <div className="volume-icon ion-volume-high"></div>
              <input
                type="range"
                className="seek-bar"
                value={this.props.volume}
                max="1"
                min="0"
                step=".001"
                onChange={this.props.handleVolumeChange}
              />
            </section>
          </section>
        );
    }
}

