import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
export const Context=React.createContext({isAuthorized:false});
const AppWrapper=()=>{
  const [isAuthorized,setIsAuthorized]=useState(false);
  const [user,setUser]=useState({});

  return(
    <Context.Provider value={{isAuthorized,setIsAuthorized,user,setUser}}>
      <App />
    </Context.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

