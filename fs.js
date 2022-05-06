const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if(err) {
//     throw err
//   }
//
//   console.log('Created dir')
// })

const filePath = path.join(__dirname, 'test', 'text.txt');
fs.writeFile(filePath, 'Hello NODE js', (err) => {
  if(err) {
    throw err
  }
  console.log('Created file')
})
