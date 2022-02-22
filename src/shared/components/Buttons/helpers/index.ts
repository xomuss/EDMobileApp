import {EButtonState} from "shared/components/Buttons/_models";

export const getBackgroundColors = (buttonState: EButtonState) => {
  const colors = {
    [EButtonState.pressed]: "#9E9E9E",
    [EButtonState.disabled]: "#D6D6D6",
    [EButtonState.active]: "#777777",
  };

  return colors[buttonState];
};

export const getTitleColors = (buttonState: EButtonState) => {
  const colors = {
    [EButtonState.pressed]: "#FFFFFF",
    [EButtonState.disabled]: "#777777",
    [EButtonState.active]: "#FFFFFF",
  };

  return colors[buttonState];
};

export const getTitleButtonColors = (buttonState: EButtonState) => {
  const colors = {
    [EButtonState.pressed]: "#898989",
    [EButtonState.disabled]: "#CACACA",
    [EButtonState.active]: "#676767",
  };

  return colors[buttonState];
};
