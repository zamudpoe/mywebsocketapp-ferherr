

const socketController = ( socket ) => { 

  console.log( `\t==> Cliente [ ${socket.id} ] conectado `.cyan.bold ) 
  socket.on('disconnect', () => { console.log(`Cliente ${socket.id} desconectado`.cyan.bold ) })      
  // Enviar mensaje al cliente que se conecta
  socket.emit('Hello from server', { usuario: "engel", empresa: "cydsa" } )       

  // Listener para escuchar el  Evento 'enviar-msg' generado desde el cliente 
  socket.on('enviar-msg', ( payload, callback ) => { 

    const id = 300 
    callback( id ) 

    // Emitiremos a TODOS ( menos al emisor ) los clientes el evento recibido 'enviar-msg' con su payload. 
    socket.broadcast.emit( 'enviar-msg', payload ) 
  }) 

}

module.exports = {
  socketController 
}

