const express = require('express')
const cors = require('cors')
const server = express()
const PORT = process.env.PORT || 4000
// const db = require('./util/database')

//! Middleware
server.use(express.json())
server.use(cors())

server.use(express.static(path.resolve(__dirname, "../build")));

server.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

//! endpoints


server.listen(PORT, () => console.log(`Running on Port PORT`))