import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

interface FooterIconsProps {
  onPress?: () => any;
  image: any;
  style?: any;
  imageWithSource?: boolean;
}

const FOOTERICONS = [
  {
    image: "https://img.icons8.com/ios-glyphs/300/ffffff/home-page--v1.png",
    withSource: false,
  },
  {
    image: "https://img.icons8.com/ios-glyphs/300/ffffff/compass--v1.png",
    withSource: false,
  },
  {
    image: require("../assets/uploadImage.png"),
    withSource: true,
  },
  {
    image: "https://img.icons8.com/ios-glyphs/300/ffffff/video-playlist.png",
    withSource: false,
  },
  {
    image:
      "https://img.icons8.com/ios-glyphs/300/ffffff/filled-appointment-reminders.png",
    withSource: false,
  },
];

const Footer = () => {
  return (
    <View
      style={{
        backgroundColor: "#202225",
        padding: 10,
        height: 70,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {FOOTERICONS.map((icon, index) => (
          <FooterIcons
            image={icon.image}
            imageWithSource={icon.withSource}
            key={index}
          />
        ))}
      </View>
    </View>
  );
};

const FooterIcons: React.FC<FooterIconsProps> = ({
  image,
  style,
  onPress,
  imageWithSource,
}) => (
  <TouchableOpacity onPress={onPress}>
    {imageWithSource ? (
      <Image source={image} style={[style, styles.icons]} />
    ) : (
      <Image source={{ uri: image }} style={[style, styles.icons]} />
    )}
  </TouchableOpacity>
);

export default Footer;

const styles = StyleSheet.create({
  icons: {
    width: 35,
    height: 35,
    padding: 10,
  },
});
