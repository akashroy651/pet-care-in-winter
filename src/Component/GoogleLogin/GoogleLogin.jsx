import { useState, useEffect } from "react";
import { auth } from "../../firebase/firebase.init"; 
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();

const GoogleLogin = () => {
  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      {user ? (
        <div className="flex items-center gap-3">
          <img
              src={user.photoURL || "https://via.placeholder.com/40"}
            
            alt="avatar"
            className="w-10 h-10 rounded-full border-2 border-amber-500"
          />
          <button onClick={handleLogout} className="btn btn-sm btn-outline">
            Logout
          </button>
        </div>
      ) : (
        <button onClick={handleLogin} className="btn btn-sm btn-primary">
          Login
          
        </button>
      )}
    </div>
  );
};

export default GoogleLogin;














// import { useState, useEffect } from "react";
// import { auth, googleProvider } from "../../firebase/firebase.init";
// import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

// const GoogleLogin = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       console.log("Logged user:", currentUser); // debug ok
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleLogin = () => signInWithPopup(auth, googleProvider);
//   const handleLogout = () => signOut(auth);

//   return (
//     <>
//       {user ? (
//         <div className="flex items-center gap-3">
//           <img
//             src={user.photoURL}
//             alt="avatar"
//             className="w-10 h-10 rounded-full border"
//           />
//           <button onClick={handleLogout} className="btn btn-sm btn-outline">
//             Logout
//           </button>
//         </div>
//       ) : (
//         <button onClick={handleLogin} className="btn btn-sm btn-primary">
//           Login
//         </button>
//       )}
//     </>
//   );
// };

// export default GoogleLogin;
