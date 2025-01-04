import React, { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "./fireBase";
import { doc, setDoc, getDoc } from "firebase/firestore";

function LoginGoogle({ onLoginSuccess }) {
  const [errorMsg, setErrorMsg] = useState('');

  const handleGoogleLogin = async () => {
    try {
      setErrorMsg('');
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const credential = GoogleAuthProvider.credentialFromResult(result);
      
      if (!credential) {
        setErrorMsg('Failed to get credentials');
        return;
      }

      console.log("Google login successful:", user);

      const userDoc = doc(db, "users", user.email);
      const docSnap = await getDoc(userDoc);
      if (!docSnap.exists()) {
        await setDoc(userDoc, {
        });
      }

      onLoginSuccess(user);

    } catch (error) {
      console.error("Google login error:", error.code, error.message);
      if (error.code === 'auth/popup-closed-by-user') {
        setErrorMsg('Login cancelled. Please try again.');
      } else if (error.email) {
        setErrorMsg('Email already in use with different provider.');
      } else {
        setErrorMsg('Failed to login with Google. Please try again.');
      }
    }
  };

  return (
    <div className="googleLoginContainer">
      {errorMsg && <div className="errorMessage">{errorMsg}</div>}
      <button className="googleLoginButton" onClick={handleGoogleLogin}>
        Sign in with Google
      </button>
    </div>
  );
}

export default LoginGoogle;