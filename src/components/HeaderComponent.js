import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const HeaderComponent = ({ name, openDrawer }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.border} onPress={() => openDrawer()}>
        <Ionicons name="ios-menu" size={32} />
      </TouchableOpacity>
      <Text style={styles.border}>{name}</Text>
      <Text style={styles.border}>Add</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    //borderWidth: 1,
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  border: {
    //borderWidth: 1,
  },
});

export default HeaderComponent;
