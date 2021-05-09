import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import firebase from "firebase/app"
import 'firebase/app'

import { AuthContext } from '../component/AuthProvider'
import AuthStack from '../navigation/AuthStack'
import AppStack from '../navigation/appStack'




const Rootes = () => {
  
  const {user,setUser} = useContext(AuthContext);

  const onAuthStateChanged = (user) => {
      setUser(user);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;                                    
  }, [user])

  return (
   
    <NavigationContainer>
    
        { user ? <AppStack/> : <AuthStack/> }

    </NavigationContainer>
   
  );
}

export default Rootes