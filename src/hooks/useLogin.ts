import { useEffect, useState } from 'react';
import AuthStrategy from '../models/login.strategy';
import { User } from '../types';

const authStrategy = new AuthStrategy();

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const onLogin = async (user: User): Promise<void> => {
    try {
      await authStrategy.login(user);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  const onSignUp = async (user: User): Promise<void> => {
    try {
      await authStrategy.singUp(user);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  const onLogout = (): void => authStrategy.logout();

  useEffect(() => {
    const storedUser = authStrategy.getLocalUser();
    if (storedUser) {
      setIsLoggedIn(true);
      return;
    }
    setIsLoggedIn(false);
    return;
  }, [])

  return {
    isLoggedIn,
    onLogin,
    onSignUp,
    onLogout,
  }
}

export default useAuth;