import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { UserObj } from "../widgets/consdata";
import SearchBar from "./widgets/SearchBar";
import ExpFlatList from "./widgets/ExpSectionList";
import ExpSectionList from "./widgets/ExpSectionList";




export class MyFriends extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar hidden={false} style="light"/>
                <View style={styles.header}>
                    <SearchBar/>
                </View>
                <View style={styles.body}>
                    <ExpSectionList/>
                </View>
            </SafeAreaView>
        )
    }
}

export default MyFriends;


const styles = StyleSheet.create({
    container: {flex:1, backgroundColor:"purple"},
    header: {flex:1, justifyContent:"center", paddingHorizontal:10, backgroundColor:"purple"},
    body:{flex:10, backgroundColor:"purple"}
});