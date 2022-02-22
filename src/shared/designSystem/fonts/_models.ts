import {TextStyle} from "react-native";

export interface IFontSize {
  fontSize: number;
}

export enum EFontDesign {
  ExoH40Bold = "ExoH40Bold",
  ExoH36SemiBold = "ExoH36SemiBold",
  ExoH24Bold = "ExoH24Bold",
  ExoH20Bold = "ExoH20Bold",
  ExoH18Medium = "ExoH18Medium",
  ExoH16SemiBold = "ExoH16SemiBold",
  ExoH16Regular = "ExoH16Regular",
  ExoH12Regular = "ExoH12Regular",
  ExoH11Regular = "ExoH11Regular",
}

export enum EFontSize {
  v40 = 40,
  v36 = 36,
  v24 = 24,
  v20 = 20,
  v18 = 18,
  v16 = 16,
  v12 = 12,
  v11 = 11,
}

// export enum EFontType {
//   ExoBlack = "ExoBlack",
//   ExoBold = "ExoBold",
//   ExoExtraBold = "ExoExtraBold",
//   ExoExtraLight = "ExoExtraLight",
//   ExoLight = "ExoLight",
//   ExoMedium = "ExoMedium",
//   ExoRegular = "ExoRegular",
//   ExoSemiBold = "ExoSemiBold",
//   ExoThin = "ExoThin",
// }

export enum EFontFamily {
  ExoThin = "Exo-Thin", //100
  ExoExtraLight = "Exo-ExtraLight", //200
  ExoLight = "Exo-Light", //300
  ExoRegular = "Exo-Regular", //400
  ExoMedium = "Exo-Medium", //500
  ExoSemiBold = "Exo-SemiBold", //600
  ExoBold = "Exo-Bold", //700
  ExoExtraBold = "Exo-ExtraBold", //800
  ExoBlack = "Exo-Black", //900
}

export enum EFontWeight {
  Thin = "100",
  ExtraLight = "200",
  Light = "300",
  Regular = "400",
  Medium = "500",
  SemiBold = "600",
  Bold = "700",
  ExtraBold = "800",
  Black = "900",
}

export type TFontTextStyle = Pick<TextStyle, "fontFamily" | "fontWeight" | "fontSize">;
