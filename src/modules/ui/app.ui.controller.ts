import { Controller, Get } from '@nestjs/common';

@Controller('ui')
export class UIController {
  @Get('home')
  getHomeUI() {
    return {
      navTitle: 'Server Driven UI',
      logo:'logo.svg',
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
    return {
      title: "Login",
      fields: [
        { type: "input", placeholder: "Username", name: "username" },
        { type: "input", placeholder: "Password", name: "password", secure: true }
      ],
      actions: [
        { type: "button", text: "Login", action: "submit", endpoint: "http://localhost:3001/auth/login" },
      ],
      switchText: "Don't have an account?",
      switchRoute: "/register",
      switchLinkText: "Sign up here"
    };
  }

  @Get('register')
  getRegisterUI() {
    return {
      title: "Register",
      fields: [
        { type: "input", placeholder: "Username", name: "username" },
        { type: "input", placeholder: "Password", name: "password", secure: true }
      ],
      actions: [
        { type: "button", text: "Register", action: "submit", endpoint: "http://localhost:3001/auth/register" },
      ],
      switchText: "Have an account?",
      switchRoute: "/auth",
      switchLinkText: "Login here"
    };
  }
}
