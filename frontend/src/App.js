import useAuth from './components/hooks/useAuth';
import Public from './components/Public';
import Private from './components/Private';
import React from 'react';

function App() {
 console.log( process.env.REACT_APP_KEYCLOAK_URL)
  const [isLogin, token] = useAuth();
  return isLogin ? <Private token={token} /> : <Public />;
  
}

export default App;
