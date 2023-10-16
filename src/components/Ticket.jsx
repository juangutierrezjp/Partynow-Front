import { useNavigation } from "@react-navigation/native";
import * as React from 'react';
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Card, Title, Paragraph, Text } from 'react-native-paper';
import { Fontisto } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'




const Ticket=({loading, name, date, time, photo, eventId, organizer, verified, type})=>{
  
  if (loading) {
    return (

    <Card style={{ marginTop: 5, marginBottom:5, width:"100%"}}>
    <Card.Cover source={{ uri:photo }} style={styles.cover}/>
        <Card.Content style={styles.content}>
          <Title style={styles.title}>
          <ShimmerPlaceHolder autoRun={true} visible={!loading} style={{ width: 150, height: 10 }}/>
      </Title>
          <Paragraph style={{color:"white"}}>
            
            <Text style={styles.subtitle}>
            <ShimmerPlaceHolder autoRun={true} visible={!loading} style={{ width: 100, height: 10 }}/>
            </Text>
            
        </Paragraph>
        <View style={styles.alts}>
        <View style={styles.description}>
          <ShimmerPlaceHolder autoRun={true} visible={!loading} style={{ width: 50, height: 10 }}/>
        </View>

        <View style={styles.description}>
        <ShimmerPlaceHolder autoRun={true} visible={!loading} style={{ width: 50, height: 10 }}/>
        </View>

        <View style={styles.description}>
        <ShimmerPlaceHolder autoRun={true} visible={!loading} style={{ width: 50, height: 10 }}/>
        </View>

        </View>
        </Card.Content>
      </Card>

    );
  } else {
  return (
    <TouchableOpacity>
    <View>
    <Card style={{ marginBottom: 5, marginTop:5, position: 'relative'}}>
    <Card.Cover source={{ uri:photo }} style={styles.cover}/>
        <Card.Content style={styles.content}>
          <Title style={styles.title}>{name}</Title>
          <Paragraph style={{color:"white"}}>
            {" de "} 
            <Text style={styles.subtitle}>
            {organizer}
            </Text>
            {verified?<MaterialIcons name="verified" size={14} color="white" />:null}
        </Paragraph>
        <View style={styles.alts}>
        <View style={styles.description}>
          <Fontisto name="date" size={15} color="#ffffff" />
          <Text>{"  "}</Text>
          <Text style={{color:"white"}}>{date}</Text>
        </View>

        <View style={styles.description}>
        <Ionicons name="md-time-outline" size={18} color="white" />
          <Text>{"  "}</Text>
          <Text style={{color:"white"}} >{time}</Text>
        </View>

        <View style={styles.description}>
        <FontAwesome5 name="ticket-alt" color="white" size={17} />
          <Text>{"  "}</Text>
          <Text style={{color:"white"}}>{type}</Text>
        </View>

        </View>
        </Card.Content>
      </Card>
    </View>
    </TouchableOpacity>
  );}
}

const styles = StyleSheet.create({
    cover: {
      width: '100%',
      height: 150,
    },

    content: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        padding: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', //este es el overlay negro porencima de las fotos
        borderRadius: 10,
      },
    title: {
      color: 'white',
      fontSize: 25,
    },
    subtitle: {
        color: 'white',
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

export default Ticket