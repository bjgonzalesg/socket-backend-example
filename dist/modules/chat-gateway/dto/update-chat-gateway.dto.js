"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateChatGatewayDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_chat_gateway_dto_1 = require("./create-chat-gateway.dto");
class UpdateChatGatewayDto extends (0, mapped_types_1.PartialType)(create_chat_gateway_dto_1.CreateChatGatewayDto) {
}
exports.UpdateChatGatewayDto = UpdateChatGatewayDto;
//# sourceMappingURL=update-chat-gateway.dto.js.map