import { Server, Socket } from 'socket.io';

export class SocketIOPost {
  private io: Server;

  constructor(io: Server) {
    this.io = io;
    this.handleSocketEvents();
  }

  private handleSocketEvents(): void {
    this.io.on('connection', this.handleConnection);
  }

  private handleConnection = (socket: Socket): void => {
    console.log(`Socket connected: ${socket.id}`);

    socket.on('reaction', this.handleReactionEvent);
    socket.on('comment', this.handleCommentEvent);

    socket.on('disconnect', () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });
  };

  private handleReactionEvent = () => {};

  private handleCommentEvent = () => {};
}
