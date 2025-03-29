import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('ui')
export class UIController {
  constructor(private configService: ConfigService) {}

  private getBackendUrl(): string {
    return this.configService.get<string>('BACKEND_URL') || 'http://localhost:3001';
  }

  @Get('home')
  getHomeUI() {
    return {
      navTitle: 'Server Driven UI',
      logo: 'logo.svg',
      navLinks: [
        { text: 'Dashboard', route: '/dashboard' },
        { text: 'Register', route: '/register' },
        { text: 'Login', route: '/auth' },
      ],
      title: 'Welcome to Server Driven UI',
      description: 'A flexible UI powered by server-driven components.',
      components: [{ type: 'button', text: 'Get Started', route: '/register' }],
    };
  }

  @Get('auth')
  getAuthUI() {
    const backendUrl = this.getBackendUrl();
    return {
      title: "Login",
      fields: [
        { type: "input", placeholder: "Username", name: "username" },
        { type: "input", placeholder: "Password", name: "password", secure: true }
      ],
      actions: [
        { type: "button", text: "Login", action: "submit", endpoint: `${backendUrl}/auth/login` },
      ],
      switchText: "Don't have an account?",
      switchRoute: "/register",
      switchLinkText: "Sign up here"
    };
  }

  @Get('register')
  getRegisterUI() {
    const backendUrl = this.getBackendUrl();
    return {
      title: "Register",
      fields: [
        { type: "input", placeholder: "Username", name: "username" },
        { type: "input", placeholder: "Password", name: "password", secure: true }
      ],
      actions: [
        { type: "button", text: "Register", action: "submit", endpoint: `${backendUrl}/auth/register` },
      ],
      switchText: "Have an account?",
      switchRoute: "/auth",
      switchLinkText: "Login here"
    };
  }
}
