import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async register(username: string, password: string) {
    const existingUser = await this.userRepository.findByUsername(username);
    if (existingUser) return { error: 'Username already exists' };

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userRepository.createUser(username, hashedPassword);
    return { message: 'User registered successfully', user };
  }

  async login(username: string, password: string) {
    const user = await this.userRepository.findByUsername(username);
    if (!user) return { error: 'User not found' };

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return { error: 'Invalid credentials' };

    const token = jwt.sign({ username }, 'SECRET_KEY-test123', {
      expiresIn: '1h',
    });
    return { token };
  }

  async getProfile(username: string) {
    return this.userRepository.findByUsername(username);
  }
}
