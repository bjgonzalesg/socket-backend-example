"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGatewayGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const chat_gateway_service_1 = require("../services/chat-gateway.service");
const socket_io_1 = require("socket.io");
let ChatGatewayGateway = class ChatGatewayGateway {
    constructor(chatGatewayService) {
        this.chatGatewayService = chatGatewayService;
    }
    handleConnection(client) {
        this.chatGatewayService.registerClient(client);
        this.wss.emit('clientsUpdated', this.chatGatewayService.getConnectedClient());
        console.log({
            conectados: this.chatGatewayService.getNumberOfConnectedClient(),
        });
    }
    handleDisconnect(client) {
        this.chatGatewayService.removeClient(client.id);
        this.wss.emit('clientsUpdated', this.chatGatewayService.getConnectedClient());
        console.log({
            conectados: this.chatGatewayService.getNumberOfConnectedClient(),
        });
    }
};
exports.ChatGatewayGateway = ChatGatewayGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGatewayGateway.prototype, "wss", void 0);
exports.ChatGatewayGateway = ChatGatewayGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true }),
    __metadata("design:paramtypes", [chat_gateway_service_1.ChatGatewayService])
], ChatGatewayGateway);
//# sourceMappingURL=chat-gateway.gateway.js.map