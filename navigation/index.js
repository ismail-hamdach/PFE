import React from 'react';
import { AuthProvider } from '../component/AuthProvider'
import Rootes from './Rootes'

const index = () => {
  
  return (
    <AuthProvider>
        <Rootes/>
    </AuthProvider>
  );

}

export default index;