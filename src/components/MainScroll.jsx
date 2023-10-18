import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Tickets1, Tickets2, Locals1 } from '../Hardcoded';
import Ticket from './Ticket';
import HomeButtons from './HomeButtons';
import { HomeButtonsDataset } from '../Hardcoded';
import { Octicons } from '@expo/vector-icons';
import DataDisplays from './DataDisplays';
import ForYou from './ForYou';


const MainScroll = ()=>{
const [refreshing, setRefreshing] = useState(false);
const [data, setData] = useState([]);
const [monted, setMonted] = useState(false);
const [date, setDate] = useState("")
const [time, setTime] = useState("")


const getCurrentTime = () => {
    const currentDateTime = new Date();
    const options = { hour12: false };
    const currentDate = currentDateTime.toLocaleDateString('es-ES', options);
    const currentTime = currentDateTime.toLocaleTimeString('es-ES', options);
    setDate(currentDate)
    setTime(currentTime)
  };

const handleRefresh = () => {
    setRefreshing(true);
    getCurrentTime()
    // Simularemos una solicitud con un retraso de 2 segundos.
    setTimeout(() => { 
      setData(Locals1);
      setRefreshing(false);
    }, 2000);
  }

  useEffect(() => {
    // Cuando el componente se monta, realiza una actualización automática.
    setRefreshing(true);
    handleRefresh();
    setMonted(true)
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
      
    {refreshing &&  data.length === 0 && ( //cuando se está cargando por primera vez
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
            {!refreshing && data.length === 0  && ( //cuando no hay datos
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:"65%" }}>
          <Text style={{textAlign: 'center', fontSize:25, color:"grey", marginBottom:10}}>{monted?"Aun no compraste entradas":null}</Text>
          <Octicons name="alert" size={50} color="grey" />
        </View>
      )}

      { data.length != 0 && ( //cuando hay datos
                <View>
                <TouchableOpacity onPress={()=>{setData([])}}>
            <Text  style={{textAlign: 'center', fontSize:15, color:"grey", marginBottom:10}}>
             click to response error
            </Text>
                </TouchableOpacity>
                <View>
                <HomeButtons local={HomeButtonsDataset[0]} events={HomeButtonsDataset[1]} organizers={HomeButtonsDataset[2]} explore={HomeButtonsDataset[3]} descriptions={HomeButtonsDataset[4]} />
                </View>
                <View>
                    <ForYou data={data} time={time} date={date}/>
                </View>
                    </View>
          )}
        </ScrollView>
        </>
    )
}

export default MainScroll