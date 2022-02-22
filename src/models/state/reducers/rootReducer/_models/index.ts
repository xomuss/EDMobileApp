// ------------------- Root store common structure --------- //
import {TNullable} from "shared/_models";
import {TAppTheme} from "shared/designSystem/_models";

export interface IRootState {
  persistData: {
    globalSettings: IGlobalSettings;
  };
  alert: IAlert;
  loader: ILoader;
  modal: IModal;
}

// -------------------- Global Settings ----------------- //
export interface IGlobalSettings {
  appTheme: TAppTheme;
}

// -------------------- Alert store --------------------- //
export enum EAlert {
  warning = "warning",
  danger = "danger",
  info = "info",
  success = "success",
}

export type TAlertType = "success" | "warning" | "danger" | "info";

export interface IAlert {
  showAlert: boolean;
  message: string;
  showDuration: number;
  alertType: TAlertType;
}

export interface TShowAlertParams {
  message: string;
  alertType: TAlertType;
}

// -------------------- Loader store ------------------- //
export interface ILoader {
  isShowLoader: boolean;
}

// ------------------ Modals store ---------------------- //
export interface IModal {
  type: TNullable<EModalsType>;
  modalProps: any;
}

export enum EModalsType {}
