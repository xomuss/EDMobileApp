// ------------------- METRICS ------------ //
export interface IMetrics {
  screenWidth: number;
  screenHeight: number;
  withBorderRadius: (position: TBorderPositionMetrics, radius: number) => TWithBorderRadiusMetrics;
  shortId: () => string;
  salt: () => string;
  saltWithPasscode: (passcode: number) => string;
  deviceInch: number;
  isAndroid: boolean;
  isIOS: boolean;
  isTablet: boolean;
  scale: (number: number) => number;
  fontScale: (number: number) => number;
  hasPhoneNotch: boolean;
}

export type TBorderPositionMetrics = "bottom" | "top" | null;

interface IWithBottomRadiusMetrics {
  borderBottomLeftRadius: number;
  borderBottomRightRadius: number;
}

interface IWithTopRadiusMetrics {
  borderTopRightRadius: number;
  borderTopLeftRadius: number;
}

interface IWithRadiusMetrics {
  borderRadius: number;
}

export type TWithBorderRadiusMetrics = IWithBottomRadiusMetrics | IWithTopRadiusMetrics | IWithRadiusMetrics;

export type TPhoneWithNotchMetrics =
  | "iPhone X"
  | "iPhone XR"
  | "iPhone XS"
  | "iPhone XS Max"
  | "iPhone 11 Pro"
  | "iPhone 11 Pro Max"
  | "iPhone 11"
  | "iPhone 12 Pro"
  | "iPhone 12 Pro Max"
  | "iPhone 12"
  | "iPhone 12 mini"
  | "iPhone 13 Pro"
  | "iPhone 13 Pro Max"
  | "iPhone 13"
  | "iPhone 13 mini";
