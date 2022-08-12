import React from "react";
import {
  View,
  Text,
  Linking,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Alert,
  alert,
} from "react-native";

const Notes=()=> {
  return (
    <ImageBackground style={sty.img} source={require("./images/homebgpic.jpg")}>

<Text style={sty.txt2}>
        Choose your Semester
      </Text>

      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity  onPress={() =>
              Linking.openURL(
                "https://drive.google.com/drive/folders/1MlcQiYUeQ4o5oLp6ME-Ai85mzjbU0KjS"
              )
            }>
            <Text style={sty.txt}>
                Semester 1
            </Text>
            </TouchableOpacity>
      </View>


      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity  onPress={() =>
              Linking.openURL(
                "https://drive.google.com/drive/folders/1uBj2UaCD0hLa30FL6rFPZfCRX2LOBoio"
              )
            }>
            <Text style={sty.txt}>
                Semester 2
            </Text>
        </TouchableOpacity>
      </View>


      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity  onPress={() =>
              Linking.openURL(
                "https://drive.google.com/drive/folders/1HNtJ5QNEUeKD85gftcTHfHw4mtL56Pi-"
              )
            }>
            <Text style={sty.txt}>
                Semester 3
            </Text>
        </TouchableOpacity>
      </View>


      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity  onPress={() =>
              Linking.openURL(
                "https://drive.google.com/drive/folders/1XMlZVu6i0-VAsUK0HBIQhL_lxMxhwQHm"
              )
            }>
            <Text style={sty.txt}>
                Semester 4
            </Text>
        </TouchableOpacity>
      </View>


      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity onPress={() =>
              Linking.openURL(
                "https://drive.google.com/drive/folders/11fYk_afThcHnt3KO-dVodYLpPjL158Nk"
              )
            }>
            <Text style={sty.txt}>
                Semester 5
            </Text>
        </TouchableOpacity>
      </View>


      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity onPress={() =>
              Linking.openURL(
                "https://drive.google.com/drive/folders/19IDMdAYFZB0oqEOO9QtRE_f4yPeGMbwX"
              )
            }>
            <Text style={sty.txt}>
                Semester 6
            </Text>
        </TouchableOpacity>
      </View>


      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity  onPress={() =>{
            Alert.alert("No Data Available,We are still working on it");
        }
            }>
            <Text style={sty.txt}>
                Semester 7
            </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity onPress={() =>{
            Alert.alert("No Data Avaibale We are still working on it");
          }
            }>
            <Text style={sty.txt}>
                Semester 8
            </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
export default Notes;

const sty = StyleSheet.create({
  img: {
    flex: 1,
    height: 700,
    resizeMode: "contain",
  },
  txt:{
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 18,
    marginTop: 5,
    paddingVertical:12,
    paddingHorizontal:30,
    color: "#ffcc99",
    backgroundColor: "rgba(0,0,0, 0.7)",
    marginBottom:5,
  },

  txt2:{
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 10,
    marginTop: 5,
    paddingVertical:10,
    paddingHorizontal:10,
   
  }
});
