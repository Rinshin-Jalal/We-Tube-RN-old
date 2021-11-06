import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={{ width: 170, height: 50 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "20%",
        }}
      >
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://img.icons8.com/ios/50/ffffff/search--v1.png",
              width: 35,
              height: 35,
            }}
          />
        </TouchableOpacity>
        <Avatar
          size="small"
          rounded
          title="PP"
          onPress={() => console.log("Works!")}
          activeOpacity={0.5}
          overlayContainerStyle={{ backgroundColor: "#79a5f2" }}
          titleStyle={{ color: "black" }}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0f0f0f",
    paddingTop: 27,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
});
