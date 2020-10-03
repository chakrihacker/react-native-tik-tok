import React from "react"
import { View, Text, Modal, ViewStyle, TouchableOpacity, FlatList, TextStyle } from "react-native"
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import commentsData from "../../data_sources/comments"

interface CommentsProps {
  isModalVisible: boolean
  videoId: string
  closeModal: Function
}

const MODALSTYLE: ViewStyle = {
  alignItems: "center",
  justifyContent: "flex-end",
  flex: 1,
}

const COMMENTCONTAINER: ViewStyle = {
  height: "50%",
  backgroundColor: "#fff",
  alignSelf: "stretch",
  padding: 15,
}

const HEADERTEXT: TextStyle = {
  fontSize: 30,
}

const USERTEXT: TextStyle = {
  fontWeight: "bold",
}

const COMMENTBOX: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
}

const HEADERROW: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
}

const Comments = (props: CommentsProps) => {
  const header = () => (
    <View style={HEADERROW}>
      <Text style={HEADERTEXT}>Comments</Text>
      <Icons name={"close-circle-outline"} size={30} onPress={() => props.closeModal()} />
    </View>
  )

  const renderComment = ({ item: comment }) => (
    <View style={COMMENTBOX}>
      <Icons name={"account-circle-outline"} size={26} />
      <View>
        <Text style={USERTEXT}>{comment.user}</Text>
        <Text>{comment.description}</Text>
      </View>
    </View>
  )

  return (
    <Modal
      animationType={"slide"}
      visible={props.isModalVisible}
      onRequestClose={() => props.closeModal()}
      transparent
    >
      <TouchableOpacity style={MODALSTYLE} onPress={() => props.closeModal()}>
        <TouchableOpacity style={COMMENTCONTAINER} activeOpacity={1}>
          <FlatList
            data={commentsData}
            ListHeaderComponent={header}
            renderItem={renderComment}
            keyExtractor={(item) => item.id}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  )
}

export default Comments
