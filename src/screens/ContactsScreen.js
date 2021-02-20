import React, { Component } from 'react';
import {View, FlatList, Text, ScrollView} from 'react-native'
import Contacts from '../components/Contacts';

export default function ContactsScreen() {
    const contacts = [
        {name: 'argen rogben', number: "055-3677-341"},
        {name: 'david rogben', number: "055-3677-343"},
        {name: 'awal rogben', number: "055-3677-345"},
        {name: 'zak rogben', number: "055-3677-347"},
        {name: 'adjoa rogben', number: "055-3677-349"},
        {name: 'samual rogben', number: "055-3678-346"},
        {name: 'godwin rogben', number: "055-3671-346"},
        {name: 'naggai rogben', number: "055-3673-346"},
        {name: 'justice rogben', number: "055-3672-346"},
        
    ]
    return (
        <View style={{marginVertical: 20}}>
            <FlatList 
                data = {contacts}
                renderItem = {({item})=>{return <Contacts name ={item.name} phone={item.number}/>}}
                keyExtractor = {(item)=>item.number}
            />
        </View>
    )
}