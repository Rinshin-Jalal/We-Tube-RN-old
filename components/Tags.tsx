import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Divider } from "react-native-elements";

const TAGS = [
  "New",
  "Trending",
  "MrWhoseTheBoss",
  "Windows vs Linux",
  "React Native",
  "Linux Distro",
  "Discord",
  "React",
  "Django",
  "Mango",
];

const Tags = () => {
  const [activeTag, setActiveTag] = React.useState("New");

  return (

    <View>
      <ScrollView horizontal contentContainerStyle={{ padding: 10 }}>
        {TAGS.map((tag, index) => (
          <Tag
            tag={tag}
            activeTag={activeTag}
            setActiveTag={setActiveTag}
            key={index}
          />
        ))}
      </ScrollView>
    </View>
  );
};

interface TagProps {
  activeTag: string;
  setActiveTag: React.Dispatch<React.SetStateAction<string>>;
  tag: string;
}

const Tag: React.FC<TagProps> = ({ activeTag, tag, setActiveTag }) => {
  return (
    <TouchableOpacity
      style={[styles.tagWrapper, activeTag === tag && styles.tagWrapperActive]}
      onPress={() => setActiveTag(tag)}
    >
      <Text style={[styles.tag, activeTag === tag && styles.tagActive]}>
        {tag}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tagWrapper: {
    marginRight: 10,
    backgroundColor: "#000",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    justifyContent: "center",
  },
  tagWrapperActive: {
    backgroundColor: "#eee",
  },
  tag: {
    color: "#eee",
    textAlign: "center",
    fontWeight: "700",
  },
  tagActive: {
    color: "#000",
  },
});

export default Tags;
