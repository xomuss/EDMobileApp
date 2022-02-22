import {IAlert, IGlobalSettings, ILoader, IModal, IRootState} from "models/state/reducers/rootReducer/_models";

// TODO delete
// @ts-ignore
export const GLOBAL_SETTINGS_INITIAL_STATE: IGlobalSettings = {};

export const ALERT_INITIAL_STATE: IAlert = {
  showAlert: false,
  message: "",
  showDuration: 0,
  alertType: "success",
};

export const LOADER_INITIAL_STATE: ILoader = {
  isShowLoader: false,
};

export const MODAL_INITIAL_STATE: IModal = {
  type: null,
  modalProps: {},
};

// ------------------- Main INITIAL state ----------------- //
export const InitialState: IRootState = {
  persistData: {
    globalSettings: {
      appTheme: "light",
    },
  },
  alert: {
    ...ALERT_INITIAL_STATE,
  },
  loader: {
    ...LOADER_INITIAL_STATE,
  },
  modal: {
    ...MODAL_INITIAL_STATE,
  },
};
