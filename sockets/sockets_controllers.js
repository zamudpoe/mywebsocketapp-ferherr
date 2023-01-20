const TicketControl  = require('../models/ticket-control')
 
const ticketControl = new TicketControl() // al hacer esto se ejecuta init de esta clase.

const socketController = ( socket ) => { 

  // Emision de eventos al conectarse un socket o 'cliente'.
  socket.emit( 'ultimo-ticket', ticketControl.ultimo ) 
  socket.emit( 'ultimos4', ticketControl.ultimos4 ) 
  socket.emit( 'tickets-pendientes', ticketControl.tickets.length ) 

  // Listener para escuchar el Evento 'siguiente-ticket' generado desde el cliente 
  socket.on('siguiente-ticket', ( payload, callback ) => { 
    const siguiente = ticketControl.siguienteTicket()
    //console.log('Payload : %s para [ %s ]',payload, siguiente)    
    callback( siguiente ) 
    socket.broadcast.emit( 'tickets-pendientes', ticketControl.tickets.length )     
  })   

  socket.on('atender-ticket', ( { escritorio }, callback ) => { 
    
    if ( !escritorio ) {
      return callback ({ 
        ok  : false, 
        msg : 'El escritorio es obligatorio' 
      }) 
    } 

    const ticket = ticketControl.atenderTicket( escritorio ) 

    socket.broadcast.emit( 'ultimos4', ticketControl.ultimos4 ) 
    socket.emit( 'tickets-pendientes', ticketControl.tickets.length ) 
    socket.broadcast.emit( 'tickets-pendientes', ticketControl.tickets.length ) 

    if ( !ticket ) {  
      callback( { 
        ok  : false, 
        msg : 'Ya no hay Tickets por atender' 
      } )  
    } else {       
      callback( {
         ok: true, 
         ticket 
        } )  
    }

  })   

}

module.exports = {
  socketController 
}

