import React from 'react';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Tickets1 } from '../Hardcoded';


const TicketContainer = ()=>{
const[list,setList]=useState("Loading")

if(list==="Loading"){
    return(
        <View>
            <TouchableOpacity onPress={()=>{setList(Tickets1)}}>
        <Text>
        Loading View. click to load hardcoded tickets
        </Text>
            </TouchableOpacity>
        
    </View>
    )
}

    return(
        <>
        <ScrollView>
            {list.map((element)=>{
                return(
                    <View key={element.id}>
                    <Text key={element.name}>
                    {element.name}
                    </Text>
                    <Text>
                    {element.date}
                    </Text>
                    <Text >
                    {element.time}
                    </Text>
                    </View>
                    
                )
            })}

        </ScrollView>
        </>
    )
}

export default TicketContainer