
import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";



function Bicycle(){
    return (
        <View>

            <ItemTypograph/>
        
        </View>
    )
}


const ItemTypograph = ()=> {
    return (
      <View>
          <Text style={styles.head}>History of Bicycle</Text>
  
        <Text style={styles.paragraf}>
        A bicycle, also called a 
        <Text style={{...styles.paragraf, color:"red"}}> pedal cycle</Text>,
        <Text style={{...styles.paragraf, fontWeight:"bold"}}> bike</Text>,
        <Text style={{...styles.paragraf, fontStyle: "italic"}}> push-bike or cycle</Text>, is a human-powered or motor-powered assisted, pedal-driven, single-track vehicle, 
        </Text>
        </View>
    );
  };
  
  
  
  const styles = StyleSheet.create({
   
    container: {
      flex: 2,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:"center",
      marginLeft:"auto",
      marginRight:"auto",
      marginBottom: 300,
      marginTop:150,
      borderWidth:1,
      borderRadius: 10,
      width: 250,
      height: 250
    },
    paragraf:{
      fontSize: 18, textAlign:"justify"
    },
    head: {
      fontSize: 20,
          fontWeight: "bold",
          backgroundColor:"brown",
          color:"#fff",
          textAlign:"center",
          textDecorationLine:"underline",
          padding: 10,
          marginBottom: 10

    },
  });

  export default Bicycle;