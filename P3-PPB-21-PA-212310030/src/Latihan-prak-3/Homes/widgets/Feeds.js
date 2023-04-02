import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Feeds = () => {
  return (
    <View style={{ backgroundColor: "purple"}}>
      <View style={{ flexDirection:"row", alignItems:"center", padding: 10 }}>
        <Image source={require("../../../../assets/girl.png")} style={styles.avatar} />
        <Text style={styles.username}> Daphne</Text>
      </View>
      <View>
        <Image source={require("../../../../assets/feed.jpg")} style={styles.feeds}/>
      </View>
      <View style={{...styles.icon, flexDirection: "row"}}>
      <FontAwesome5 name={"heart"} color="white" size={30} />  
      
      <View style={{marginHorizontal: 10}}>
        <FontAwesome5 name={"comment"} color="white" size={30}/>
      </View>
      <FontAwesome5 name={"paper-plane"} color="white" size={30} />
      </View>
      {/* <View style={{padding: 10, alignItems:"center", flexDirection: "row"}}>
        <Image source={require("../../../../assets/boy.png")} style={styles.avatar}/>
        <Text style={styles.username}> Nagasa</Text>
      </View>
        <Image source={require("../../../../assets/feed.jpg")} style={styles.feeds}/> */}
    </View>
  );
};

const styles = StyleSheet.create ({
    avatar: {
        width: 40,
        height: 40,
        borderColor: "black",
        borderRadius: 100
      },
    username: {
        // textAlign: "center",
        color: "white",
    },
    feeds : {
        height: 500,
        width: 450,
        alignContent: "center",
    },
    icon : {
        marginHorizontal: 10,
        marginVertical: 5,
    }
})
export default Feeds;