const genrator = require('generate-password')

const password = genrator.generate({
    length : 8,
    numbers : true
})

console.log(password)