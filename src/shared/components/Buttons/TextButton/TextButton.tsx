import React, {useState} from "react";
import {ButtonTitle, PressableButton} from "shared/components/Buttons/TextButton/TextButtonStyles";
import {EButtonState} from "shared/components/Buttons/_models";

interface IProps {
  onPress: () => void;
  isFullSize?: boolean;
  icon?: React.VFC;
  buttonTitle?: string;
  isDisabled: boolean;
}

const TextButton: React.VFC<IProps> = ({buttonTitle, icon, isDisabled, isFullSize, onPress}) => {
  const [buttonState, setButtonState] = useState(isDisabled ? EButtonState.disabled : EButtonState.active);

  const handlePressIn = () => {
    setButtonState(EButtonState.pressed);
  };

  const handleOnPressOut = () => {
    setButtonState(EButtonState.active);
  };

  return (
    <PressableButton isFullSize={isFullSize} onPress={onPress} onPressIn={handlePressIn} onPressOut={handleOnPressOut}>
      <ButtonTitle buttonState={buttonState}>{buttonTitle}</ButtonTitle>
      {icon ? icon : null}
    </PressableButton>
  );
};

export default TextButton;
