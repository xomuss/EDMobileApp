import React from "react";
import Modal from "react-native-modal";
import Alert from "shared/components/Alert";
import {useSelector} from "react-redux";
import rootSelectors from "models/state/selectors/rootSelectors";
import {styles} from "containers/TopLevelContainers/AlertMiniModal/AlertMiniModalStyles";

const FADING_TIME_IN_FOR_ALERT: number = 500;

const AlertMiniModal = () => {
  const alertData = useSelector(rootSelectors.selectAlert);

  return (
    <Modal
      isVisible={alertData.showAlert}
      style={styles.modalContainer}
      backdropOpacity={0}
      animationOut="slideOutUp"
      animationIn="slideInDown"
      animationInTiming={FADING_TIME_IN_FOR_ALERT}
      useNativeDriver>
      <Alert />
    </Modal>
  );
};

export default AlertMiniModal;
