import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { mockDatabase } from '../data/mockDatabase';

const SessionContext = createContext(null);
const STORAGE_KEY = 'nexus-demo-session';

export const SessionProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? stored === 'true' : true;
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, String(isAuthenticated));
  }, [isAuthenticated]);

  const value = useMemo(() => ({
    isAuthenticated,
    user: isAuthenticated ? mockDatabase.users[0] : null,
    loginDemo: () => setIsAuthenticated(true),
    logoutDemo: () => setIsAuthenticated(false),
  }), [isAuthenticated]);

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) throw new Error('useSession must be used inside SessionProvider');
  return context;
};
