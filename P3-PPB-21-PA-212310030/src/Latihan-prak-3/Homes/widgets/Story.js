import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const UserItem = ({item}) => {
    return (
        <View>
            <Image source={(item.gender === "M") ? require("../../../../assets/boy.png") : require("../../../../assets/girl.png")}
            style={{...Styles.img, borderWidth: ((item.story) ? 2 : 0) }} />
        <Text style={Styles.storyName}>{item.name}</Text> 
        </View>
    );
}

const Story = ({ UserObj }) => {
    return (
      <View style={{ backgroundColor: "purple"}}>
        <FlatList horizontal={true} data={UserObj} renderItem={({item}) => <UserItem item={item}/> } />
      </View>
    );
  };


const Styles = StyleSheet.create({
    img: {

        width: 60,
        height: 60,
        borderColor:"lightgreen",
        borderRadius: 100,
        
    },

    storyName: {
        textAlign: "center",
        fontSize: 13,
        color: "white"
    },
});

export default Story;
