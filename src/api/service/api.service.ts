import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  getResponse() {
    return { message: 'Hello World', statusCode: 200 };
  }

  getById(id: string) {
    return { message: `Data for ID: ${id}`, statusCode: 200 };
  }

  getUser() {
    return { username: 'JohnDoe', role: 'admin', statusCode: 200 };
  }
}
