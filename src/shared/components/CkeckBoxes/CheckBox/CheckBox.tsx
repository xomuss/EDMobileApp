import React from "react";
import {CheckBoxContainer, CheckBoxLabel, PressableWrapper} from "shared/components/CkeckBoxes/CheckBox/CheckBoxStyles";
import CheckedIcon from "shared/assets/svg/checkBoxIcons/CheckedIcon.svg";
import {useTheme} from "@react-navigation/native";
import {ITheme} from "shared/designSystem/_models";

interface IProps {
  label: string;
  value?: boolean;
  onChange: (newValue: boolean) => void;
}

const CheckBox: React.VFC<IProps> = ({label, value, onChange}) => {
  const theme = useTheme() as ITheme;

  const checkedBackgroundColor = theme.Colors.Others.IndicatorsBlue.B0;
  const uncheckedBorderColor = theme.Colors.General.G3;

  // ---------------- HANDLERS ------------------
  const handleChange = () => {
    if (onChange) {
      onChange(!value);
    }
  };

  return (
    <CheckBoxContainer>
      <PressableWrapper
        onPress={handleChange}
        uncheckedBorderColor={uncheckedBorderColor}
        checkedBackgroundColor={checkedBackgroundColor}
        checked={value}>
        {value ? <CheckedIcon /> : null}
      </PressableWrapper>
      <CheckBoxLabel>{label}</CheckBoxLabel>
    </CheckBoxContainer>
  );
};

export default CheckBox;
