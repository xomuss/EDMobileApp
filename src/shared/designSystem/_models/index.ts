import {Theme} from "@react-navigation/native";

export type TAppTheme = "dark" | "light";

export interface ITheme extends Theme {
  Colors: IColors;
}

export interface IColors {
  Text: {
    T0: string;
    T1: string;
    T2: string;
    T3: string;
    T4: string;
    T5: string;
  };
  General: {
    G0: string;
    G1: string;
    G2: string;
    G3: string;
    G4: string;
    G5: string;
    G6: string;
  };
  System: {
    Green: {
      G0: string;
      G1: string;
    };
    Red: {
      R0: string;
      R1: string;
    };
    Purple: {
      P0: string;
      P1: string;
      P2: string;
    };
    Gray: {
      G0: string;
      G1: string;
      G2: string;
    };
  };
  Others: {
    Orange: {
      O0: string;
      O1: string;
    };
    Green: {
      G0: string;
      G1: string;
    };
    Purple: {
      P0: string;
      P1: string;
    };
    Red: {
      R0: string;
      R1: string;
    };
    IndicatorsBlue: {
      B0: string;
      B1: string;
    };
    IndicatorsGreen: {
      G0: string;
      G1: string;
    };
    IndicatorsOrange: {
      O0: string;
      O1: string;
    };
    Gradient: {
      Go: string[];
    };
  };
}
