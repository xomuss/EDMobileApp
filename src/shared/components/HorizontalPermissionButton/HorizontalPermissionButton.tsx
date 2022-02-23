import React from "react";
import Switcher from "shared/components/Switchers/Switcher";
import LeftIcon from "shared/assets/svg/icons/special/lightMode/callProtectionIcon.svg";
import DescriptionIcon from "shared/assets/svg/icons/general/chevronRightIcon.svg";
import {
  PressableWrapper,
  TextTitle,
  ViewContainer,
} from "shared/components/HorizontalPermissionButton/HorizontalPermissionButtonStyles";
import TextButton from "shared/components/Buttons/TextButton";
import {useTheme} from "@react-navigation/native";
import {ITheme} from "shared/designSystem/_models";

const HorizontalPermissionButton: React.VFC = () => {
  const theme = useTheme() as ITheme;

  return (
    <PressableWrapper theme={theme}>
      <LeftIcon />
      <ViewContainer>
        <TextTitle theme={theme}>Call Protection</TextTitle>
        <TextButton
          icon={DescriptionIcon}
          onPress={() => console.info("click")}
          buttonTitle={"learn more"}
          isDisabled={false}
          color={theme}
        />
      </ViewContainer>
      <Switcher value={false} />
    </PressableWrapper>
  );
};

export default HorizontalPermissionButton;
