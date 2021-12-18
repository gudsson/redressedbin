import DisplayRow from './DisplayRow.js'

const FormParameters = ({ data }) => {
  const items = Object.keys(data)

  if (items.length) {

    return (
      items.map((id, idx) => {
        if (typeof data[id] === 'object') {
          return <DisplayRow key={idx} name={id} val={JSON.stringify(data[id])} />
        }
        return <DisplayRow key={idx} name={id} val={String(data[id])} />
      })
    )
  }

  return <em>None.</em>
}

export default FormParameters
