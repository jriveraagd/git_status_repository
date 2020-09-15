# Node Socket Webhook
Node Js Socket IO Example


## A continuación se detalla los pasos necesarios para hacer funcionar el servicio de comparación de archivos:
 
### Maquina Cliente:
  1. Clonar un proyecto de github en la maquina cliente(ej playa, acopio, mayoliva). 
    • Ej: git clone  https://github.com/aceitera-general-deheza/mayolivawebsite.git
  2. Crear una tarea programada que se ejecute cada 5 min. Y el archivo a ejecutar se descarga de:
    • https://github.com/jriveraagd/git_status_repository/blob/master/task_prueba.bat
  3. Listo. Cada vez que una persona modifica algún archivo/directorio de cualquier formato dentro del directorio donde se clono el proyecto automáticamente lo vas a ver reflejado en el siguiente panel..
 
 
### Maquina Servidor
 
  1. git clone https://github.com/jriveraagd/git_status_repository.git
  2. npm install
  3. node index.js
  4. ir a http://172.30.0.136:8080/listar
    • Listo. Cada vez que una persona modifica algun archivo/directorio de cualquier formato del proyecto clonado en la maquina cliente se verá reflejado en este panel.
 
 

## Running the application
Assuming that node Js is already installed, traverse to the project location and execute the command - node index.js and hit the url (http://localhost:8080) to access the vhat application.


```sh
socket.emit('message', "this is a test"); # //sending to sender-client only
socket.broadcast.emit('message', "this is a test"); # //sending to all clients except sender
socket.broadcast.to('game').emit('message', 'nice game'); # //sending to all clients in 'game' room(channel) except sender
socket.to('game').emit('message', 'enjoy the game'); # //sending to sender client, only if they are in 'game' room(channel)
socket.to('game1').to('game2').emit('nice game', "let's play a game (too)"); # // sending to all clients in 'game1' and/or in 'game2' room, except sender
io.to(`${socketId}`).emit('hey', 'I just met you'); # //sending to individual socketid (private message)
io.emit('message', "this is a test"); # //sending to all clients, include sender
io.in('game').emit('message', 'cool game'); # //sending to all clients in 'game' room(channel), include sender
io.of('myNamespace').emit('message', 'gg'); # //sending to all clients in namespace 'myNamespace', include sender
io.of('myNamespace').to('room').emit('event', 'message'); # // sending to a specific room in a specific namespace, including sender
socket.emit(); # //send to all connected clients
socket.broadcast.emit(); # //send to all connected clients except the one that sent the message
socket.on(); # //event listener, can be called on client to execute on server
io.sockets.socket(); # //for emiting to specific clients
io.sockets.emit(); # //send to all connected clients (same as socket.emit)
io.sockets.on() ; # //initial connection from a client.
```

**Note:** The following events are reserved and should not be used as event names by your application:
- `error`
- `connect`
- `disconnect`
- `disconnecting`
- `newListener`
- `removeListener`
- `ping`
- `pong`
