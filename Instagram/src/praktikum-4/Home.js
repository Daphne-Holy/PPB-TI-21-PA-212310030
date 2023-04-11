import React, { Component } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import Header from './widgets/header';
import { ScrollView } from 'react-native';
import { UserObj } from './widgets/consdata';
import Story from './widgets/Story';
import Feeds from './widgets/Feeds';

class Home extends Component {
    render() {
        return (
            
            <SafeAreaView style={{ flex:1, backgroundColor: "purple"}}>
                
                <Header/>

                <View style={{ flex: 10, backgroundColor:"blue"}}>
                    <StatusBar hidden={true}/>
                    <ScrollView style={{ flex: 1}}>
                        <Story UserObj={UserObj}/>
                        <Feeds/>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

export default Home;
