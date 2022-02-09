import React, { createContext, useState } from 'react';

const UserTokenContext = createContext({
  token: null as string | null,
  handleChangeToken: (token: string | null) => {
    console.log(token);
  },
});

type UserTokenContextProviderProps = {
  children: React.ReactNode;
};

export const UserTokenContextProvider = ({
  children,
}: UserTokenContextProviderProps) => {
  const [token, setToken] = useState<string | null>(null);

  const handleChangeToken = (newToken: string | null) => {
    setToken(newToken);
  };

  return (
    <UserTokenContext.Provider value={{ token, handleChangeToken }}>
      {children}
    </UserTokenContext.Provider>
  );
};
