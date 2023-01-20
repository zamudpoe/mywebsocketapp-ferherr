const path = require('path') 
const fs   = require('fs') 

class Ticket {

  constructor( numero, escritorio ) {
    this.numero      = numero,
    this.escritorio  = escritorio
  }

}

class TicketControl {
  
  constructor() {
    this.ultimo   = 0 
    this.hoy      = new Date().getDate() // Al instanciarse obtendremos el dia actual.
    this.tickets  = [] // TODOS Tickets pendientes. 
    this.ultimos4 = [] // Lo sultimos 4 que se mostrara en el dashboard. 

    this.init()
  }

  get toJson () { 

    return {
      ultimo   : this.ultimo, 
      hoy      : this.hoy, 
      tickets  : this.tickets, 
      ultimos4 : this.ultimos4 
    }

  }

  // METODO PARA INICIALIZAR NUESTRA CLASE.
  init () {
    const { ultimo, hoy, tickets, ultimos4 } = require('../db/data.json') 
    /* console.log(ultimo, hoy, tickets, ultimos4)  */

    if ( hoy === this.hoy ) { 
      this.tickets    = tickets  
      this.ultimo     = ultimo 
      this.ultimos4   = ultimos4 
    } else { 
      // Es otro dia, hay que reinicializar variables. 
      this.guardarDB() 
    }    
  }

  // 
  guardarDB () { 
    const dbPath = path.join( __dirname, '../db/data.json' ) 
    fs.writeFileSync( dbPath, JSON.stringify( this.toJson )  ) 
  }
 
  // Crear un ticket nuevo
  siguienteTicket() { 
    this.ultimo += 1
    const ticket = new Ticket( this.ultimo, null ) 
    this.tickets.push( ticket ) 

    this.guardarDB() 
    return `Ticket ${this.ultimo}` 
  } 

  atenderTicket ( escritorio ) { 
    
    // NO TENEMOS TICKET RETORNAMOS NULL
    if ( this.tickets.length === 0 ) { return null } 
     
    const ticket      = this.tickets.shift() // Obtenemos el 1er elemento.
    //console.log( ticket )
    ticket.escritorio = escritorio 

    this.ultimos4.unshift( ticket )  // Agregamos 1 elemento 

    // validamos que siempre sean 4
    if ( this.ultimos4.length > 4 ) { 
      this.ultimos4.splice( -1, 1 ) // Eliminamos el ultimo elemento
    } 

    this.guardarDB()

    return ticket
  }

}

module.exports = TicketControl 

