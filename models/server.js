const express              = require('express') 
const cors                 = require('cors') 

const { socketController } = require('../sockets/sockets_controllers') 

class Server { 
  /*::::::::::::::::::::::::::::::[ Constructor ]::::::::::::::::::::::::::::::*/
  constructor() { 
    this.app    = express()                                //::::::[ EXPRESS SERVER ] 
    this.port   = process.env.PORT || 3500                 //::::::[ VARIABLES DE AMBIENTE ] 
    this.server = require('http').createServer( this.app ) //::::::[ EXPRESS SERVER ] 
    this.io     = require( 'socket.io' )( this.server )    //::::::[ EXPRESS SERVER CON WEBSOCKETS ] 
    this.paths  = {}                                       //::::::[ PATHS  ] 
    
    this.middlewares()                                     //::::::[ MIDDLEWARES ] 
    this.routes()                                          //::::::[ RUTAS  ] 
    this.sockets()                                         //::::::[ SETUP de Sockets Server ] 
  } 

  middlewares() {    
    this.app.use( cors() ) /* [ CORS ] */ 
    this.app.use( express.static('public') ) // Servimos los estaticos de la carpeta 'public/' 
  }

  routes() { 
    //this.app.use( this.paths.auth, require('../routes/auth') )
  }  

  /* -------------------------------[ METODOS ]------------------------------- */
  sockets (  ) {    
    this.io.on( 'connection', socketController ) //:::::::[ Servidor de Sockets ] 
  } 

  listen() { 
    /* --------------------------[ INICIO DE SERVER ]-------------------------- */
    this.server.listen( this.port, () => { 
      console.clear() 
      console.log( `\n\n\t\t=======================[ Seccion 15 Sockets - Aplicacion de Cola ]=======================`.yellow.bold  + 
       `\n\t\t*********[ ${ "234. Reproducir audio cuando se asigna un ticket".green.bold } ${"]*********".yellow.bold }`.yellow.bold  + 
       `\n\n\tServidor (con WebSocket & CORS Habilitado) ejecutandose en el puerto [ ${ String( this.port ).yellow.bold } ] \n` ) 
    } )

  } 
 
}

module.exports = Server  
