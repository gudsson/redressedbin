import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const style = {
  color: "white",
  fontSize: "36px",
  textAlign: "Center"
}

const aStyle = {
  textDecoration: "none",
  color: "white",
}

const Footer = () => {
  return (
      <footer style={{backgroundColor: "#242529"}}>
        <br /><br />
        <div className="container" style={style}>
          <a href="https://gudsson.github.io" style={aStyle}>
	    <FontAwesomeIcon icon={faHome}/>&nbsp;
          </a>
	  <a href="https://github.com/gudsson" style={aStyle}>
	    <FontAwesomeIcon icon={faGithub}/>
	  </a>
        </div>
        <br /><br />
      </footer>
  )
}

export default Footer
