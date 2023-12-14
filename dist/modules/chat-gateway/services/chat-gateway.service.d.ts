import { Socket } from 'socket.io';
export declare class ChatGatewayService {
    private connectedClients;
    registerClient(client: Socket): void;
    removeClient(clientId: string): void;
    getConnectedClient(): string[];
    getNumberOfConnectedClient(): number;
}
