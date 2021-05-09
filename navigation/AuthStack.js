import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "../screens/Login"
import ForgetPass from "../screens/Mailverification"
import ForgetPassSucc from "../screens/MailVerificationMessage"


const stack = createStackNavigator();

const AuthStack = () => {

  return (

      <stack.Navigator initialRouteName="login" headerMode="none">
         <stack.Screen name="login" component={Login}/> 
         <stack.Screen name="forget" component={ForgetPass}/> 
         <stack.Screen name="forgetPassSucc" component={ForgetPassSucc}/> 
      </stack.Navigator>
        
  );

}

export default AuthStack