import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseDataToISO {
  public execute(createdAt: Date | string): string {
    return new Date(createdAt).toISOString().split('T')[0];
  }
}
