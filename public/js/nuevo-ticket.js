/* ------------------------[ Referencias del HTML ]------------------------ */
const lblNuevoTicket      = document.querySelector('#lblNuevoTicket')
const btnCrearNuevoticket = document.querySelector('#btnNuevoticket') 

/* ------------------------[ INSTANCIAS GLOBALES ]------------------------ */
const socket = io()

/* -------------------------------- [ OBSERVABLES ] -------------------------------- */
socket.on( 'connect', () => {
  console.log('Conectado') 
  btnCrearNuevoticket.disabled = false  
})

socket.on( 'disconnect', () => {
  console.log('Desconectado del servidor')
  btnCrearNuevoticket.disabled = true  
})

socket.on( 'ultimo-ticket', ( ultimoTicket ) => { 
  //console.log( "ultimoTicket : %s", ultimoTicket )
  lblNuevoTicket.innerText = `Ticket  ${ultimoTicket}`
})

/* ------------------------------ [ LISTENERS ] ----------------------------- */
btnCrearNuevoticket.addEventListener( 'click', () => { 

  socket.emit( 'siguiente-ticket', 'Sin Payload X el  momento!', ( ticket ) => {
    //console.log('\tDesde el server nuevo ticket: [ %s ]', ticket ) 
    lblNuevoTicket.innerText = ticket
  })

})
