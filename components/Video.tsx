import React from "react";
import { View, Text, Image, TouchableOpacity,  } from "react-native";
import { Avatar } from "react-native-elements";

interface VideoProps {
  video: {
    title: string;
    thumbnail: string;
    channel: string;
    views: string;
    time: string;
    profile: string;
    duration: string;
  };
}

const Video: React.FC<VideoProps> = ({ video }) => {
  return (
    <View style={{ marginBottom: 30, marginTop: 20, width: "99%", }}>
      <Thumbnail video={video} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 10,
        }}
      >
        <AvatarImg video={video} />

        <TouchableOpacity style={{ paddingLeft: 10, marginTop: 10 }}>
          <Title video={video} />
          <Footer video={video} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Thumbnail: React.FC<VideoProps> = ({ video }) => (
  <TouchableOpacity>
    <Image
      source={{
        uri: video.thumbnail,
      }}
      style={{
        aspectRatio: 16 / 9,
        borderRadius: 20,
      }}
    />
  </TouchableOpacity>
);
const Title: React.FC<VideoProps> = ({ video }) => (
  <Text
    style={{
      color: "white",
      fontSize: 15,
      //   padding: 10,
    }}
  >
    {video.title}
  </Text>
);

// ok

const Footer: React.FC<VideoProps> = ({ video }) => (
  <View>
    <Text style={{ color: "gray", fontSize: 15 }}>
      {video.channel} &#xb7; {video.views} views &#xb7; {video.time} days ago
    </Text>
  </View>
);

const AvatarImg: React.FC<VideoProps> = ({ video }) => (
  <Avatar
    size="small"
    rounded
    source={{
      uri: video.profile
    }}
    onPress={() => console.log("Works!")}
    activeOpacity={0.5}
    overlayContainerStyle={{ backgroundColor: "#79a5f2" }}
    titleStyle={{ color: "black" }}
  />
);

export default Video;
