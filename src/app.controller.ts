import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getInfo(@Query('url') url: string): Promise<any> {
    return await this.appService.getInfo(url);
  }
}
