import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Tags = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={
        {
          //   padding: 10,
        }
      }
    >
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
    </ScrollView>
  );
};

const Tag = () => (
  <TouchableOpacity style={{ marginVertical: 20 }}>
    <Text style={styles.tag}>Gaming</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  tag: {
    padding: 10,
    backgroundColor: `#fff`,
    color: `#000`,
    borderRadius: 20,
    marginRight: 10,
    fontSize: 16,
    //height: 60,
  },
});

export default Tags;
