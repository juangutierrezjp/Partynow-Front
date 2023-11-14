import DataDisplays from "./DataDisplays";
import { StyleSheet } from "react-native";
import { View, Text, FlatList } from "react-native";

const ForYou = ({ data, date, time }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.Titles}>Boliches Cercanos</Text>
      <View style={styles.container}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.localId}
          renderItem={({ item }) => (
            <View style={{ marginRight: 20 }}>
              <DataDisplays
                type={item.type}
                width={250}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Titles: {
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 30,
    color: "#454545",
  },
});

export default ForYou;
