/* -----------------------[ Referencias del HTML ]----------------------- */
const lblTicket1     = document.querySelector("#lblTicket1") 
const lblEscritorio1 = document.querySelector("#lblEscritorio1") 
const lblTicket2     = document.querySelector("#lblTicket2") 
const lblEscritorio2 = document.querySelector("#lblEscritorio2") 
const lblTicket3     = document.querySelector("#lblTicket3") 
const lblEscritorio3 = document.querySelector("#lblEscritorio3") 
const lblTicket4     = document.querySelector("#lblTicket4") 
const lblEscritorio4 = document.querySelector("#lblEscritorio4") 

/* ------------------------[ INSTANCIAS GLOBALES ]------------------------ */
const socket = io() 

/* ----------------------------[ OBSERVABLES ]---------------------------- */
 
/* NOTE: 
  El evento "ultimos4" necesitamos dispararlos en 2 lugares :
    1. Cuando el socket se conecte en el socket server.
    2. Cuando le asignemos a un escritorio el ticket ahi tambien.
*/
socket.on( 'ultimos4', ( payload ) => { 

  if ( payload.length > 0  ) {
    const audio = new Audio('./audio/new-ticket.mp3') 
    audio.play() 
  }

  const [ ticket1, ticket2, ticket3, ticket4 ] = payload   

  if (ticket1) {
    lblTicket1.innerText        = ticket1.numero 
    lblEscritorio1.innerText    = ticket1.escritorio
  }

  if (ticket2) {
    lblTicket2.innerText        = ticket2.numero  
    lblEscritorio2.innerText    = ticket2.escritorio 
  }

  if (ticket3) {
    lblTicket3.innerText        = ticket3.numero  
    lblEscritorio3.innerText    = ticket3.escritorio 
  }

  if (ticket4) {
    lblTicket4.innerText        = ticket4.numero  
    lblEscritorio4.innerText    = ticket4.escritorio 
  }

}) 



/* ------------------------------ [ LISTENERS ] ----------------------------- */


