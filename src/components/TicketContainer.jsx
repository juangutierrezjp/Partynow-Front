import React from 'react';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Tickets1 } from '../Hardcoded';
import Ticket from './Ticket';


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
                    
                    <Ticket style={{marginTop:200}}
                    key={element.eventId}
                    name={element.name} 
                    photo={element.photo} 
                    date={element.date} 
                    time={element.time} 
                    eventId={element.eventId}
                    organizer={element.Organizer}
                    verified={element.Verified}
                    type={element.type}
                    />
                )
            })}

        </ScrollView>
        </>
    )
}

export default TicketContainer