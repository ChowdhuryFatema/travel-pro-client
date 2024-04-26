import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/cordova";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false);

    // social login provider
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    // create user 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update User Profile
    const updateUserProfile = (name, photo) => {
    
        updateProfile(auth.currentUser, {
 
             displayName: name, 
             photoURL: photo,
             
           })
 
           setUser({
             ...user,
             displayName: name, 
             photoURL: photo
           })
     }

    // sign in user 
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login 
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // gitHub login 
    const gitHubLogin = () => {
        return signInWithPopup(auth, gitHubProvider)
    }

    // log out user 
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });

        return () => unSubscribe();
    }, []);

    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        updateUserProfile,
        signInUser,
        googleLogin,
        gitHubLogin,
        logOutUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;