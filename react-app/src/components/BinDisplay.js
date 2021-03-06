
import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import Request from './Request.js'

const io = require("socket.io-client")

const baseApi = `${process.env.REACT_APP_BACKEND_URL}${process.env.REACT_APP_API_PATH}`

const BinDisplay = () => {
  const binId = useParams().binId

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [requests, setRequests] = useState([])
  const socketRef = useRef()

  useEffect(() => {
    const pullBin = () => {
      fetch(`${baseApi}/inspect/${binId}`)
      .then(res => res.json())
      .then(data => {
          setIsLoaded(true)
          setRequests(data)
        }, error => {
          setIsLoaded(true)
          setError(error)
        }
      )
    }

    pullBin()
    socketRef.current = io('https://bin.gudsson.ca/' , {
      path: "/socket",
      withCredentials: true
    })
    socketRef.current.on("request received", pullBin)
  }, [binId])

  const containerStyle = {
    position: "relative",
    minHeight: "80vh",
    paddingTop: "20px",
  }
  if (!isLoaded) {
    return <div className="container" style={containerStyle}></div>
  }

  if (error) {
    return (
      <div className="container" style={containerStyle}>
        <h3>Error: {error.message}</h3>
      </div>
    )
  } else if (!Array.isArray(requests)) {
    return (
      <div className="container" style={containerStyle}>
        <h3>{requests.msg}</h3>
      </div>
    )
  } else if (requests.length === 0) {
    return (
      <div className="container" style={containerStyle}>
        <h3>Bin {binId} is empty</h3>
      </div>
    )
  } else {
    return (
      <div>
        <ul>
          {requests.map((req, idx) => {
            return <Request key={idx} request={req} />
          })}
        </ul>
        <div className="container" style={{padding: "50px 0 50px", width: "60%"}}>
          <h5>Limits</h5>
          <p>Bins only keep the last 20 requests made and are locked after 48 hours. Treat bins as <strong>highly ephemeral</strong>.</p>
        </div>
      </div>
    )
  }
}

export default BinDisplay
