import {PayloadAction} from "@reduxjs/toolkit";
import {IUserState} from "models/state/reducers/userReducer/_models";

const userActions = {
  setIsFirstLaunch(state: IUserState, action: PayloadAction<boolean>) {
    state.persistData.isFirstLaunch = action.payload;
  },
  setIsSignedInstate(state: IUserState, action: PayloadAction<boolean>) {
    state.persistData.isSignedIn = action.payload;
  },
  setIsSignedOut(state: IUserState, action: PayloadAction<boolean>) {
    state.persistData.isSignedOut = action.payload;
  },
};

export default userActions;
