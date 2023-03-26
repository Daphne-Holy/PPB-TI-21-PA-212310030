import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import  React, {Component} from 'react';
import Bicycle from './src/component/ItemTypograph';
import Profile from './src/component/Picture';
import Screen from './Screen';

export default function App() {
  return (
      <View style={style.container}>
      <StatusBar hidden={true}/>
      {/* <Bicycle/> */}
      {/* <Profile/> */}
      <Screen/>
      <View style={style.end}>
      
      </View>
      </View>
  );
}


const style = StyleSheet.create({

  container:{
    // flex: 1,
    // padding: 10,
    // backgroundColor:'purple',
    // alignItems: 'center',
    // justifyContent: 'center',
    // textAlign:"center",
    // marginLeft:"auto",
    // marginRight:"auto",
    // marginBottom: 300,
    // marginTop:150,
    // borderWidth:1,
    // borderRadius: 10,
    // width: 250,
    // height: 250
  },
  end: {
    // padding:300,
    // backgroundColor:'purple'
  }
})