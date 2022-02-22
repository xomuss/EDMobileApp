import {DefaultTheme} from "@react-navigation/native";
import {ITheme} from "shared/designSystem/_models";

export const lightTheme: ITheme = {
  ...DefaultTheme,
  Colors: {
    Text: {
      T0: "#B3B3C5",
      T1: "#A2A3D1",
      T2: "#9F9FC0",
      T3: "#7B7C9E",
      T4: "#313365",
      T5: "#01033F",
    },
    General: {
      G0: "#FFFFFF",
      G1: "#F3F4FD",
      G2: "#D8DBFD",
      G3: "#D1D2E5",
      G4: "#8A8ACA",
      G5: "#62648B",
      G6: "#01033F",
    },
    System: {
      Green: {
        G0: "#43D8AB",
        G1: "#C8F2EC",
      },
      Red: {
        R0: "#FF5B5B",
        R1: "#F3E2EA",
      },
      Purple: {
        P0: "#5560FF",
        P1: "#A2ABFF",
        P2: "#BFC8FF",
      },
      Gray: {
        G0: "#FFFFFF",
        G1: "#D7D8E2",
        G2: "#BCBDC6",
      },
    },
    Others: {
      Orange: {
        O0: "#FFA787",
        O1: "#A47079",
      },
      Green: {
        G0: "#43D8AB",
        G1: "#338D8F",
      },
      Purple: {
        P0: "#8EA7FF",
        P1: "#6070BF",
      },
      Red: {
        R0: "#FF5B5B",
        R1: "#A4425D",
      },
      IndicatorsBlue: {
        B0: "#3EAFFF",
        B1: "#87CBFF",
      },
      IndicatorsGreen: {
        G0: "#4EC3A0",
        G1: "#90D7C6",
      },
      IndicatorsOrange: {
        O0: "#FFB169",
        O1: "#FBCCA5",
      },
      Gradient: {
        Go: ["#F0F1FD", "#E0E2F6"],
      },
    },
  },
};
