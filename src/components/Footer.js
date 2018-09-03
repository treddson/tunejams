import React, { Component } from 'react'



const Footer = (props) => {
  return (
    <footer 
        style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            color: 'rgb(53, 53, 53)'
        }}>
      <p>{ props.copyright } { props.name }</p>
    </footer>
  )
}

export default Footer;
