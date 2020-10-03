import ViewPager from "@react-native-community/viewpager"
import React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import Video from "react-native-video"
import Icon from "react-native-vector-icons/EvilIcons"

interface VideoT {
  id: string
  url: string
}

interface VideoFeedProps {
  videos: VideoT[]
  currentVideoId: string
  setCurrentVideoId: (id: string) => void
  showComments: Function
}

const FULL: ViewStyle = { flex: 1 }

const COMMENTS: ViewStyle = {
  position: "absolute",
  right: 10,
  bottom: 60,
}

const COMMENTICONSTYLE: TextStyle = {
  backgroundColor: "#fff",
}

const VideoFeed = ({ currentVideoId, setCurrentVideoId, showComments, videos }: VideoFeedProps) => {
  const onCommentIconPressed = () => {
    // fetch comments
    showComments(true)
  }

  const onVideoChanged = (index: number) => {
    setCurrentVideoId(videos[index].id)
  }

  return (
    <ViewPager
      style={FULL}
      onPageSelected={(e) => onVideoChanged(e.nativeEvent.position)}
      orientation={"vertical"}
    >
      {videos.map((video, index) => (
        <View key={video.id}>
          <Video
            style={FULL}
            key={video.id}
            source={video.url}
            repeat={true}
            paused={videos[index].id !== currentVideoId}
          />
          <View style={COMMENTS}>
            <Icon
              name={"comment"}
              size={30}
              style={COMMENTICONSTYLE}
              onPress={onCommentIconPressed}
            />
          </View>
        </View>
      ))}
    </ViewPager>
  )
}

export default VideoFeed
