import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const baseUrl = process.env.REACT_APP_BACKEND_URL;
const baseApi = `${baseUrl}${process.env.REACT_APP_API_PATH}`;
const baseFrontendUrl = process.env.REACT_APP_FRONTEND_URL;
const endpointBaseUrl = baseUrl.includes("localhost")
  ? `${baseApi}/`
  : `${baseUrl}/bin/`;

const mimicPre = {
  borderStyle: "solid",
  borderWidth: "1px",
  backgroundColor: "#f5f5f5",
  borderColor: "grey",
  padding: "10px",
  whiteSpace: "pre-wrap",
};

const codeStyle = {
  color: "black",
};

const codeContainer = {
  width: "50%",
};

const inputStyle = {
  fontSize: "36px",
  width: "45%",
};

const BinInstructions = () => {
  const [error, setError] = useState(null);
  const [urls, setUrls] = useState({
    endpoint: "generating...",
    summary: "generating...",
  });
  const handleDblClick = (event) => event.target.select();

  useEffect(() => {
    fetch(`${baseApi}`)
      .then((res) => res.json())
      .then(
        (data) => {
          setUrls({
            endpoint: `${endpointBaseUrl}${data.binId}`,
            summary: `${baseFrontendUrl}/inspect/bin/${data.binId}`,
            binId: data.binId,
          });
        },
        (error) => {
          alert(error);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div className="container">
        <div className="container" style={{ textAlign: "center" }}>
          <h4 style={{ textAlign: "center", paddingTop: "50px" }}>
            Bin Endpoint
          </h4>
          <input
            type="text"
            value={urls.endpoint}
            spellCheck="false"
            style={inputStyle}
            onDoubleClick={handleDblClick}
            readOnly
          ></input>
        </div>
        <div className="container" style={{ textAlign: "center" }}>
          <h4 style={{ textAlign: "center", paddingTop: "50px" }}>
            Bin Summary
          </h4>
          <input
            type="text"
            value={urls.summary}
            spellCheck="false"
            style={inputStyle}
            onDoubleClick={handleDblClick}
            readOnly
          ></input>
        </div>

        <div className="container" style={codeContainer}>
          <br />
          <br />
          <br />

          <h4 style={{ textAlign: "center" }}>
            Make a request to get started.
          </h4>
          <h4>cURL</h4>
          <div style={mimicPre}>
            <code style={codeStyle}>
              curl -X POST -d "fizz=buzz" {urls.endpoint}
            </code>
          </div>

          <br />
          <br />

          <h4>PowerShell</h4>
          <div style={mimicPre}>
            <code style={codeStyle}>
              powershell -NoLogo -Command "(New-Object
              System.Net.WebClient).DownloadFile('{urls.endpoint}',
              'C:\Windows\Temp\{urls.binId}.txt')"
            </code>
          </div>

          <br />
          <br />

          <h4>Python (with Requests)</h4>
          <div style={mimicPre}>
            <code style={codeStyle}>
              import requests, time
              <br />r = requests.post('{urls.endpoint}',
              data=&#123;"ts":time.time()&#125;)
              <br />
              print r.status_code
              <br />
              print r.content
            </code>
          </div>

          <br />
          <br />

          <h4>Node.js (with request)</h4>
          <div style={mimicPre}>
            <code style={codeStyle}>
              var request = require('request');
              <br />
              var url ='{urls.endpoint}'<br />
              request(url, function (error, response, body) &#123;
              <br />
              &emsp;if (!error) &#123;
              <br />
              &emsp;&emsp;console.log(body);
              <br />
              &emsp;&#125;
              <br />
              &#125;);
            </code>
          </div>

          <br />
          <br />

          <h4>C# / .NET</h4>
          <div style={mimicPre}>
            <code style={codeStyle}>
              using System;
              <br />
              using System.Net.Http;
              <br />
              using System.Threading.Tasks;
              <br />
              <br />
              namespace RequestBinExample
              <br />
              &#123;
              <br />
              &emsp;class Program
              <br />
              &emsp;&#123;
              <br />
              &emsp;&emsp;static void Main(string[] args)
              <br />
              &emsp;&emsp;&#123;
              <br />
              &emsp;&emsp;&emsp;MakeRequest();
              <br />
              &emsp;&emsp;&#125;
              <br />
              <br />
              &emsp;&emsp;private static async Task MakeRequest()
              <br />
              &emsp;&emsp;&#123;
              <br />
              &emsp;&emsp;&emsp;var httpClient = new HttpClient();
              <br />
              &emsp;&emsp;&emsp;var response = await httpClient.GetAsync(new
              Uri("{urls.endpoint}"));
              <br />
              &emsp;&emsp;&emsp;var body = await
              response.Content.ReadAsStringAsync();
              <br />
              &emsp;&emsp;&emsp;Console.WriteLine(body);
              <br />
              &emsp;&emsp;&#125;
              <br />
              &emsp;&#125;
              <br />
              &#125;
              <br />
            </code>
          </div>

          <br />
          <br />

          <h4>Java</h4>
          <div style={mimicPre}>
            <code style={codeStyle}>
              import org.apache.commons.httpclient.*;
              <br />
              import org.apache.commons.httpclient.methods.*;
              <br />
              import org.apache.commons.httpclient.params.HttpMethodParams;
              <br />
              <br />
              import java.io.*;
              <br />
              <br />
              public class RequestBinTutorial &#123;
              <br />
              &emsp;public static void main(String[] args) &#123;
              <br />
              &emsp;&emsp;HttpClient client = new HttpClient();
              <br />
              &emsp;&emsp;GetMethod method = new GetMethod("{urls.endpoint}");
              <br />
              &emsp;&emsp;try &#123;
              <br />
              &emsp;&emsp;&emsp;int statusCode = client.executeMethod(method);
              <br />
              &emsp;&emsp;&emsp;byte[] responseBody = method.getResponseBody();
              <br />
              &emsp;&emsp;&emsp;System.out.println(new String(responseBody));
              <br />
              &emsp;&emsp;&#125; catch (Exception e) &#123;
              <br />
              &emsp;&emsp;&emsp;System.err.println("Fatal error: " +
              e.getMessage());
              <br />
              &emsp;&emsp;&emsp;e.printStackTrace();
              <br />
              &emsp;&emsp;&#125; finally &#123;
              <br />
              &emsp;&emsp;&emsp;method.releaseConnection();
              <br />
              &emsp;&emsp;&#125;
              <br />
              &emsp;&#125;
              <br />
              &#125;
            </code>
          </div>

          <br />
          <br />

          <h4>PHP</h4>
          <div style={mimicPre}>
            <code style={codeStyle}>
              {`<?php
    $result = file_get_contents('${urls.endpoint}');
    echo $result;
?>`}
            </code>
          </div>
        </div>
        <div
          className="container"
          style={{ padding: "50px 0 50px", width: "60%" }}
        >
          <h5>Limits</h5>
          <p>
            Bins only keep the last 20 requests made and are locked after 48
            hours. Treat bins as <strong>highly ephemeral</strong>.
          </p>
        </div>
      </div>
    );
  }
};

export default BinInstructions;
