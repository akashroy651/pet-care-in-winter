import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebase/firebase.init";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Login Function
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Logout Function <//
  const logOut = () => {
    return signOut(auth);
  };

  // Track User State  <//
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = { user, googleLogin, logOut };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
