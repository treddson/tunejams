import React, { Component } from 'react'



const Footer = (props) => {
  return (
    <footer 
        style={{
            position: 'flex',
            flexDirection: 'row',
            height: '80px',
            color: 'rgb(53, 53, 53)'
        }}>
      <p>{ props.copyright }</p>
      <p>{ props.name }</p>
    </footer>
  )
}

export default Footer;
