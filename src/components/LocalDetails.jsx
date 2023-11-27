import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { compareHorario } from '../utilities';
import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'

const LocalDetails=({data})=>{
    const route = useRoute();
    const { params } = route;
    const { date, time } = params;
    const [status,setStatus]=useState("")
    useEffect(() => {
        if(data.type==="local"){
          if(date===data.nextDate){
            if (compareHorario(data.NextTime, time)===true){
              setStatus("open")
            }
            if(compareHorario(data.NextTime, time)==="after"){
              setStatus("closed")
            }if(compareHorario(data.NextTime, time)==="before"){
              setStatus("today")
            }
          }else{
            if(!data.nextDate){
              setStatus("suspended")
            }
            setStatus("closed")
          }
        }
      }, [time]);

    return (
        <View>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            {/* Imagen de perfil */}
            <Image
              source={{ uri:  `${data.ProfilePhoto}` }}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.upperRight}>
              {/* Espacio superior vacío */}
            </View>
            <View style={styles.lowerRight}>
              {/* Detalles del local */}
              <Text></Text>
              <View style={styles.rowContainer}>
            <Text style={styles.nombreLocal}>{data.name}</Text>
            {data.popular && (
              <View style={styles.estadoAbiertoContainer}>
                <Text style={styles.estadoAbiertoText}>Popular</Text>
              </View>
            )}
          </View>
          <View style={{...styles.rowContainer, heigh:20}}>
              <Text>de</Text>
              <Text style={{ marginLeft:5, fontWeight: 'bold',}}>{data.Organizer}</Text>
              <MaterialIcons name="verified" size={19} color="#1ab9d5" />
          </View>
          <View style={{...styles.rowContainer, heigh:20, marginLeft:-4}}>
          <EvilIcons name="location" size={20} color="black" />
              <Text>Boliche</Text>
          </View>
              <View>
              {status==="open" && 
                    <View style={{flexDirection:"row"}}>
                    <Ionicons name="md-time-outline" size={15} color="#12b400" />
                    <Text style={{color:"#12b400", fontSize:12}}>Abierto </Text>
                    </View>
                    }
                    {status==="today" &&
                    <View style={{flexDirection:"row"}}>
                    <Ionicons name="md-time-outline" size={15} color="#12b400" />
                    <Text style={{color:"#12b400", fontSize:12}}>Abre Hoy </Text>
                    </View>}
                    {status==="closed" && 
                    <View style={{flexDirection:"row"}}>
                    <Ionicons name="md-time-outline" size={15} color="#777777" />
                    <Text style={{color:"#777777", fontSize:12}}>Abre el {data.nextDate} </Text>
                    </View>
                    }
              </View>
              
            </View>
          </View>
        </View>

        
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'row',
      },
      leftContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      rightContainer: {
        flex: 2,
        flexDirection: 'column',
        
      },
      upperRight: {
        flex: 1,
        // Espacio superior vacío
      },
      lowerRight: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
      },
      profileImage: {
        width: 130,
        height: 130,
        borderRadius: 100,
        borderWidth: 2, // Ancho del borde
        borderColor: 'white', // Color del borde

      },
      rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      nombreLocal: {
        marginRight: 10,
        fontSize:25,
        
      },
      estadoAbiertoContainer: {
        borderWidth: 2, // Ancho del borde
        borderColor: 'green', // Color del borde
        borderRadius: 10, // Bordes redondeados
        paddingVertical: 2,
        paddingHorizontal: 8,
        backgroundColor: 'transparent', // Sin relleno
      },
      estadoAbiertoText: {
        color: 'green',
      },
    });
export default LocalDetails
