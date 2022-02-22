// ------------------- Main INITIAL state ----------------- //
import {IUserState} from "models/state/reducers/userReducer/_models";

export const InitialState: IUserState = {
  persistData: {
    isFirstLaunch: true,
    isSignedIn: false,
    isSignedOut: false,
  },
};
