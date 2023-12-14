import { Injectable } from '@nestjs/common';
import { CreateChatGatewayDto } from '../dto/create-chat-gateway.dto';
import { UpdateChatGatewayDto } from '../dto/update-chat-gateway.dto';
import { Socket } from 'socket.io';

interface ConnectedClients {
  [id: string]: Socket;
}

@Injectable()
export class ChatGatewayService {
  private connectedClients: ConnectedClients = {};

  registerClient(client: Socket) {
    this.connectedClients[client.id] = client;
  }

  removeClient(clientId: string) {
    delete this.connectedClients[clientId];
  }

  getConnectedClient(): string[] {
    return Object.keys(this.connectedClients);
  }

  getNumberOfConnectedClient(): number {
    return Object.keys(this.connectedClients).length;
  }
}
