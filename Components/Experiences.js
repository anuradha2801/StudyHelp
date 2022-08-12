import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  StyleSheet,
  ScrollView,
} from "react-native";

const   Experiences=()=> {
  return (
   <ScrollView>
 <Text style={{fontSize:25, fontWeight:'bold',margin:10,textAlign:"center"}}>Here Is The Experience Of Top placed Alumini</Text>
    <View style={style1.viw}>
       <Image style={style1.img} 
        source={require('./images/suraksha.jpg')}/>
       <Text style={style1.txt1}>"I had started preparing for Placements from my first year", she further added,in "order to to get placed in your dream company, make yourself perfect atleast in one language, Practicing DSA and OOPs questions through various sites and solving different questions helps a lot to crack the coding round of any Company As she alse utilized her most of the time in coding and DSA practicing and successfully cracked Microsoft. </Text>
    </View>

 
   
    <View style={style1.viw}>
       <Image style={style1.img} 
        source={require('./images/shreya.jpg')}/>
       <Text style={style1.txt1}>"Shreya Gupta had her internship at Adobe through SHECODE, and according to her too...DSA and aptitude are the most important subjects which are focused during the whole selection proccess. She added knowledge OOPs, DBMS, OS, ans Networking are also the most important subjects which heplped her to clear this 4 rounds of sections for this internship" </Text>
    </View>

    <View style={style1.viw}>
       <Image style={style1.img} 
        source={require('./images/Vivek.jpg')}/>
       <Text style={style1.txt1}>"Vivek Got selected for GOOGLE SUMMER OF CODE (GSOC) in his 2nd sem, rather than DSA and OOPs, he choose the path of Open Source and contributed to various Company..He said,"One should start early contributing to their works on various companies via github and its the best way to make company's come to you by thier own to Recuite you" </Text>
    </View>



    <View style={style1.viw}>
       <Image style={style1.img} 
        source={require('./images/thekwani.jpg')}/>
       <Text style={style1.txt1}>" Practicing DSA and OOPs questions through various sites and solving different questions helps a lot to crack the coding round of any Company,DSA practicing and coding helped me alot to successfully crack Microsoft." </Text>
    </View>

    </ScrollView>



)};

export default Experiences;

const style1 = StyleSheet.create({
viw:{
flex:1,
justifyContent:"center",
alignItems:"center",
borderWidth:2,
borderColor:'grey',
margin:10,
//borderStyle:'double',
//backgroundColor: "rgba(0,0,0, 0.7)",
},

img:{
  margin:10,
  height:400,
  width:320,
  alignItems:"center",
},
txt1:{
color:"black",
fontWeight:'bold',
fontSize:15,
margin:12,
textAlign:"center"
}


})