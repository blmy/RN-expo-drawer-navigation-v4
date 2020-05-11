import React from "react";
import { View, Text, StyleSheet } from "react-native";

import HeaderComponent from "../components/HeaderComponent";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderComponent
        name={navigation.state.routeName}
        openDrawer={navigation.openDrawer}
      />
      <Text>Profile Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
});

export default ProfileScreen;
