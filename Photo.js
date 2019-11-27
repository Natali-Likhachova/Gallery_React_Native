import React from 'react';
import {Image, Text, View} from "react-native";

function Photo(props) {
    return (
        <View>
            <Image source={props.img}/>
            <Text>{props.author}</Text>
        </View>
    )
}

export default Photo


