import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./fireBase";
import { doc, setDoc, getDoc } from "firebase/firestore"; 

function LoginEmail({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'This email is already registered. Please sign in instead.';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters long.';
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      case 'auth/user-not-found':
        return 'No account found with this email. Please sign up.';
      case 'auth/wrong-password':
        return 'Incorrect password. Please try again.';
      default:
        return 'An error occurred. Please try again.';
    }
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !password) {
      setErrorMsg('Please provide both email and password');
      return;
    }

    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed up successfully");
        await setDoc(doc(db, "users", email), {
        });
        setIsSignUp(false);
        setEmail('');
        setPassword('');
        setErrorMsg('Account created! Please log in.');
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in:", userCredential.user);
        const userDoc = doc(db, "users", email);
        const docSnap = await getDoc(userDoc);
        if (!docSnap.exists()) {
          await setDoc(userDoc, {
          });
        }
        onLoginSuccess(userCredential.user);
      }
    } catch (error) {
      console.error("Auth error:", error.code, error.message);
      setErrorMsg(getErrorMessage(error.code));
    }
  };

  return (
    <div className="loginForm">
      <h2 className="logs">{isSignUp ? 'SIGN UP' : 'SIGN IN'}</h2>
      {errorMsg && <div className="errorMessage">{errorMsg}</div>}
      <form onSubmit={handleAuth}>
        <div className="components">
          <input className="textboxemail"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">
            {isSignUp ? 'Sign Up' : 'Sign in'}
          </button>
        </div>
      </form>
      <div className="components">
        <button className="bu" onClick={() => {
          setIsSignUp(!isSignUp);
          setErrorMsg('');
        }}>
          {isSignUp ? 'Already have an account? Sign in' : 'Need an account? Sign Up'}
        </button>
      </div>
    </div>
  );
}

export default LoginEmail;

