import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { ChatGatewayService } from '../services/chat-gateway.service';
import { CreateChatGatewayDto } from '../dto/create-chat-gateway.dto';
import { UpdateChatGatewayDto } from '../dto/update-chat-gateway.dto';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class ChatGatewayGateway {
  @WebSocketServer() wss: Server;

  constructor(private readonly chatGatewayService: ChatGatewayService) {}

  handleConnection(client: Socket) {
    this.chatGatewayService.registerClient(client);
    this.wss.emit(
      'clientsUpdated',
      this.chatGatewayService.getConnectedClient(),
    );
    console.log({
      conectados: this.chatGatewayService.getNumberOfConnectedClient(),
    });
  }

  handleDisconnect(client: Socket) {
    this.chatGatewayService.removeClient(client.id);
    this.wss.emit(
      'clientsUpdated',
      this.chatGatewayService.getConnectedClient(),
    );
    console.log({
      conectados: this.chatGatewayService.getNumberOfConnectedClient(),
    });
  }
}
