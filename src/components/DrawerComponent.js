import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const DrawerComponent = ({ navigation }) => {
  const [routes, setRoutes] = useState([
    {
      name: "Index",
      icon: "ios-home",
    },
    {
      name: "Profile",
      icon: "ios-contact",
    },
  ]);

  //helper function for flatlist
  const Item = ({ item, navigate }) => {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => navigate(item.name)}
      >
        <Ionicons name={item.icon} size={32} />
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* <Image
        source={require("./assets/profile.jpg")}
        style={styles.profileImg}
      /> */}
      <Text style={styles.profileImg}>Img Display.</Text>
      <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 10 }}>
        User Name
      </Text>
      <Text style={{ color: "gray", marginBottom: 10 }}>email address</Text>
      <View style={styles.drawerDivider}></View>
      <FlatList
        style={{ width: "100%", marginLeft: 30 }}
        data={routes}
        renderItem={({ item }) => (
          <Item item={item} navigate={navigation.navigate} />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 40,
    alignItems: "center",
    flex: 1,
  },
  listItem: {
    height: 60,
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    marginLeft: 20,
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 20,
  },
  drawerDivider: {
    height: 1,
    width: "100%",
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
});

export default DrawerComponent;
