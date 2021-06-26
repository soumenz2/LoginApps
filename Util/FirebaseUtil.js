import React from 'react';

import auth from '@react-native-firebase/auth';
const FirebaseAuth=()=>{
    signIn = (text, password) => {
        
          return auth().signInWithEmailAndPassword(text, password);
        
      },
    signUp=(text:String,password:String)=>{
    return auth().createUserWithEmailAndPassword(text,password);
   };
    signout=()=>{
    return auth().signout();
};

    
}
export default FirebaseAuth;