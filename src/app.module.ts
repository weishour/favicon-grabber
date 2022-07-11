import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => {
        return {
          timeout: 5000,
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
