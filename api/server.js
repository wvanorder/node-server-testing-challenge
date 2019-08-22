const express = require('express');

const vgRouter = require('./vgRouter.js')
const server = express();

server.use(express.json());

server.use('/api/videogames', vgRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: `We're inside the Matrix, Neo.` })
});

module.exports = server