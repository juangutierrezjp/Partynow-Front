import DataDisplays from "./DataDisplays"
import { StyleSheet } from "react-native"
import { View, Text } from "react-native"
import { Locals1 } from "../Hardcoded"

const ForYou=(data, date, time)=>{
    console.log(data.data)
    return(
        <View style={{marginLeft:15, marginTop:20}}>
            <Text style={styles.Titles}>Boliches Cercanos</Text>
            {data.data.map((elem)=>{
                return(             
                <DataDisplays type="local" width={250} height={160} size={60} props={elem} date={date} time={time}/>
                )
            })}
        </View>
    )
}

const styles=StyleSheet.create({
    Titles:{
        marginBottom:10,
        fontSize:30,
        color:"#454545"
    }
    
  });

export default ForYou