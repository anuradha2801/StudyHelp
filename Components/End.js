import React from "react";
import {
  View,
  Text,
  Linking,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

function End() {
  return (
    <ImageBackground style={sty.img} source={require("./images/notesbg.jpg")}>
      <Text style={sty.txt2}>
        Choose your Semester
      </Text>
      
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity  onPress={() =>
              Linking.openURL(
                "https://drive.google.com/drive/folders/18eDvLMHdlah2BVRr36hMtB9etEHZpDrv"
              )
            }>
            <Text style={sty.txt1}>
                Semester 1
            </Text>
        </TouchableOpacity>
      </View>

      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity  onPress={() =>
              Linking.openURL(
                "https://drive.google.com/drive/folders/18Scv0adWzONtunQzOyNKn84Ykm0nbGTh"
              )
            }>
            <Text style={sty.txt1}>
                Semester 2
            </Text>
        </TouchableOpacity>
      </View>


      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity  onPress={() =>
              Linking.openURL(
                "https://drive.google.com/drive/folders/1GveLPWIQuxgiSLoyTNq2nmrsFytY8JWK"
              )
            }>
            <Text style={sty.txt1}>
                Semester 3
            </Text>
        </TouchableOpacity>
      </View>


      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity  onPress={() =>
              Linking.openURL(
                "https://drive.google.com/drive/folders/1I3WRPr1-_cBMgv8hMXKZDepOYyBzxvG-"
              )
            }>
            <Text style={sty.txt1}>
                Semester 4
            </Text>
        </TouchableOpacity>
      </View>


      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity  onPress={() =>
              Linking.openURL(
                "https://drive.google.com/drive/folders/1HgVay7cATCAW2PBy6rq4UQtmGyP_5-F4"
              )
            }>
            <Text style={sty.txt1}>
                Semester 5
            </Text>
        </TouchableOpacity>
      </View>


      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity  onPress={() =>
              Linking.openURL(
                "https://drive.google.com/drive/folders/1HzYvbou7q5sfUsu13bVDg5bVngfXcibq"
              )
            }>
            <Text style={sty.txt1}>
                Semester 6
            </Text>
        </TouchableOpacity>
      </View>


      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity  onPress={() =>
              Linking.openURL(
                "https://drive.google.com/drive/folders/1I51h4OhAaS-xxAQfO8DZ4v0lALCqd0jD"
              )
            }>
            <Text style={sty.txt1}>
                Semester 7
            </Text>
        </TouchableOpacity>
      </View>


      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity  onPress={() =>
              Linking.openURL(
                "https://drive.google.com/drive/folders/1IA6pu84m00rqJVm2lm2XsW1IIaq5FF2B"
              )
            }>
            <Text style={sty.txt1}>
                Semester 8
            </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
export default End;

const sty = StyleSheet.create({
  img: {
    flex: 1,
    height: 700,
    resizeMode: "contain",
  },
  txt1:{
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 18,
    marginTop: 5,
    paddingVertical:12,
    paddingHorizontal:20,
    color: "#ffcc99",
    backgroundColor: "rgba(0,0,0, 0.7)",
  },
  txt2:{
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
   
    marginTop: 5,
    paddingVertical:12,
    paddingHorizontal:20,
   
  }

});