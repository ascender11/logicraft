import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import {
  PublicUser,
  LoginResponseDto,
  PublicUserSchema,
  RegisterResponseDto,
} from 'contracts';
import { UsersService } from 'src/users/users.service';

import { AUTH_MESSAGES } from './auth.messages';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtPayload } from './strategy/jwt.strategy';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<PublicUser> {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException(AUTH_MESSAGES.INVALID_CREDENTIALS);
    }

    const isPasswordValid = await compare(password, user.passwordHash);

    if (!isPasswordValid) {
      throw new UnauthorizedException(AUTH_MESSAGES.INVALID_CREDENTIALS);
    }

    return PublicUserSchema.parse(user);
  }

  async login({ email, password }: LoginDto): Promise<LoginResponseDto> {
    const user = await this.validateUser(email, password);

    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
    };

    return { user, access_token: await this.jwtService.signAsync(payload) };
  }

  async register({
    email,
    password,
    name,
  }: RegisterDto): Promise<RegisterResponseDto> {
    const existingByEmail = await this.usersService.findByEmail(email);

    if (existingByEmail) {
      throw new ConflictException(AUTH_MESSAGES.EMAIL_EXISTS);
    }

    const user = await this.usersService.create({ email, password, name });

    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
    };

    return { user, access_token: await this.jwtService.signAsync(payload) };
  }
}
