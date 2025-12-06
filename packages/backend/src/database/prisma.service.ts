import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaPg } from '@prisma/adapter-pg';

import { PrismaClient } from '../generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    const DATABASE_URL = config.get('DATABASE_URL');

    if (!DATABASE_URL) {
      throw new Error('No DATABASE_URL specified in .env file');
    }

    const adapter = new PrismaPg({
      connectionString: DATABASE_URL,
    });

    super({ adapter });
  }
}
