import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from 'react';
import {
  getProfile,
  login as loginRequest,
  register as registerRequest,
  type LoginPayload,
  type RegisterPayload
} from '../services/authService';
import type { User } from '../types/user';

interface AuthContextValue {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (payload: LoginPayload) => Promise<User>;
  register: (payload: RegisterPayload) => Promise<User>;
  logout: () => void;
  refreshProfile: () => Promise<User | null>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const getInitialToken = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  return window.localStorage.getItem('authToken');
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(getInitialToken);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let ignore = false;

    const loadProfile = async () => {
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const profile = await getProfile();
        if (!ignore) {
          setUser(profile);
        }
      } catch (error) {
        if (!ignore) {
          setToken(null);
          setUser(null);
          if (typeof window !== 'undefined') {
            window.localStorage.removeItem('authToken');
          }
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    void loadProfile();

    return () => {
      ignore = true;
    };
  }, [token]);

  const persistToken = useCallback((value: string | null) => {
    setToken(value);
    if (typeof window !== 'undefined') {
      if (value) {
        window.localStorage.setItem('authToken', value);
      } else {
        window.localStorage.removeItem('authToken');
      }
    }
  }, []);

  const handleLogin = useCallback(
    async (payload: LoginPayload) => {
      const { token: receivedToken } = await loginRequest(payload);
      persistToken(receivedToken);
      try {
        const profile = await getProfile();
        setUser(profile);
        return profile;
      } catch (error) {
        persistToken(null);
        setUser(null);
        throw error;
      }
    },
    [persistToken]
  );

  const handleRegister = useCallback(
    async (payload: RegisterPayload) => {
      const { token: receivedToken } = await registerRequest(payload);
      persistToken(receivedToken);
      try {
        const profile = await getProfile();
        setUser(profile);
        return profile;
      } catch (error) {
        persistToken(null);
        setUser(null);
        throw error;
      }
    },
    [persistToken]
  );

  const handleLogout = useCallback(() => {
    persistToken(null);
    setUser(null);
  }, [persistToken]);

  const refreshProfile = useCallback(async () => {
    if (!token) {
      setUser(null);
      return null;
    }

    try {
      const profile = await getProfile();
      setUser(profile);
      return profile;
    } catch (error) {
      persistToken(null);
      setUser(null);
      return null;
    }
  }, [persistToken, token]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      token,
      loading,
      login: handleLogin,
      register: handleRegister,
      logout: handleLogout,
      refreshProfile
    }),
    [handleLogin, handleLogout, handleRegister, loading, refreshProfile, token, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
