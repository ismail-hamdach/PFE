import React, { createContext, useState } from 'react'
import firebase from 'firebase/app'
import "firebase/auth";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const firebaseConfig = {
        apiKey: "AIzaSyAkUovqA3oWXI0utHo9NNsFZ3SPNhEBWjQ",
        authDomain: "apppfe-ac485.firebaseapp.com",
        projectId: "apppfe-ac485",
        storageBucket: "apppfe-ac485.appspot.com",
        messagingSenderId: "538459165271",
        appId: "1:538459165271:web:547b4d39ea9aa7e4a24912"
      };
      //this section used to verified if the the connection with firebase is initialized or not, should initialized just one time else would throw an exception !!!!!!
      //Remember 4 days of work continued just to handel this error
      //18-21 / 02 / 2021.
      const [user, setUser] = useState(null);
      const [err, setErr] = useState(null);
      if (!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
      }
      //---------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    return (
        <AuthContext.Provider value = {{
            user, 
            setUser,
            err,
            setErr,
            login: async (email, password) => {
                try{
                    await firebase.auth().signInWithEmailAndPassword(email, password);
                    setErr("");
                }catch(e){
                    console.log(e);
                    setErr(e.message);
                }
            },
            register: async (email, password) => {
                try{
                    await firebase.auth().createUserWithEmailAndPassword(email, password);
                    
                }catch(e){
                    console.log(e);
                    
                }
            },
            logOut: async () => {
                try{
                    await firebase.auth().signOut();
                    console.log("log out");
                    setErr("");
                }catch(e){
                    console.log(e);
                }
            },
            
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext