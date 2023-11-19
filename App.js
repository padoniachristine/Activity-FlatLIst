import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { users } from "./User";
import { TouchableOpacity } from "react-native-web";


export default function App() {
  const showFullname = (users) => {
    alert(users)
  };

  return (
    <View style = {styles.container}>
      <ScrollView>
      <View style = {styles.content}>
        <FlatList
          data = {users}
          renderItem = {({item}) => (
            <View style = {styles.row}>
              <View style = {styles.initial}>
                <Text style = {styles.initialText}>
                  {item.name.lastname.charAt(0).toUpperCase()}
                  {item.name.firstname.charAt(0).toUpperCase()}
                </Text>
              </View>
              <View style = {styles.details}>
                <Text style = {styles.name}>
                  {item.name.lastname}, {item.name.firstname}
                  {item.name.middlename ? ` ${item.name.middlename}.` : ""}
                </Text>
                <Text style = {styles.address}>{item.address}</Text>
              </View>
              <TouchableOpacity onPress = {() => showFullname(`${'Name: '}${item.name.firstname}${' '}${item.name.lastname}${'\n'}${'Nickname: '}${item.nickname}${'\n'}${'Address: '}${item.address}${'\n'}${'Course and Year: '}${item.courseAndYear}`)}>
              <Icon name = "dots-three-horizontal" size={20} color="black" />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      </ScrollView>
      <StatusBar style = "auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  content: {
    justifyContent: "flex-end",
  },
  name: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
  address: {
    color: "black",
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  initial: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#56b39d",
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  initialText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
});
