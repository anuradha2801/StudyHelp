import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View,Text,TouchableOpacity,ImageBackground,StyleSheet} from 'react-native';
import Home from "./Components/Home";
import Abt from './Components/Abt';
import End from './Components/End';
import Notes from './Components/Notes';
import Experiences from './Components/Experiences';

const Drawer=createDrawerNavigator();
const Stack=createNativeStackNavigator();

function HomeScreen(){
  return(
  <Home/>
  )

}

function PreviousYearQp(){
  return(
    <End/>
  )
}


function NotesScreen(){
  return(
   <Notes/>
  )
}


function ExperiencesScreen(){
  return(
    <Experiences/>
  )
}

function ContactScreen(){
  return(
    <View>
      <Abt/>
    </View>
  )
}
const App=()=>{
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={HomeScreen}/>
        <Drawer.Screen name='Previous Year Q/P' component={PreviousYearQp}/>
        <Drawer.Screen name='Notes' component={NotesScreen}/>
        <Drawer.Screen name='Experiences' component={ExperiencesScreen}/>
        <Drawer.Screen name='About Us' component={ContactScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default App;
