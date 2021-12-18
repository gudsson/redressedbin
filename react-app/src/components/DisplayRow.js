const DisplayRow = ({ name, val }) => {
  
  return (
    <div>
      <strong>{name}</strong>:&nbsp;<pre>{val}</pre>
    </div>
  )
}

export default DisplayRow
