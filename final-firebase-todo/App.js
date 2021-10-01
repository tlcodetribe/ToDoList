import React, {useState} from 'react';
import { Text, View } from 'react-native';
import Constants from 'expo-constants';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'

import Home from './screens/Home'
import ToDoList from './screens/ToDoList'

import Colors from './Constants/colors';
import * as firebase from 'firebase'

const Stack= createStackNavigator()

const AuthStack = createStackNavigator()

const AuthScreens = () => {
  return (
    <AuthStack.Navigator> 
      <AuthStack.Screen name= 'LogIn' component= {Home} />
    </AuthStack.Navigator>
  )
}   

const Screens = () => {
  return (
    <Stack.Navigator >
  
    <Stack.Screen name= 'Home' component= {Home} />
    

    <Stack.Screen 
      name= 'ToDoList' 
      component= {ToDoList}
      options= {({route}) => {
        
        return ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: route.params.color
          },

          headerTintColor: 'white'
        })
        
      }}
      />
    

  </Stack.Navigator>
  )
}



export default function App() {
  const [isAuth, setIsAuth] = useState(true)
  return (
<NavigationContainer>

   {
     isAuth ? 
       <Screens /> 
       
       :
       <AuthScreens />
   }

</NavigationContainer>
  );
}

const firebaseConfig = {
  apiKey: "AIzaSyCa37ztiQC0r-v8pOFydxuCUwTAVBEEBzA",
  authDomain: "firetodo-e8560.firebaseapp.com",
  projectId: "firetodo-e8560",
  storageBucket: "firetodo-e8560.appspot.com",
  messagingSenderId: "780750514424",
  appId: "1:780750514424:web:6eef857db1b00080e1330d"
};

firebase.initializeApp =(firebaseConfig)


