import React from "react";
import { View, Text, ScrollView } from "react-native";
import Header from "../components/Header";
import Video from "../components/Video";
import { Divider } from "react-native-elements";
import Tags from "../components/Tags";

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Divider width={1.5} orientation="horizontal" color="#555" />
      <Tags />
      <Divider width={1.5} orientation="horizontal" color="#555" />
      <ScrollView>
        <Video />
        <Video />
        <Video />
        <Video />
      </ScrollView>
    </View>
  );
};

export default Home;
