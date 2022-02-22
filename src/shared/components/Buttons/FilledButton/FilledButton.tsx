import React, {useState} from "react";
import {ButtonTitle, PressableButton} from "shared/components/Buttons/FilledButton/FilledButtonStyles";
import {EButtonState} from "shared/components/Buttons/_models";

interface IProps {
  onPress: () => void;
  isFullSize?: boolean;
  backgroundColor?: string;
  icon?: React.VFC;
  buttonTitle?: string;
  isDisabled: boolean;
}

const FilledButton: React.VFC<IProps> = ({isFullSize, backgroundColor, icon, buttonTitle, onPress, isDisabled}) => {
  const [buttonState, setButtonState] = useState(isDisabled ? EButtonState.disabled : EButtonState.active);

  const handlePressIn = () => {
    setButtonState(EButtonState.pressed);
  };

  const handleOnPressOut = () => {
    setButtonState(EButtonState.active);
  };

  return (
    <PressableButton
      isFullSize={isFullSize}
      backgroundColor={backgroundColor}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handleOnPressOut}
      buttonState={buttonState}>
      <ButtonTitle buttonState={buttonState}>{buttonTitle}</ButtonTitle>
      {icon ? icon : null}
    </PressableButton>
  );
};

export default FilledButton;
