import * as React from 'react';
import { View, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Image } from "react-native";
import { Card, Title, Paragraph, Text } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { compareHorario } from '../utilities';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'


const DataDisplays=({loading, size, type, width, height, date, time, props})=>{
  const [status,setStatus]=useState("")
  
  useEffect(() => {
    if(type==="local"){
      if(date===props.nextDate){
        if (compareHorario(props.NextTime, time)===true){
          setStatus("open")
        }
        if(compareHorario(props.NextTime, time)==="after"){
          setStatus("closed")
        }if(compareHorario(props.NextTime, time)==="before"){
          setStatus("today")
        }
      }else{
        if(!props.nextDate){
          setStatus("suspended")
        }
        setStatus("closed")
      }
    }
  }, [time]);
    return (
        <>
        {type==="local" &&
        <TouchableWithoutFeedback>
        <Card style={{ marginBottom: 5, marginTop:5, position: 'relative', width:width, height:height}}>
        <Card.Cover source={{ uri:props.CoverPhoto }} style={{width:"100%", height:height, position:"absolute"}}/>
        <Card.Content style={{...styles.content, width:width, height:height/2, top:height/2}}>
          <View style={{flexDirection:"row", marginTop:4}}>
              <Image source={{ uri:props.ProfilePhoto }} style={{width:size, height:size, borderRadius:10, marginRight:8}}/>
              <View style={{flexDirection:"column", justifyContent: 'space-between', width:width/1.6, height:height/2.5}} >
                <Title style={{color:"#000000"}}>{props.name}</Title>
                <View style={{flexDirection:"row",alignItems: 'flex-end',alignItems:"center",justifyContent: "space-between", marginTop:-5}}>
                  <View style={{flexDirection:"row"}}>
                    <Ionicons name="location-outline" size={15} color="black" />
                    <Text style={{color:"#000000"}}>Boliche</Text>
                  </View>
                </View>
                <View style={{flexDirection:"row",alignItems: 'flex-end',alignItems:"center",justifyContent: "space-between"}}>
                  <View style={{flexDirection:"row"}}>
                    {status==="open" && 
                    <View style={{flexDirection:"row"}}>
                    <Ionicons name="md-time-outline" size={15} color="#12b400" />
                    <Text style={{color:"#12b400", fontSize:size/5}}>Abierto </Text>
                    </View>
                    }
                    {status==="today" &&
                    <View style={{flexDirection:"row"}}>
                    <Ionicons name="md-time-outline" size={15} color="#12b400" />
                    <Text style={{color:"#12b400", fontSize:size/5}}>Abre Hoy </Text>
                    </View>}
                    {status==="closed" && 
                    <View style={{flexDirection:"row"}}>
                    <Ionicons name="md-time-outline" size={15} color="#777777" />
                    <Text style={{color:"#777777", fontSize:size/5}}>Abre el {props.nextDate} </Text>
                    </View>
                    }
                  </View >
                  <View style={{flexDirection:"row"}}>
                    <Text style={{color:"#000000"}}>{props.score}</Text>
                    <AntDesign name="star" size={15} color="#ffe600" />
                  </View>
                </View>
              </View>
          </View>
            </Card.Content>
          </Card>
        </TouchableWithoutFeedback>}
        </>
      );

}

const styles = StyleSheet.create({
    cover: {
      width: '100%',
      height: 150,
    },

    content: {
      position:"absolute",
        backgroundColor:"#ffffff",
        left: 0,
        padding: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },
    title: {
      color: '#000000',
      fontSize: 10,
    },
    subtitle: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16, // Tamaño del subtítulo
        marginBottom: 8, // Espacio entre el subtítulo y el párrafo
      },
    alts:{
        marginTop:40,
        width:"100%",
        flexDirection:"row",
        alignContent:"space-between",
        alignItems:"center",
        justifyContent: "space-between",
        alignContent: "center",
        
    },
    description: {
      color: '#ffffff',
      flexDirection:"row",
    },
    text: {
        marginLeft:200,
        color: 'white',
      },
    
  });

export default DataDisplays