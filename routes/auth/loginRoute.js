const express = require('express')
const users = require('../../databases/usersDb')
const { signJwt } = require('../../helpers/jwtHelper')

const app = express.Router()

app.post('/auth/login', (req, res) => {
    const body = req.body //request yang diberikan di body
    const username = body.username //property username yang ada di body & value yang kita tentukan
    const password = body.password //property password yang ada di body & value yang kita tentukan
    // 👇 search user that have same username & password as inputted
    const searchResult = users.find(user => (user.username == username) && (user.password == password)) //fungsi memverifikasi id & password yang dimasukkan apakah sesuai dengan username & password yang telah teregistrasi melalui registerRoute 
    if (searchResult) {
        // 👇 if found, use signJwt function to create a token by using found search result as information inserted in the token
        const token = signJwt(body) //jika sudah terverifikasi username & password sesuai, maka signJwt akan membuat token secara otomatis
        body.token = token
        res.send(body)
    } else {
        // 👇 if not found, then tell the client
        res.send('User not found') //response yang diberikan jika user tidak terdetect 
    }
})

module.exports = app
