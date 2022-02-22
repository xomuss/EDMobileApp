import {EAlert, TAlertType} from "models/state/reducers/rootReducer/_models";
import DangerIcon from "shared/assets/svg/alertIcons/dangerIcon.svg";
import WarnIcon from "shared/assets/svg/alertIcons/warnIcon.svg";
import InfoIcon from "shared/assets/svg/alertIcons/infoIcon.svg";
import SuccessIcon from "shared/assets/svg/alertIcons/successIcon.svg";
import {ITheme} from "shared/designSystem/_models";

export const getColors = (alertType: TAlertType, theme: ITheme) => {
  const colors = {
    [EAlert.danger]: theme.Colors.Others.Red.R0,
    [EAlert.warning]: theme.Colors.Others.Orange.O0,
    [EAlert.info]: theme.Colors.Others.Purple.P0,
    [EAlert.success]: theme.Colors.Others.IndicatorsGreen.G0,
  };

  return colors[alertType];
};

export const getIcons = (alertType: TAlertType) => {
  const icons = {
    [EAlert.danger]: DangerIcon,
    [EAlert.warning]: WarnIcon,
    [EAlert.info]: InfoIcon,
    [EAlert.success]: SuccessIcon,
  };

  return icons[alertType];
};
