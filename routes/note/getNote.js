const express = require('express')
const notes = require('../../databases/notesDb')
const authorize = require('../../middlewares/authorizationMiddleware')
const app = express()

//membuat route ini menggunakan authorize/token untuk menjalankan get
app.use(authorize)

app.get('/note', (req, res) => {
  const user = req.user //request user
  const notesByUser = notes.filter(note => note.username === user.username) //mencari username apakah sudah sesuai dengan yang terdaftar
  res.send(notesByUser) //menampilkan response  notesByuser
})

module.exports = app
