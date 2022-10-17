import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext();

// google auth provider
const googleAuthProvider = new GoogleAuthProvider();

// github auth provider
const githubAuthProvider = new GithubAuthProvider();

const UserContext = ({ children }) => {
  // sign out start
  const handleLogOut = () => {
    return signOut(auth);
  };
  // sign out start

  // creating user with google account start
  const handleGoogleSignUp = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };
  // creating user with google account end

  // creating user with gmail and password start
  const handleEmailPasswordSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // creating user with gmail and password end

  // creating user with github start
  const handleGithubSignUp = () => {
    return signInWithPopup(auth, githubAuthProvider);
  };
  // creating user with github end

  // set user data
  const [user, setUser] = useState();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user changed", currentUser);
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    handleLogOut,
    handleGoogleSignUp,
    handleEmailPasswordSignUp,
    handleGithubSignUp,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
