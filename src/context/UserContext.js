import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.init';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState("")
    const [loader, setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    // ---------------------------------
    const notifyLogin = () => {
        toast.success("Login Successful!", {
            position: toast.POSITION.TOP_CENTER
        });
    }
    const notifySignup = () => {
        toast.success("Signup Successful !", {
            position: toast.POSITION.TOP_CENTER
        });
    }
    const notifygoogle = () => {
        toast.success("Signup Successful !", {
            position: toast.POSITION.TOP_CENTER
        });
    }
    const notifyLogout = () => {
        toast.success("Logout Successful!", {
            position: toast.POSITION.TOP_CENTER
        });
    }
    const notifyError = () => {
        toast.error("Failed email or password is not currect!", {
            position: toast.POSITION.TOP_LEFT
        });
    }

    // -----------------------------------

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const currentUser = userCredential.user
                notifySignup()
                alert()
            })
            .catch((error) => notifyError())
    }

    const userLogin = (email, password) => {
        setLoader(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const currentUser = userCredential.user
                notifyLogin()
            })
            .catch((error) => notifyError())
    }
    const googleSignin = () => {
        setLoader(true)
        signInWithPopup(auth, googleProvider)
            .then((userCredential) => {
                const currentUser = userCredential.user
                notifygoogle()

            })
            .catch(() => notifyError())
    }


    const logout = () => {
        signOut(auth)
            .then(() => {
                notifyLogout()
            })
            .catch(() => notifyError())
    }

    useEffect(() => {
        const usubscriber = onAuthStateChanged(auth, (presentUser) => {
            setUser(presentUser)
            setLoader(false)
        })
        return () => usubscriber()
    }, [])



    const authInfo = { user, loader, createUser, userLogin, googleSignin, logout }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default UserContext;