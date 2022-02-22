import React from "react";
import {Button, Text, View} from "react-native";
import Modal from "react-native-modal";
import rootReducer from "models/state/reducers/rootReducer";
import {useDispatch} from "react-redux";

const HappyFlowModal = () => {
  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(rootReducer.actions.hideModal());
  };

  return (
    <Modal isVisible={true}>
      {/*TODO delete*/}
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{flex: 1}}>
        <Text>I am the modal content!</Text>
        <Button title="close Modal" onPress={onCloseModal} />
      </View>
    </Modal>
  );
};

export default HappyFlowModal;
