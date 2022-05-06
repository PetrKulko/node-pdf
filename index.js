// const chalk = require('chalk')
// const text = require('./data')
//
// console.log(__dirname)

const path = require('path')

console.log('Name file: ', path.basename(__filename))
console.log('Dir name: ', path.dirname(__dirname))
console.log('Расширение файла: ', path.extname(__filename))
console.log('Parse: ', path.parse(__filename).name)
console.log(path.join(__dirname, 'server', 'index.html'))
