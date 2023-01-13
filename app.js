/* ----------------------[ Importaciones ]--------------------- */
require('colors')
require('dotenv').config() 
const Server = require('./models/server')

// Instancia del server 
const server = new Server()

// Invocamos el server 
server.listen() 

