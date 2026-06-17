import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectConnection()
    private readonly connection: Connection,
  ) {}

  async getUsers() {
    const users = await this.connection.collection('users').find({}).toArray();

    return {
      message: 'Users!',
      users,
    };
  }

  async createUser() {
    const result = await this.connection
      .collection('users')
      .insertOne({ name: 'Ali Mohamed', age: 20 });

    return {
      message: 'User inserted successfully!',
      result,
    };
  }
}
