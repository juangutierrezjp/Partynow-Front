import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Tickets1, Tickets2 } from '../Hardcoded';
import Ticket from './Ticket';
import { Octicons } from '@expo/vector-icons';


const TicketContainer = ()=>{
const [refreshing, setRefreshing] = useState(false);
const [data, setData] = useState([]);
const [Exist, setExist] = useState(false);

const handleRefresh = () => {
    setRefreshing(true);
    if (data.length != 0 ){
        setExist(true)
    }

    // Simularemos una solicitud con un retraso de 2 segundos.
    setTimeout(() => { 
      setData(Tickets1);
      setRefreshing(false);
    }, 2000);
  }

  useEffect(() => {
    // Cuando el componente se monta, realiza una actualización automática.
    setRefreshing(true);
    handleRefresh();
  }, []); // El array vacío asegura que esto solo se ejecute una vez al montar el componente.

  //si no hay nada en la lista


    return(
        <>
        <ScrollView refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      }
    >
    {refreshing &&  data.length === 0 && (
        <View style={{  justifyContent: 'center', alignItems: 'center', width:"100%"}}>
          
            <Ticket loading={true}/>
            <Ticket loading={true}/>
            <Ticket loading={true}/>
            <Ticket loading={true}/>
            <Ticket loading={true}/>
            <Ticket loading={true}/>
            <Ticket loading={true}/>



          
        </View>
      )}
            {!refreshing && data.length === 0  && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:"65%" }}>
          <Text style={{textAlign: 'center', fontSize:25, color:"grey", marginBottom:10}}>Aun no compraste entradas</Text>
          <Octicons name="alert" size={50} color="grey" />
        </View>
      )}

      { data.length != 0 && (
                <View>
                <TouchableOpacity onPress={()=>{setData([])}}>
            <Text  style={{textAlign: 'center', fontSize:15, color:"grey", marginBottom:10}}>
             click to kill tickets
            </Text>
                </TouchableOpacity>
                <View>
                {data.map((element)=>{
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
                    </View>
                    </View>
          )}


        </ScrollView>
        </>
    )
}

export default TicketContainer