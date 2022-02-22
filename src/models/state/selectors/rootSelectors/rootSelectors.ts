import {IGlobalState} from "models/state/_models";
import {createSelector} from "@reduxjs/toolkit";
import {IRootState} from "models/state/reducers/rootReducer/_models";

const selectRootState = (state: IGlobalState) => state.root;

const rootPersistedData = createSelector(selectRootState, (state: IRootState) => state.persistData);

const selectModal = createSelector(selectRootState, state => state.modal);

const selectAlert = createSelector(selectRootState, state => state.alert);

const selectAppTheme = createSelector(rootPersistedData, state => state.globalSettings?.appTheme);

export default {
  selectModal,
  selectAlert,
  selectAppTheme,
};
