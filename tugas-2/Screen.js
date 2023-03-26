import React from "react";
import { View, SafeAreaView, StyleSheet, Image, Text } from "react-native";


const Screen = () => {
    return (
        <SafeAreaView style ={styles.container}>
            <Image source ={require('./assets/ibikNew-logo.png')} style={{width: 100, height:100}}/>
        </SafeAreaView>
    );
}




const styles = StyleSheet.create({
    container: {
        backgroundColor:"purple",
        padding:100,
        alignItems:"center",
        justifyContent: 'center',       
    }
})

export default Screen;