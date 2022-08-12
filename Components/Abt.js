import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  StyleSheet,
  ScrollView
} from "react-native";

const Abt=()=> {
  return (
    <ScrollView>
      <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center",margin:10}}>Contact Us For Any Doubts and Queries!!</Text>
      <View style={{borderWidth:5,borderColor:"grey",margin:13}}>
        <View style={st.imgAlgn}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/anuradha-singh-22a534212/"
              )
            }
          >
            <Image style={st.img} source={require("./images/woman.png")} />
          </TouchableOpacity>
        </View>
        <View style={st.itmcentr}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/anuradha-singh-22a534212/"
              )
            }
          >
            <Text style={st.txtdec}>Name: 
            <Text>Anuradha singh</Text></Text>
            <Text style={st.txtdec}>Phone no: 9302063360</Text>
          </TouchableOpacity>
      </View>
      </View>
      

      <View style={{borderWidth:5,borderColor:"grey",margin:13}}>
       <View style={st.imgAlgn}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/akshat-dubey-53219b211/"

              )
            }
          >
            <Image style={st.img} source={require("./images/man.png")} />
          </TouchableOpacity>
        </View>
        <View style={st.itmcentr}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/akshat-dubey-53219b211/"
              )
            }
          >
            <Text style={st.txtdec}>Name: Akshat Dubey</Text>
            <Text style={st.txtdec}>Phone no: 9302063360</Text>
          </TouchableOpacity>
      </View>
      </View>



      <View style={{ flex: 1 , justifyContent:'space-evenly',alignItems:"center"}}>
        <Text style={{fontSize:15,textAlign:'center',fontWeight:"bold",marginTop:10}}>We're driven to make the "Student Study Life" Easier..</Text>
        <Text style={{textAlign:'center',fontSize:15,fontWeight:"bold",margin:10}}>
          We are here to provide you the best Notes , Previous Year paper and
          Experience of Seniors to excel in your field.
        </Text>
      </View>
    </ScrollView>
  );
};
export default Abt;

const st = StyleSheet.create({
  img: {
   // flex: 1,
    height: 200,
    width: 200,
    resizeMode: "contain",

  },
  imgAlgn: {
   // flex: 1,
    justifyContent: "center",
    alignItems: "center",
   // backgroundColor: "#fdf5e6",
    height:300,
  
  },
  itmcentr: {
  //  flex: 1,
    justifyContent: "center",
    alignItems: "center",
   backgroundColor: "rgba(0,0,0, 0.7)",
  },
  txtdec: {
    fontSize: 20,
    fontWeight: "bold",
    textDecorationStyle: "solid",
    textShadowColor: "#673ab7",
    padding: 10,
    backgroundColor: "#fdf5e6",
    borderRadius: 10,
    margin: 8,
  },
});