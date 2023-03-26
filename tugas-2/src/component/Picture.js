import React from 'react';
import { Image, View } from 'react-native';



function Profile() {
    return (
        <View>
            <Img/>
        </View>
    )
}








const Img = () => {
    return (
        <View>
        <Image source={require('../component/person.png')} style={{width: 200, height: 120}}/>
        </View>
    );
};

export default Profile;
