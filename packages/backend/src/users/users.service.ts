import { Injectable } from '@nestjs/common';
import { hash, genSalt } from 'bcrypt';
import { PublicUser, PublicUserSchema } from 'contracts';
import { PrismaService } from 'src/database/prisma.service';
import { User } from 'src/generated/prisma/client';

import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create({ email, name, password }: CreateUserDto): Promise<PublicUser> {
    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        passwordHash: await this.hashPassword(password),
      },
    });

    return PublicUserSchema.parse(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = await genSalt();
    return hash(password, salt);
  }
}
