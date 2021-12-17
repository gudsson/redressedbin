const generateId = (size) => {
  const arr = new Array(size).fill(0)
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  return arr.map(val => chars[Math.floor(Math.random() * chars.length - 1)]).join('')
}

let id
let counter = 0

while ((id = generateId(6)) === 'abc') {
  counter++
}

console.log((id = generateId(6)))

console.log(counter)