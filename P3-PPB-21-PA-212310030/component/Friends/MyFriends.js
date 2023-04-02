import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { Users } from "../const-data/Dummy";
import SearchBar from "./widgets/SearchBar";
import ExpFlatList from "./widgets/ExpFlatList";




export class MyFriends extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar hidden={false} style="light"/>
                <View style={styles.header}>
                    <SearchBar/>
                </View>
                <View style={styles.body}>
                    <ExpFlatList/>
                </View>
            </SafeAreaView>
        )
    }
}

export default MyFriends;


const styles = StyleSheet.create({
    container: {flex:1, backgroundColor:"black"},
    header: {flex:1, justifyContent:"center", paddingHorizontal:10, backgroundColor:"black"},
    body:{flex:10, backgroundColor:"black"}
});