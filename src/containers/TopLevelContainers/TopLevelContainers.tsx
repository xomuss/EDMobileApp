import React from "react";
import AlertMiniModal from "containers/TopLevelContainers/AlertMiniModal";
import GeneralModalsComponent from "containers/TopLevelContainers/GeneralModals/GeneralModalsComponent/GeneralModalsComponent";

const TopLevelContainers = () => {
  return (
    <>
      <AlertMiniModal />
      <GeneralModalsComponent />
    </>
  );
};

export default TopLevelContainers;
