import React from "react";
import { View, Text } from "react-native";


function Bicycle() {
    return (
        <View>
            <Text>Hi, I'm a Bicycle</Text>
            <TakeARide/>
            {Place2Go()}
        </View>
    );
}


export default Bicycle;

const TakeARide = () => {
    return <Text>Let's go riding with me</Text>
};

function Place2Go(){
    return <Text>We're going to south west now, come on.</Text>
}