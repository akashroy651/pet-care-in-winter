import {  createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase/firebase.init"; // তোমার firebase init path

// // 1️⃣ Context create
 export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 2️⃣ Listen to auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe(); // cleanup
  }, []);

  // 3️⃣ Logout function
  const logOut = () => {
    return signOut(auth);
  };

  const value = {
    user,
    loading,
    logOut
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
    //  <AuthContext value={value}>
    //         {children}
    //     </AuthContext>
  );
};

export default AuthProvider;
