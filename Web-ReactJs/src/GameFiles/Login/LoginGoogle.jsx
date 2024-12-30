import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./fireBase";

function LoginGoogle() {
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      
      if (!credential) {
        console.error("No credential received");
        return;
      }

      const token = credential.accessToken;
      const user = result.user;
      console.log("Google login successful:", user);
      return user;

    } catch (error) {
      console.error("Google login error:", error.code, error.message);
      if (error.email) {
        console.error("Email already in use:", error.email);
      }
    }
  };

  return (
    <button className="googleLoginButton" onClick={handleGoogleLogin}>
      Sign in with Google
    </button>
  );
}

export default LoginGoogle;