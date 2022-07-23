import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {View,Text} from 'react-native';
import Home from "./Components/Home"
const Drawer=createDrawerNavigator();

function HomeScreen(){
  return(
    <View>
        <Home/>
    </View>
  )
}


function PreviousYearQp(){
  return(
    <View>
      <Text>
        About Screen
      </Text>
    </View>
  )
}


function Notes(){
  return(
    <View>
      <Text>
        About Screen
      </Text>
    </View>
  )
}


function Experiences(){
  return(
    <View>
      <Text>
        About Screen
      </Text>
    </View>
  )
}

function ContactScreen(){
  return(
    <View>
      <Text>
        contact Screen
      </Text>
    </View>
  )
}
const App=()=>{
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={HomeScreen}/>
        <Drawer.Screen name='Previous Year Q/P' component={PreviousYearQp}/>
        <Drawer.Screen name='Notes' component={Notes}/>
        <Drawer.Screen name='Experiences' component={Experiences}/>
        <Drawer.Screen name='Contact' component={ContactScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default App;
