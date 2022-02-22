import React, {useEffect, useRef} from "react";
import {
  AlertTextDescription,
  AlertTextTitle,
  AlertTextWrapper,
  MainAlertWrapper,
  styles,
} from "shared/components/Alert/AlertStyles";
import {useDispatch, useSelector} from "react-redux";

import {getColors, getIcons} from "shared/components/Alert/helpers/helpers";
import {TNullable} from "shared/_models";
import {IGlobalState} from "models/state/_models";
import {IAlert} from "models/state/reducers/rootReducer/_models";
import rootSelectors from "models/state/selectors/rootSelectors";
import rootReducer from "models/state/reducers/rootReducer";
import {useTheme} from "@react-navigation/native";
import {ITheme} from "shared/designSystem/_models";

const Alert: React.VFC = () => {
  const dispatch = useDispatch();

  const durationTimeOut = useRef<TNullable<ReturnType<typeof setTimeout>>>(null);

  const alertInfo = useSelector<IGlobalState, IAlert>(rootSelectors.selectAlert);

  const theme = useTheme() as ITheme;

  const Icon = getIcons(alertInfo.alertType);

  useEffect(() => {
    durationTimeOut.current = setTimeout(() => {
      dispatch(rootReducer.actions.clearAlert());
    }, alertInfo.showDuration);
  }, []);

  return (
    <MainAlertWrapper backgroundColor={getColors(alertInfo.alertType, theme)}>
      <Icon width={20} height={20} style={styles.svg} />
      <AlertTextWrapper>
        <AlertTextTitle theme={theme}>{alertInfo.alertType}</AlertTextTitle>
        <AlertTextDescription theme={theme}>{alertInfo.message}</AlertTextDescription>
      </AlertTextWrapper>
    </MainAlertWrapper>
  );
};

export default Alert;
