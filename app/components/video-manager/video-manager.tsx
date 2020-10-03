import React from "react"
import { ViewStyle, Image, ImageStyle, TouchableOpacity } from "react-native"
import Video from "react-native-video"

interface VideoManagerProps {
  videoUrl: string
  videoId: string
  isCurrentVideo: boolean
  isPaused: boolean
  onVideoTap: Function
}

const FULL: ViewStyle = { flex: 1 }

const IMAGESTYLE: ImageStyle = { flex: 1 }

export const VideoManager = ({
  videoUrl,
  isCurrentVideo,
  videoId,
  isPaused,
  onVideoTap,
}: VideoManagerProps) => {
  if (!isCurrentVideo) {
    // show video thumbnails
    return <Image source={{ uri: `https://via.placeholder.com/300` }} style={IMAGESTYLE} />
  }
  // Add linear gradient when video is paused
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => onVideoTap()} style={FULL}>
      <Video
        style={FULL}
        key={videoId}
        source={videoUrl}
        repeat={true}
        resizeMode={"cover"}
        paused={isPaused}
        poster={"https://via.placeholder.com/300"}
        posterResizeMode={"cover"}
      />
    </TouchableOpacity>
  )
}
