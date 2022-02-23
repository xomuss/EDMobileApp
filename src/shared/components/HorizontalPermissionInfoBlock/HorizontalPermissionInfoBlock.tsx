import React from "react";
import LeftIcon from "shared/assets/svg/icons/special/lightMode/callProtectionIcon.svg";
import WarningIcon from "shared/assets/svg/icons/general/warningIcon.svg";
import SecureIcon from "shared/assets/svg/icons/general/checkCircleIcon.svg";
import {
  PressableWrapper,
  SecureText,
  TextTitle,
  ViewContainer,
  WarningText,
} from "shared/components/HorizontalPermissionInfoBlock/HorizontalPermissionInfoBlockStyles";
import {useTheme} from "@react-navigation/native";
import {ITheme} from "shared/designSystem/_models";
import {SecureViewContainer, TextDescription, WarningViewContainer} from "./HorizontalPermissionInfoBlockStyles";

interface IProps {
  warningValue: number;
  secureValue: number;
}

const HorizontalPermissionInfoBlock: React.VFC<IProps> = ({warningValue, secureValue}) => {
  const theme = useTheme() as ITheme;

  return (
    <PressableWrapper theme={theme}>
      <LeftIcon />
      <ViewContainer>
        <TextTitle theme={theme}>Calls</TextTitle>
        <TextDescription theme={theme}>Monitored </TextDescription>
      </ViewContainer>
      <WarningViewContainer>
        <WarningIcon fill={theme.Colors.System.Red.R0} />
        <WarningText theme={theme}>{warningValue}</WarningText>
      </WarningViewContainer>
      <SecureViewContainer>
        <SecureIcon fill={theme.Colors.System.Green.G0} />
        <SecureText theme={theme}>{secureValue}</SecureText>
      </SecureViewContainer>
    </PressableWrapper>
  );
};

export default HorizontalPermissionInfoBlock;
