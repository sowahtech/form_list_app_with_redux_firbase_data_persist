import React from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'
import {MaterialIcons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'

export default function Contacts({name, phone}) {
    return (
        <View style = {styles.container}>
            <Image source={require('../../assets/stud_propix.jpg')} style={styles.image} />

            <View style = {styles.infoContainer}>
                <Text style={styles.name} numberOfLines={1}>{name}</Text>
                <Text>{phone}</Text>
            </View>
            <View style={styles.icons}>
                <MaterialIcons name = "local-phone" size = {25} color="#479ef3"/>
            </View>
            <View style={styles.icons}>
                <MaterialCommunityIcons name = "message-processing" size ={25} color="#479ef3"/>
            </View>
            <View style={styles.icons}>
                <SimpleLineIcons name="options-vertical" size={25} color="#a8a8a8" /> 
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 20,
        alignItems: 'center',
        marginVertical: 15
    }, 
    image : {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    infoContainer: {
        justifyContent: "center",
        marginHorizontal: 15,
        flex: 4
    },
    name: {
        fontWeight: "bold",
        fontSize: 17
    },

    icons: {
        flex: 1
    }
});