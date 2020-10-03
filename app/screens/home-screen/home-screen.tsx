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

const HomeScreen = () => {
  const [currentVideoId, setCurrentVideoId] = useState("")
  const [isCommentsVisible, setCommentsVisible] = useState(false)

  return (
    <View style={FULL}>
      <Screen style={CONTAINER}>
        <VideoFeed
          videos={videos}
          currentVideoId={currentVideoId}
          setCurrentVideoId={setCurrentVideoId}
          showComments={() => setCommentsVisible(true)}
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

export default HomeScreen
