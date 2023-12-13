import { ChatGatewayService } from '../chat-gateway.service';
import { Socket } from 'socket.io';
export declare class ChatGatewayGateway {
    private readonly chatGatewayService;
    constructor(chatGatewayService: ChatGatewayService);
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
}
