import ViewPager from "@react-native-community/viewpager"
import React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import Icon from "react-native-vector-icons/EvilIcons"
import { VideoManager } from "../../components/video-manager/video-manager"

interface VideoT {
  id: string
  url: string
}

interface VideoFeedProps {
  videos: VideoT[]
  currentVideoId: string
  onVideoChanged: (id: string) => void
  showComments: Function
  isPaused: boolean
  onVideoTap: Function
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

const VideoFeed = ({
  currentVideoId,
  onVideoChanged,
  showComments,
  videos,
  isPaused,
  onVideoTap,
}: VideoFeedProps) => {
  const onCommentIconPressed = () => {
    // fetch comments
    showComments(true)
  }

  const handleVideoChanged = (index: number) => {
    onVideoChanged(videos[index].id)
  }

  return (
    <ViewPager
      style={FULL}
      onPageSelected={(e) => handleVideoChanged(e.nativeEvent.position)}
      orientation={"vertical"}
    >
      {videos.map((video, index) => (
        <View key={video.id} collapsable={false}>
          <VideoManager
            isCurrentVideo={videos[index].id === currentVideoId}
            isPaused={isPaused}
            videoId={video.id}
            videoUrl={video.url}
            onVideoTap={onVideoTap}
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
