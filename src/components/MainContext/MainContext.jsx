import App from "./../../App";

import { createContext, useState } from "react";
import { signOut } from 'firebase/auth';
import { auth } from "../../config/firebase";
export const UserContext = createContext();


const MainContext = () => {
  const [user, setUser] = useState(null);

  const handelSingOut = (e) => {
    e.preventDefault()
    signOut(auth)
      .then((result) => {
        setUser(null);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <UserContext.Provider value={{ user, setUser, handelSingOut }}>
        <App />
      </UserContext.Provider>
    </div>
  );
};

export default MainContext;
