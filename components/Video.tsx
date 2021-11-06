import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";

const Video = () => {
  return (
    <View style={{ marginBottom: 30, marginTop: 5 }}>
      <Thumbnail />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 10,
        }}
      >
        <AvatarImg />

        <TouchableOpacity style={{ paddingLeft: 10, marginTop: 10 }}>
          <Title />
          <Footer />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Thumbnail = () => (
  <TouchableOpacity>
    <Image
      source={{
        uri: "https://i.ytimg.com/vi/DPG77yaqU-k/maxresdefault.jpg",
      }}
      style={{
        aspectRatio: 16 / 9,
        borderRadius: 30,
      }}
    />
  </TouchableOpacity>
);
const Title = () => (
  <Text
    style={{
      color: "white",
      fontSize: 22,
      //   padding: 10,
    }}
  >
    Me at the zoo
  </Text>
);

// ok

const Footer = () => (
  <View>
    <Text style={{ color: "gray", fontSize: 15 }}>
      Zoo Boi &#xb7; 10M views &#xb7; 100 Years Ago
    </Text>
  </View>
);

const AvatarImg = () => (
  <Avatar
    size="medium"
    rounded
    title="ZB"
    onPress={() => console.log("Works!")}
    activeOpacity={0.5}
    overlayContainerStyle={{ backgroundColor: "#79a5f2" }}
    titleStyle={{ color: "black" }}
  />
);

export default Video;
