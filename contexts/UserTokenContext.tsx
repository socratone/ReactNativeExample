import { createContext } from 'react';

const UserTokenContext = createContext({
  token: null as string | null,
  handleChangeToken: (token: string | null) => {
    console.log(token);
  },
});

export default UserTokenContext;
