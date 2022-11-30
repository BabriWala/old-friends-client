import React, { useEffect, useState } from 'react';
// import { initializeApp } from "firebase/app";
import { createContext } from "react";
// import { firebaseConfig } from "../Firebase/firebase.config";
import {getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged, updateProfile} from 'firebase/auth';
import app from '../Firebase/firebase.config';



export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    // const app = initializeApp(firebaseConfig);

    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    // console.log(user)
    const signUp = (email, password) =>{
        // console.log(auth)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logOut = ()=>{
        return signOut(auth);
    };

    const logIn = (email, password)=>{
        return signInWithEmailAndPassword(email, password);
    };
    
    const profileUpdate = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    }

    useEffect(()=>{
        onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser, 'from on auth state changed')
            setUser(currentUser);
        })
    },[auth])

    const authInfo = {
        user,
        logIn,
        signUp,
        profileUpdate,
        logOut
    };

    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

