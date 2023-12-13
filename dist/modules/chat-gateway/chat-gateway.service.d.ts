import { CreateChatGatewayDto } from './dto/create-chat-gateway.dto';
import { UpdateChatGatewayDto } from './dto/update-chat-gateway.dto';
export declare class ChatGatewayService {
    create(createChatGatewayDto: CreateChatGatewayDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateChatGatewayDto: UpdateChatGatewayDto): string;
    remove(id: number): string;
}
