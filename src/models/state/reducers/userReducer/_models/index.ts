// ------------------- User store common structure --------- //
export interface IUserState {
  persistData: {
    isFirstLaunch: boolean;
    isSignedIn: boolean;
    isSignedOut: boolean;
  };
}
