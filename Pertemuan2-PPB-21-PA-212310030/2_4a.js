import React from "react";
import { View, Text } from "react-native";


function Bicycle() {
    const city = "south west";
    const peoples = [{name: "Helios", fams: "Brother"},
                    {name: "Elias", fams: "Brother"},]
    return (
        <View>
            <Text>Hi, I'm a bicycle</Text>
            <TakeARide peoples= {peoples}/>
            {Place2Go(city)}
        </View>
    );
    
}


export default Bicycle;

const TakeARide = ({peoples}) => {
    return (
    <View>
    <Text>Let's go riding with us:</Text>
    {peoples.map((v, index)=>
    <View key={index}>
        <Text>{v.name} / my {v.fams}</Text>
    </View>
        )}
    </View>
    )
};

function Place2Go(value) {
    return <Text>We're going to {value} now, come on.</Text>;
}