import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          👚&nbsp;RedressedBin
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <button type="button" className="btn btn-link" style={{color: "white", textDecoration: "none"}}>Your favourite RequestBin clone</button>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar