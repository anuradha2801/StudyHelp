/*import 'react-native-gesture-handler';
import React from 'react';
import {View,Text,ImageBackground,StyleSheet} from 'react-native'
   
  

const Home=()=>{
  return(
    <ImageBackground style={style1.bg} source={require('./images/pic.jpg')}>
    <View>
   <Text style={[style1.Text1]}>
     Welcome to Study Help!! 
   </Text>
 
   <Text style={style1.Text2}>
     We're driven to make the "Student Study Life" Easier..
  </Text>
     <Text style={style1.Text2}>
     Get All the Notes, Previous Year Question Papers, and Guidence of Alumini placed at Top MNC's.... All at one place......
 
   </Text>
   </View>
   </ImageBackground>
  )
}
export default Home;

const style1 = StyleSheet.create({
  Text1: {
    fontSize: 30,
    fontWeight: "bold",
    padding:5,
    marginTop:40,
    color:'white'
  },
  bg:{
    resizeMode: 'contain',
    alignItems:'center',
   margin:2,
    height:700, 
  },
  Text2:{
    fontSize: 20,
    padding:5,
    marginTop:20,
    color:'white'
  }
})
*/
import "react-native-gesture-handler";
import React from "react";
import {
  TouchableOpacity,
  Text,
  ImageBackground,
  StyleSheet,
  View,
  ScrollView
} from "react-native";

const Home = () => {
  return (
    <ImageBackground style={style1.bg} source={require("./images/pic.jpg")}>
      <ScrollView style={{ flex: 1 }}>
        <View>
          <Text style={[style1.Text1]}>Welcome to Study Help!!</Text>

          <Text style={style1.Text2}>
            We're driven to make the "Student Study Life" Easier..
          </Text>
          <Text style={style1.Text2}>
            Get All the Notes, Previous Year Question Papers, and Guidence of
            Alumini placed at Top MNC's.... All at one place......
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity>
            <Text style={style1.Opac2}>Notes</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity>
            <Text style={style1.Opac1}>ESE Question Papers</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity>
            <Text style={style1.Opac1}>Alumini Experience</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </ImageBackground>
  );  
};
export default Home;

const style1 = StyleSheet.create({
  Text1: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 5,
    marginTop: 40,
    color: "white",
  },
  bg: {
    resizeMode: "contain",
    alignItems: "center",
    margin: 0.5,
    height: 708,
  },
  Text2: {
    fontSize: 15,
    padding: 5,
    marginTop: 20,
    color: "white",
  },
  Opac1: {
    textAlign: "center",
    fontSize: 20,
    //fontWeight: "bold",
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
    color: "#ffcc99",
    backgroundColor: "rgba(0,0,0, 0.8)",
  },
  Opac2: {
    textAlign: "center",
    fontSize: 20,
    //fontWeight: "bold",
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:30,
    paddingRight:50,
    borderRadius: 10,
    marginTop: 60,
    color: "#ffcc99",
    backgroundColor: "rgba(0,0,0, 0.8)",
  },
});