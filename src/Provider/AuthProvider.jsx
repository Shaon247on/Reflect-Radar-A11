import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const providerGoogle = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();
export const AuthContext = new createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = ()=>{        
        return signInWithPopup(auth, providerGoogle)
    }
    const githubLogin = ()=>{        
        return signInWithPopup(auth, providerGithub)
    }

    const logOut =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser =>{
            setUser(currentUser)
            setLoading(false)
        }))
        return ()=> {
            unSubscribe()
        }
    },[])

    const addNameAndPhoto =(name, photo)=> {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const authData ={
        user,
        createUser,
        logIn,
        googleLogin,
        logOut,
        addNameAndPhoto,
        loading,
        githubLogin
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;