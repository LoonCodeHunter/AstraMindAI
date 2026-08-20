export class AuthService {
  async login(email: string, _password: string) {
    // Demo: in real life, verify password, issue JWT
    return { userId: 'demo-user', email, token: 'demo-token' };
  }
}
