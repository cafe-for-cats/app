import * as socketio from 'socket.io';
import { CommonSocketsConfig } from './common.sockets.config';

export class CoreSockets extends CommonSocketsConfig {
  constructor(io: socketio.Server) {
    super(io, 'CoreSockets');
  }

  configureRoutes() {
    this.io.on('connection', (socket: socketio.Socket) => {
      console.log(`↑  Client '${socket.id}' connected to io`);

      socket.on('disconnect', () => {
        console.log('disconnected');
      });
    });

    return this.io;
  }
}
