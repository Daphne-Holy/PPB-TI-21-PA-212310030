import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Button, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
// import Bicycle from './2_4a';
import Car from './2_5';


export default function App() {
  return (

    <ImageBackground source={{url: "https://www.idownloadblog.com/wp-content/uploads/2020/10/Resonance_Blue_Dark-428w-926h@3xiphone.png"}}
    resizeMode="cover"
    style={{flex: 1}}>

    <SafeAreaView>
      <ScrollView>
    <View>
      <View>
      <Text>Student ID:</Text>
      <TextInput placeholder='Enter your NPM'
      keyboardType='numeric'/>
      </View>

      <View>
        <Text>Fullname:</Text>
        <TextInput placeholder='Enter your name here'/>
      </View>

      <View>
        <Text>Address:</Text>
        <View>
          <TextInput editable multiline numberOfLines={4} maxLength={40}/>
        </View>
      </View>

      <Button title='Button form OS'/>
      <TouchableOpacity activeOpacity={0.6}>{buttonAct("Touchable Opacity")}</TouchableOpacity>

      <TouchableHighlight activeOpacity={0.6}>{buttonAct("Touchable Highlight")}</TouchableHighlight>

      <TouchableWithoutFeedback activeOpacity={0.6}>{buttonAct("Touchable Without Feedback")}</TouchableWithoutFeedback>

      <StatusBar hidden = {true} />
      <Car/>

    </View>
    </ScrollView>
    </SafeAreaView>
    </ImageBackground>
  );
}



const buttonAct =(title) => {
  return (
    <View style={{
      backgroundColor: "purple",
      borderRadius: 10,
      padding: 10,
      alignItems:"center",
      marginVertical: 5,
    }}>
      <Text style={{ color: "white"}}>{title}</Text>
    </View>
  );
};