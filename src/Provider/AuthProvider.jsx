import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase/firebase.config';
import Loading from '../components/Loading';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);

      const createUser = (email, password, name, photoURL) => {
            return createUserWithEmailAndPassword(auth, email, password)
                  .then((res) => {
                        return updateProfile(res.user, {
                              displayName: name,
                              photoURL: photoURL
                        }).then(() => {
                              setUser({ ...res.user, displayName: name, photoURL: photoURL });

                              // Save user information to the backend server
                              const userInfo = {
                                    email: res.user.email,
                                    displayName: name,
                                    photoURL: photoURL,
                                    loginTime: new Date().toISOString()
                              };

                              fetch('http://localhost:5000/users', {
                                    method: 'POST',
                                    headers: {
                                          'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(userInfo),
                              })
                                    .then(response => response.json())
                                    .then(data => {
                                          
                                    })
                                    .catch(error => {
                                          console.error('Error saving user information:', error);
                                    });
                        });
                  });
      };

      const login = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password);
      };

      const logout = () => {
            return signOut(auth);
      };

      const googleLogin = () => {
            return signInWithPopup(auth, googleProvider);
      };

      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                  setUser(currentUser);
                  setLoading(false);
            });
            return () => {
                  unsubscribe();
            };
      }, []);

      const userInfo = {
            user,
            loading,
            createUser,
            login,
            logout,
            googleLogin,
      };

      return (
            <AuthContext.Provider value={userInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;
