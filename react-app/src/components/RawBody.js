const RawBody = ({ body }) => {
  const stringifiedBody = JSON.stringify(body)
  if (stringifiedBody.length > 2) {
    return <pre>{stringifiedBody}</pre>
  }

  return <em>None.</em>
}

export default RawBody