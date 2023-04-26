import axios, { AxiosInstance } from 'axios';
import type { User } from "../types";

class AuthStrategy {
  isSSR: boolean = typeof window === 'undefined' || true;
  client: AxiosInstance = axios;

  public getLocalUser(): User | undefined {
    if (!this.isSSR) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        return JSON.parse(storedUser);
      }
    }
    return undefined;
  } 

  private saveLocalUser(user: User): User {
    if (!this.isSSR) {
      const storedUser = this.getLocalUser();
      if (storedUser) {
        return storedUser;
      }
      localStorage.setItem('user', JSON.stringify(user));
    }
    return user; 
  }

  public async login(user: User): Promise<void> {
    const { data } = await this.client.post('/login', user);
    if (!this.isSSR) {
      this.saveLocalUser(user);
    }
    return data;
  }

  public async singUp(user: User): Promise<void> {
    const { data } = await this.client.post('/signUp', user);
    if (!this.isSSR) {
      this.saveLocalUser(user);
    }
    return data;
  }

  private cleanLocalUser(): void {
    if (!this.isSSR) {
      const savedUser = this.getLocalUser();
      if (savedUser) {
        localStorage.removeItem('user');
      }
    }
  }

  public logout(): void {
    this.cleanLocalUser();
    if (!this.isSSR) {
      window.location.replace("home");
    }
  }
}

export default AuthStrategy;