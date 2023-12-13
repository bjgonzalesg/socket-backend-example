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
const chat_gateway_service_1 = require("../chat-gateway.service");
let ChatGatewayGateway = class ChatGatewayGateway {
    constructor(chatGatewayService) {
        this.chatGatewayService = chatGatewayService;
    }
    handleConnection(client) {
        console.log('Cliente conectado', client.id);
    }
    handleDisconnect(client) {
        console.log('Cliente desconectado', client.id);
    }
};
exports.ChatGatewayGateway = ChatGatewayGateway;
exports.ChatGatewayGateway = ChatGatewayGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true }),
    __metadata("design:paramtypes", [chat_gateway_service_1.ChatGatewayService])
], ChatGatewayGateway);
//# sourceMappingURL=chat-gateway.gateway.js.map