"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const logger = new common_1.Logger();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.setGlobalPrefix('app/v1');
    const SERVER_PORT = process.env.SERVER_PORT;
    await app.listen(SERVER_PORT);
    logger.log(`SERVER RUNNING IN PORT ${SERVER_PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map