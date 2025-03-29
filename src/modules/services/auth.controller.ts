import { Controller, Post, Body, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

interface JwtPayload {
  userId: string;
  email: string;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() body: { username: string; password: string }) {
    return this.authService.register(body.username, body.password);
  }

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    return this.authService.login(body.username, body.password);
  }

  @Get('profile')
  async profile(@Req() req: Request) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return { error: 'Unauthorized' };
    try {
      const decoded: any = jwt.verify(
        token,
        'SECRET_KEY-test123',
      ) as JwtPayload;
      console.log("decoded", decoded)
      return this.authService.getProfile(decoded.username);
    } catch {
      return { error: 'Invalid token' };
    }
  }
}
