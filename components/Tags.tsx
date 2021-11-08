import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const TAGS = [
  {
    tag: "GAMING"
  },
  {
    tag: "TRENDING"
  },
  {
    tag: "JAVASCRIPT"
  },
  {
    tag: "PYTHON"
  },
  {
    tag: "MrWhoseTheBoss"
  },
  {
    tag: "COMEDY"
  }
]

const Tags = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={
        {
            padding: 10,
            height: 150
        }
      }
    >
      {TAGS.map((tags, index) => (
        <View key={index} style={{
          marginVertical: 20,
        }}>
          <Text style={styles.tag}>{tags.tag}</Text>
        </View>
      ))}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tag: {
    padding: 10,
    backgroundColor: `#fff`,
    color: `#000`,
    borderRadius: 20,
    marginRight: 10,
    fontSize: 16,
    fontWeight: "bold"
    //height: 60,
  },
});

export default Tags;