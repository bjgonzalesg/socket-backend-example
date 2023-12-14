import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChatGatewayModule } from './modules/chat-gateway/chat-gateway.module';

@Module({
  imports: [ConfigModule.forRoot(), ChatGatewayModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
