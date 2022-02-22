import {IRootState} from "models/state/reducers/rootReducer/_models";
import {IUserState} from "models/state/reducers/userReducer/_models";

// ------------------ Global store ---------------------- //
export interface IGlobalState {
  root: IRootState;
  user: IUserState;
}
