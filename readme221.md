# 221 Tarea - nueva App en Railway

## Tarea - Crear una nueva App en Railway

Los quiero invitar a que intenten hacer el despliegue de su aplicación a Railway por su cuenta.

**Pasos que les pueden ayudar :**

1. Crear un **nuevo repositorio en Github**
1. Subir todo el código del proyecto a **Github** 
1. Crear una **nueva rama**.
1. Publiquen la ``rama 1.0.0`` en un nuevo proyecto de **Railway**:   
1. Generen un URL público en **Railway**
1. Prueben la aplicación cambiando la referencia del ``localhost:xxx``, por su URL que generaron en **Railway**

**Mucha suerte!**

--- 
**[** MI SOLUCION **]**.

1. Crear un **nuevo repositorio en Github** , lo llame : **``mywebsocketapp-ferherr``** , podemos consultarlo aqui: [github/zamudpoe/mywebsocketapp-ferherr] 
1. No olvidemos de crear el script de ejecucion en nuestro ``package.json`` : **``"start" : "node app.js"``**
1. Subir todo el código del proyecto a **Github**
    > **NOTA :** Recordemos que vamos a estar publicando desde la carpeta ``./08-websocket-server/`` , asi que hay que copiar todo aqui. y ejecutar los siguientes comandos de ``git``

        ```git
        git init    
        git status
        git add .
        git commit -m "mi 1er commit-Subir proyecto"
        git branch -M main
        git remote add origin git@github.com:zamudpoe/mywebsocketapp-ferherr.git
        git push -u origin main
        ```
1. Crear una **nueva rama**: 

    ```git
    git checkout -b 1.0.0
    git push (Esto dará un error de git, resuélvanlo)
    ```
    Nos da el siguiente error: 
    
    ```git
    fatal: The current branch 1.0.0 has no upstream branch.
    To push the current branch and set the remote as upstream, use

    git push --set-upstream origin 1.0.0
    ```
    Ejecutamos **``git push --set-upstream origin 1.0.0``**  para subir nuestro proyecto a nuestro repositorio github recien creado.

1. Publiquen la ``rama 1.0.0`` en un nuevo proyecto de **Railway**

    1. Nos vamos a -> [Dashboard Railway] y le damos click a **``new project``** 
    2. Escogemos **``Deploy from GitHub repo``**,``Configure GitHub App`` y elegimos **``zamudpoe/mywebsocketapp-ferherr``** 
    3. Le damos **``Deploy Now``** 
        > **OJO:** no nos olvidemos de las variables de entorno , aqui ocupamos ``PORT=4500`` 

1. Generen un URL público en **Railway** : le damos click a **``Generar dominio``** y se nos entregara la url para acceso publico: [mywebsocketapp-ferherr-production] 
 
1. Prueben la aplicación cambiando la referencia del ``localhost:xxx``, por su URL que generaron en **Railway** : 

    Abrimos el navegador varias ventanas con el url ``https://mywebsocketapp-ferherr-production.up.railway.app/`` con la consola del desarrollador abierta y realizamos las pruebas que estuvimos realizando durante el curso de la seccion 14.

Las pruebas son que se enviara desde un cliente y el resto recibiran la respuesta completa de parte del server con el payload mientras el cliente emisor no recibira la respuesta del server con el payload, solo nos mostrara el console.log que el mismo cliente envia con el id que recibe de respuesta en el callback que envia al servidor!.


## **LISTO!!!!**, hemos logrado la tarea con exito!!!.


----
# Referencias
[socket.io]
[socket.io-client]
[Readme Socket.io] 
[Documentacion Socket.io]
[github/zamudpoe/mywebsocketapp-ferherr]:(https://github.com/zamudpoe/mywebsocketapp-ferherr)
[Dashboard Railway]

---
[socket.io]:(https://www.npmjs.com/package/socket.io)
[socket.io-client]:(https://www.npmjs.com/package/socket.io-client)
[Readme Socket.io]:(github.com/socketio/socket.io#readme)
[Documentacion Socket.io]:(https://socket.io/docs/)
[Dashboard Railway]:(https://railway.app/dashboard)
[mywebsocketapp-ferherr-production]:(https://mywebsocketapp-ferherr-production.up.railway.app/)





