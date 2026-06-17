import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hi')
  hi() {
    return 'hi';
  }

  @Get()
  getUsers() {
    return this.appService.getUsers();
  }

  @Post()
  createUser() {
    return this.appService.createUser();
  }
}
