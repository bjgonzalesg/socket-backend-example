import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { ChatGatewayService } from '../chat-gateway.service';
import { CreateChatGatewayDto } from '../dto/create-chat-gateway.dto';
import { UpdateChatGatewayDto } from '../dto/update-chat-gateway.dto';
import { Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class ChatGatewayGateway {
  constructor(private readonly chatGatewayService: ChatGatewayService) {}

  handleConnection(client: Socket) {
    console.log('Cliente conectado', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('Cliente desconectado', client.id);
  }
}
