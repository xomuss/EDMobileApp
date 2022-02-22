import {useSelector} from "react-redux";
import {ColorSchemeName, useColorScheme} from "react-native-appearance";
import {ITheme, TAppTheme} from "shared/designSystem/_models";
import {lightTheme} from "shared/designSystem/theme/lightTheme";
import rootSelectors from "models/state/selectors/rootSelectors";
import {darkTheme} from "shared/designSystem/theme/darkTheme";

interface ThemeSystem {
  theme: TAppTheme;
  themePalette: ITheme;
}

export enum Theme {
  dark = "dark",
  light = "light",
}

const useThemeSystem = (): ThemeSystem => {
  const appTheme: TAppTheme = useSelector(rootSelectors.selectAppTheme);

  const scheme: ColorSchemeName = useColorScheme();

  const getThemeWithAppearance = (theme: ColorSchemeName) => {
    switch (theme) {
      case Theme.dark: {
        return Theme.dark;
      }
      case Theme.light: {
        return Theme.light;
      }
      default: {
        return getAppTheme();
      }
    }
  };

  const getAppTheme = (): TAppTheme => {
    switch (appTheme) {
      case Theme.dark: {
        return Theme.dark;
      }
      case Theme.light:
      default: {
        return Theme.light;
      }
    }
  };

  const themePalette: ITheme = getThemeWithAppearance(scheme) === Theme.dark ? darkTheme : lightTheme;

  return {
    theme: getThemeWithAppearance(scheme),
    themePalette,
  };
};

export default useThemeSystem;
