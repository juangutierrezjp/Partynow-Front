import DataDisplays from "./DataDisplays";
import { StyleSheet } from "react-native";
import { View, Text, FlatList } from "react-native";

const ForYou = ({format ,name, data, date, time }) => {
  return (
    
    <View style={{ marginTop: 20 }}>
      {format==="horizontal"?
      <View>
            <Text style={styles.Titles}>{name}</Text>
            <View style={styles.container}>
              <FlatList
                data={data}
                horizontal={format=="horizontal"}
                vertical={format=="vertical"}
      
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.localId}
                renderItem={({ item }) => (
                  <View 
                  style={{ marginLeft:10 }}
                  >
                    <DataDisplays
                      type={item.type}
                      width={format==="horizontal"?260:370}
                      height={160}
                      size={60}
                      props={item}
                      date={date}
                      time={time}
                    />
                  </View>
                )}
              />
            </View>
            </View>
      :
      <View style={{width:"100%", flexDirection:"column", alignItems:"center"}}>
        <Text style={styles.Titles}>{name}</Text>
        {data.map((item)=>{
          return(
            <View style={{}}>
          <DataDisplays
            type={item.type}
            width={format==="horizontal"?260:370}
            height={160}
            size={60}
            props={item}
            date={date}
            time={time}
          />
          </View>
          )
        })}
      </View>
      }

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Titles: {
    alignSelf:"flex-start",
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 25,
    color: "#454545",
  },
});
export default ForYou;