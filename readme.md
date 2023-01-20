# 234. Reproducir audio cuando se asigna un ticket  
 
Algo que tenemos que hacer, que va a ser que nuestra aplicación quede mucho más bonita que reproducir un audio cuando se asigna un ticket.

El audio se reproducira en el dashboard publico **``http://localhost:4500/publico.html``** , cuando asignemos escritorio a los tickets o creemos un ticket nuevo!.

en el archivo publico.js en el obervable ultimos4 vamos a agregar : 

  ```javascript
  if ( payload.length > 0  ) {
    const audio = new Audio('./audio/new-ticket.mp3') 
    audio.play() 
  }
  ```

Listo!!!!, la cereza del pastel ya esta puesta!.

> **NOTA :** Podemos ponerlo mas bonito teniendo sonidos para todos los numeros de tickets que se puedan atender en un dia , y dependiente la cantidad de tickets pendientes seria el audio que se reproduciria , pero bueno esto queda como punto a mejorar mas nuestra **aplicacion websocket**.

---
## CONSIDERACIONES PARA PUBLICAR EN REPOSITORIO GITHUB

  > **ATENCION :** Cada capitulo tendra el codigo conforme vamos avanzando ene l curso pero la carpeta que tendra el proyecto que vamos a desplegar , es la carpeta que esta en raiz de esta seccion 15 , y es la carpeta : ``09-sockets-colas`` 


