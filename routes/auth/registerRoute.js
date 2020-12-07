const express = require('express')
const users = require('../../databases/usersDb')
// 👇 this is called "object destructuring", we will learn this in research task
const { signJwt } = require('../../helpers/jwtHelper')

const app = express.Router()

app.post('/auth/register', (req, res) => {
    const body = req.body // username : daniel, password : 123
    users.push(body) //push apapun yang ditulis di body ke database usersDb
    // 👇 use signJwt function to create a token by using inserted body as information inserted in the token
    const token = signJwt(body) // membuat token sesuai dengan yang ditulis di body (bearer sdhsakdhsfgdhfdshfgdshg)
    // 👇 add token property in user with value of token so it can be shown at response
    body.token = token // bearer sdhsakdhsfgdhfdshfgdshg ke body
    res.send(body) // username : daniel, password : 123 bearer hdgsagdjhsgdsh
})

module.exports = app
