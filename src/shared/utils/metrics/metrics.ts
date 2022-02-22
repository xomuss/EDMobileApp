import {
  IMetrics,
  TBorderPositionMetrics,
  TPhoneWithNotchMetrics,
  TWithBorderRadiusMetrics,
} from "shared/utils/metrics/_models";
import {
  deviceInch,
  isAndroid,
  isIOS,
  isTablet,
  scale,
  fontScale,
  width,
  height,
  hasNotch,
} from "react-native-utils-scale";
import DeviceInfo from "react-native-device-info";
import {Platform} from "react-native";

const hasAndroidNotch = hasNotch;

const iPhoneWithNotch: TPhoneWithNotchMetrics[] = [
  "iPhone X",
  "iPhone XR",
  "iPhone XS",
  "iPhone XS Max",
  "iPhone 11 Pro",
  "iPhone 11 Pro Max",
  "iPhone 11",
  "iPhone 12 Pro",
  "iPhone 12 Pro Max",
  "iPhone 12",
  "iPhone 12 mini",
  "iPhone 13 Pro",
  "iPhone 13 Pro Max",
  "iPhone 13",
  "iPhone 13 mini",
];

const hasIphoneNotch =
  Platform.OS === "ios" && iPhoneWithNotch.includes(DeviceInfo.getModel() as TPhoneWithNotchMetrics);

const hasPhoneNotch = hasAndroidNotch || hasIphoneNotch;

const withBorderRadius = (position: TBorderPositionMetrics, radius: number): TWithBorderRadiusMetrics => {
  switch (position) {
    case "bottom":
      return {
        borderBottomLeftRadius: radius,
        borderBottomRightRadius: radius,
      };
    case "top":
      return {
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
      };
    default:
      return {
        borderRadius: radius,
      };
  }
};

const salt = () =>
  Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 16);

const saltWithPasscode = (passcode: number) => (passcode * 52350).toString(36).substr(0, 16);

const shortId = () => Math.random().toString(36).slice(-8);

const metrics: IMetrics = {
  screenWidth: width,
  screenHeight: height,
  withBorderRadius,
  shortId,
  salt,
  saltWithPasscode,
  deviceInch,
  isAndroid,
  isIOS,
  isTablet,
  scale,
  fontScale,
  hasPhoneNotch,
};

export default metrics;
