import {IRootState, TShowAlertParams} from "models/state/reducers/rootReducer/_models";
import {PayloadAction} from "@reduxjs/toolkit";
import {ALERT_INITIAL_STATE, MODAL_INITIAL_STATE} from "models/state/reducers/rootReducer/initialState";

const rootActions = {
  showAlert(state: IRootState, action: PayloadAction<TShowAlertParams>) {
    const {message, alertType} = action.payload;

    state.alert = {
      showAlert: true,
      message: message,
      showDuration: 3000,
      alertType,
    };
  },
  clearAlert(state: IRootState) {
    state.alert = {
      ...ALERT_INITIAL_STATE,
    };
  },
  showLoader(state: IRootState, action: PayloadAction<boolean>) {
    state.loader = {
      isShowLoader: action.payload,
    };
  },
  hideModal(state: IRootState) {
    state.modal = {
      ...MODAL_INITIAL_STATE,
    };
  },
};

export default rootActions;
