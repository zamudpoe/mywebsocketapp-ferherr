/* Referencias del HYTML */
const lblOnline  = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')
const txtMensaje = document.querySelector('#txtMensaje')
const btnEnviar  = document.querySelector('#btnEnviar')

/* socket del cliente */
const socket = io() 

socket.on('connect', ( ) => { 
  console.clear() 

  lblOffline.style.display = 'none'
  lblOnline.style.display  = ''
}) 

socket.on('disconnect', () => {   
  console.clear()
  console.log("%c¡Desconectado del servidor!",'font-size: 4em; font-weight: bold; color: tomato;' )
  
  lblOnline.style.display  = 'none'
  lblOffline.style.display = ''
}) 

socket.on( 'enviar-msg',  ( payload ) => {    
  console.log( 'Desde el server: %o', payload ) 
}) 

/* **************************[ EVENT LISTENERS ]************************** */ 
btnEnviar.addEventListener( 'click', ()=> {
  const mensaje = txtMensaje.value 
  const payload = { 
    mensaje,
    id    : '38448',
    fecha : new Date().getTime()
  }

  /*
    Agregarmos un 3er argumnto que sera un callback , 
    que va a recibir como parametro 'id' lo que sea que uds manden

    Este callback lo debe ejecutar el server solo cuando todo sale OK
  */
  socket.emit( 'enviar-msg', payload , ( payload ) => { 
    console.log( `\n%c====[ Desde el server id => %o ]====`, 'color:green; font-size: 2em;', payload ) 
   } ) 

} )


