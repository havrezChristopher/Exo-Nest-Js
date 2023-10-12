import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './controllers/_menu/_menu.module';

@Module({
  imports: [MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
