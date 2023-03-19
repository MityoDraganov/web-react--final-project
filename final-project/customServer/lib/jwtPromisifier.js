const util = require('util')

const jwtCB = require('jsonwebtoken')


const jwtPromises = {
    sign: util.promisify(jwtCB.sign),
    verify: util.promisify(jwtCB.verify)
}

module.exports = jwtPromises