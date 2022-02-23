import React, {useState} from "react";
import {ButtonTitle, PressableButton} from "shared/components/Buttons/TextButton/TextButtonStyles";
import {EButtonState} from "shared/components/Buttons/_models";
import {ITheme} from "shared/designSystem/_models";

interface IProps {
  onPress: () => void;
  isFullSize?: boolean;
  icon?: React.VFC;
  buttonTitle?: string;
  isDisabled: boolean;
  color?: ITheme;
}

const TextButton: React.FC<IProps> = ({buttonTitle, icon, isDisabled, isFullSize, onPress, color}) => {
  const [buttonState, setButtonState] = useState(isDisabled ? EButtonState.disabled : EButtonState.active);

  const handlePressIn = () => {
    setButtonState(EButtonState.pressed);
  };

  const handleOnPressOut = () => {
    setButtonState(EButtonState.active);
  };

  return (
    <PressableButton isFullSize={isFullSize} onPress={onPress} onPressIn={handlePressIn} onPressOut={handleOnPressOut}>
      <ButtonTitle color={color} buttonState={buttonState}>
        {buttonTitle}
      </ButtonTitle>
      {icon}
    </PressableButton>
  );
};

export default TextButton;
