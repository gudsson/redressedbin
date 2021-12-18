import 'bootstrap/dist/css/bootstrap.css';
import RawBody from './RawBody.js'
import KeyValues from './KeyValues.js'
import FormParameters from './FormParameters.js'
const moment = require('moment')
const baseUrl = process.env.REACT_APP_BACKEND_URL

const cardStyle = {
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
}

const containerStyle = {
  paddingBottom: "20px"
}

const Request = ({ request }) => {
  return (
    <div className="container" style={{...containerStyle, paddingTop: "20px"}}>
      <div className="card" style={cardStyle}>
        <div className="card-header">
          <div className="row">
            <div className="col-md-3">
              {baseUrl}<br />
              <strong>{request.method}</strong> {`/bin${request.path}`}
            </div>
            <div className="col-md-7"></div>
            <div className="col-md-2">
              {moment(request.createdAt).fromNow()}<br />
              From {request.fromIP}
            </div>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="row">
              <div className="col-md-3" style={{paddingRight: "20px"}}>
                <h6>FORM/POST PARAMETERS</h6>
                <FormParameters data={request.body} />
              </div>
              <div className="col-md-9">
                <h6>HEADERS</h6>
                {
                  Object.keys(request.headers).map((header, idx) => {
                    return <KeyValues key={idx} header={header} value={request.headers[header]} />
                  })
                }
              </div>
            </div>
            <div className="row" style={{paddingTop: "20px"}}>
              <h6>RAW BODY</h6>
              <RawBody body={request.body} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Request
