/* -------------------------[ REFERENCIAS AL DOM ]------------------------- */
const lblEscritorio          = document.querySelector( '#lblEscritorio' ) 
const btnAtenderTicket       = document.querySelector( '#btnAtenderTicket') 
const smallAtendiendoTicket  = document.querySelector( '#smallAtendiendoTicket') 
const divAlerta_SinTickets   = document.querySelector( '#alerta_SinTickets' ) 
const lblPendientes          = document.querySelector( '#lblPendientes' ) 
 
/* ------------------------[ INSTANCIAS GLOBALES ]------------------------ */
const socket = io()

/* -------------------------[ Variables instancia ]------------------------- */
const searchParams = new URLSearchParams( window.location.search )

//console.log(window.location.search) //?escritorio=Escritorio+1 
if ( !searchParams.has( 'escritorio' ) ) {
  window.location = 'index.html' 
  throw new Error('El escritorio es obligatorio') 
}

const escritorio                    = searchParams.get( 'escritorio' ) 
lblEscritorio.innerText             = escritorio 
divAlerta_SinTickets.style.display  = 'none' 

/* -------------------------------- [ OBSERVABLES ] -------------------------------- */
socket.on( 'connect', () => {   
  btnAtenderTicket.disabled = false 
})

socket.on( 'disconnect', () => {   
  btnAtenderTicket.disabled = true 
})

socket.on( 'tickets-pendientes', ( ticketsPendientes ) => { 

  if ( ticketsPendientes === 0 ) {
    lblPendientes.innerText             = 0
    lblPendientes.style.display         = 'none'

    divAlerta_SinTickets.style.display  = ''
  } else { 
    lblPendientes.style.display        = '' 
    lblPendientes.innerText            = ticketsPendientes 
    divAlerta_SinTickets.style.display = 'none' 
  }

} )

/* ------------------------------ [ LISTENERS ] ----------------------------- */
btnAtenderTicket.addEventListener( 'click', () => { 

  // Asignamos escritorio al Ticket emitiendo el evento atender-ticket 
  socket.emit( 'atender-ticket', { escritorio }, ( ticket_a_atender ) => { 
    const { ok, ticket , msg } = ticket_a_atender 
    //console.log( ticket_a_atender ) 

    if (!ok) { 
      smallAtendiendoTicket.innerText = 'Nadie' 
      return divAlerta_SinTickets.style.display  = '' 
    } 

    smallAtendiendoTicket.innerText = `Ticket ${ ticket.numero }` 

  } )
 
})


