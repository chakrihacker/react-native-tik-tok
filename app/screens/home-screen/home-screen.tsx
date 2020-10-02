import React, { useState } from "react"
import { View, ViewStyle } from "react-native"
import Video from "react-native-video"
import ViewPager from "@react-native-community/viewpager"
import { Screen } from "../../components"
import { color } from "../../theme"
import videos from "../../data_sources/videos"

const FULL: ViewStyle = { flex: 1 }

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
}

const HomeScreen = () => {
  const [currentVideo, setCurrentVideo] = useState(0)

  return (
    <View style={FULL}>
      <Screen style={CONTAINER}>
        <ViewPager
          style={FULL}
          initialPage={currentVideo}
          onPageSelected={(e) => setCurrentVideo(e.nativeEvent.position)}
          orientation={"vertical"}
        >
          {videos.map((video, index) => (
            <>
              <Video
                key={video.id}
                source={video.url}
                repeat={true}
                paused={index !== currentVideo}
              />
            </>
          ))}
        </ViewPager>
      </Screen>
    </View>
  )
}

export default HomeScreen
