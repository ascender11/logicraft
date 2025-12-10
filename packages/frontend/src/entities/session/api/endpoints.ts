class SessionApiEndpoints {
  private readonly baseUrl = '/auth';

  login = `${this.baseUrl}/login`;
  register = `${this.baseUrl}/register`;
}

export const sessionApiEndpoints = new SessionApiEndpoints();
