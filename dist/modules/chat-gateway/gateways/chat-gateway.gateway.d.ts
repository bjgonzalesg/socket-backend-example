import { ChatGatewayService } from '../services/chat-gateway.service';
import { Server, Socket } from 'socket.io';
export declare class ChatGatewayGateway {
    private readonly chatGatewayService;
    wss: Server;
    constructor(chatGatewayService: ChatGatewayService);
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
}
