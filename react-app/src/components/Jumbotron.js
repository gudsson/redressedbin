import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const verticalAlignment = {
  minHeight: "80%",
  // eslint-disable-next-line no-dupe-keys
  minHeight: "80vh",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const Jumbotron = () => {
  return (
    <div className="container" style={verticalAlignment}>
      <div className="jumbotron text-center">
        <h1 className="display-4"><strong>Inspect HTTP Requests👀</strong></h1>
        <br /><br />
        <p className="lead">
          RedressedBin is a <a href="requestbin.net">RequestBin</a> clone that lets you take a peek at your HTTP requests.
          Requests made to a unique endpoint are collected, allowing you to inspect or debug your webhook requests.
        </p>
        <br /><br />
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="/newbin" role="button">Create a Bin</a>
        </p>
      </div>
    </div>
  )
}

export default Jumbotron
