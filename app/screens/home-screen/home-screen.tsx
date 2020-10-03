import React, { useState } from "react"
import { View, ViewStyle } from "react-native"
import { Screen } from "../../components"
import { color } from "../../theme"
import videos from "../../data_sources/videos"
import Comments from "../../containers/comments/comments"
import VideoFeed from "../../containers/video-feed/video-feed"

const FULL: ViewStyle = { flex: 1 }

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
}

export const HomeScreen = () => {
  const [currentVideoId, setCurrentVideoId] = useState("")
  const [isCommentsVisible, setCommentsVisible] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const onVideoChanged = (id: string) => {
    setCurrentVideoId(id)
    setIsPaused(false)
  }

  return (
    <View style={FULL}>
      <Screen style={CONTAINER}>
        <VideoFeed
          videos={videos}
          currentVideoId={currentVideoId}
          onVideoChanged={onVideoChanged}
          showComments={() => setCommentsVisible(true)}
          isPaused={isPaused}
          onVideoTap={() => setIsPaused(!isPaused)}
        />
        <Comments
          isModalVisible={isCommentsVisible}
          closeModal={() => setCommentsVisible(false)}
          videoId={currentVideoId}
        />
      </Screen>
    </View>
  )
}
