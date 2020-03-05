const latinize = require('latinize')
const clipboardy = require('clipboardy')

latinize.characters[' '] = '_';
latinize.characters['"'] = '';

const input = process.argv[2]

if (!input) {
  console.log('node version required: 12.xx.xx')
  console.log('usage: node index.js "string_you_want_to_latinize"')
  return
}

const stringLatinized = latinize(input).toLowerCase()
clipboardy.writeSync(stringLatinized)

console.log(`copied to clipboard ${stringLatinized}`)
