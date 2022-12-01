import React, { useEffect, useState } from 'react';
// import { initializeApp } from "firebase/app";
import { createContext } from "react";
// import { firebaseConfig } from "../Firebase/firebase.config";
import {getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import app from '../Firebase/firebase.config';
import useCurrentUser from "../Hooks/useCurrentUser";



export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    // const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentUser] = useCurrentUser(user?.email);
    const googleProvider = new GoogleAuthProvider();

    // console.log(user)
    
    // console.log(user)
    const signUp = (email, password) =>{
        // console.log(auth)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logOut = ()=>{
        // setLoading(false)
        return signOut(auth);
    };

    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const logIn = (email, password)=>{
        // setLoading(false)
        return signInWithEmailAndPassword(auth, email, password);
    };
    
    const profileUpdate = (profile) =>{
        // setLoading(false)
        return updateProfile(auth.currentUser, profile);
    }

    useEffect(()=>{
        onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser, 'from on auth state changed')
            setUser(currentUser);
            console.log(loading)
            setLoading(false);
        })
    },[auth, loading])

    const authInfo = {
        user,
        currentUser,
        loading,
        logIn,
        signUp,
        profileUpdate,
        googleSignIn,
        logOut
    };

    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

