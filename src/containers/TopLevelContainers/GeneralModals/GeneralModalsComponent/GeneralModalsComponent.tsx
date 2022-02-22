import React from "react";
import {useSelector} from "react-redux";
import rootSelectors from "models/state/selectors/rootSelectors";
import ModalsList from "containers/TopLevelContainers/GeneralModals/GeneralModalsComponent/GeneralModalsList";

const GeneralModalsComponent: React.VFC = () => {
  const selectModal = useSelector(rootSelectors.selectModal);

  // TODO delete
  // @ts-ignore
  if (!selectModal?.type || !ModalsList[selectModal.type]) {
    return null;
  }

  //TODO delete
  // @ts-ignore
  const Component = ModalsList[selectModal.type];

  return <Component />;
};

export default GeneralModalsComponent;
