import React from "react";
import { View, Text, ScrollView } from "react-native";
import Header from "../components/Header";
import Video from "../components/Video";
import { Divider } from "react-native-elements";
import Tags from "../components/Tags";
import Footer from "../components/Footer";

export const VIDEOS = [
  {
    title:
      "Ultimate Tailwind CSS Tutorial // Build a Discord-inspired Animated Navbar // beutifull",
    thumbnail:
      "https://i.ytimg.com/vi/pfaSUYaSgRo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLDh4d13wNFAzn2VED5_Qi5HKuRw",
    channel: "Fireship",
    views: "2.5k",
    time: "14",
    duration: "12:56",
    profile:
      "https://yt3.ggpht.com/ytc/AKedOLTcIl6kKt3lEPJEySUf_hpHiKDKiFeo9eWPReLysQ=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    title: "Do You Remember | Puitea | Kerala Blasters",
    thumbnail:
      "https://i.ytimg.com/vi/9nxRHn0UWo0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHAzRuhWbi1uqqp-smKMLgCJXrZA",
    channel: "Kerala Blasters",
    views: "4.4k",
    time: "24",
    duration: "1:49",
    profile:
      "https://yt3.ggpht.com/ytc/AKedOLRZsM_IfLupLbK6Eym9LBawdkPNKeTQ2XIZW9eH=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    title: "What Is The BIGGEST Terminated YouTube Channel? (ANSWERED!)",
    thumbnail:
      "https://i.ytimg.com/vi/nud5zSdcxw8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzGXPmhTSIOUb_wJkHR604FqNL_w",
    channel: "Timeworks",
    views: "16k",
    time: "24",
    duration: "7:11",
    profile:
      "https://yt3.ggpht.com/ytc/AKedOLSxgm2QNqjMHxYxlsvhVi6Q4wuwX8bhWjEVE-Og_w=s68-c-k-c0x00ffffff-no-rj",
  },
];

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Divider width={1.5} orientation="horizontal" color="#555" />
      <Tags />
      <Divider width={1.5} orientation="horizontal" color="#555" />
      <ScrollView>
        {VIDEOS.map((video, index) => (
          <View key={index}>
            <Video video={video} />
          </View>
        ))}
      </ScrollView>

      <Divider width={1.5} orientation="horizontal" color="#555" />
      <Footer />
    </View>
  );
};

export default Home;
