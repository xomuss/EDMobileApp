import {EFontDesign, EFontFamily, EFontSize, EFontWeight, TFontTextStyle} from "shared/designSystem/fonts/_models";

export const getFont = (designFont: EFontDesign): TFontTextStyle => {
  const getFontTypeParams = () => {
    return {
      [EFontDesign.ExoH40Bold]: {
        fontFamily: EFontFamily.ExoBold,
        fontSize: EFontSize.v40,
        fontWeight: EFontWeight.Bold,
      },
      [EFontDesign.ExoH36SemiBold]: {
        fontFamily: EFontFamily.ExoSemiBold,
        fontSize: EFontSize.v36,
        fontWeight: EFontWeight.SemiBold,
      },
      [EFontDesign.ExoH24Bold]: {
        fontFamily: EFontFamily.ExoBold,
        fontSize: EFontSize.v24,
        fontWeight: EFontWeight.Bold,
      },
      [EFontDesign.ExoH20Bold]: {
        fontFamily: EFontFamily.ExoBold,
        fontSize: EFontSize.v20,
        fontWeight: EFontWeight.Bold,
      },
      [EFontDesign.ExoH18Medium]: {
        fontFamily: EFontFamily.ExoMedium,
        fontSize: EFontSize.v18,
        fontWeight: EFontWeight.Medium,
      },
      [EFontDesign.ExoH16SemiBold]: {
        fontFamily: EFontFamily.ExoSemiBold,
        fontSize: EFontSize.v16,
        fontWeight: EFontWeight.SemiBold,
      },
      [EFontDesign.ExoH16Regular]: {
        fontFamily: EFontFamily.ExoRegular,
        fontSize: EFontSize.v16,
        fontWeight: EFontWeight.Regular,
      },
      [EFontDesign.ExoH12Regular]: {
        fontFamily: EFontFamily.ExoRegular,
        fontSize: EFontSize.v12,
        fontWeight: EFontWeight.Regular,
      },
      [EFontDesign.ExoH11Regular]: {
        fontFamily: EFontFamily.ExoRegular,
        fontSize: EFontSize.v11,
        fontWeight: EFontWeight.Regular,
      },
    };
  };

  return getFontTypeParams()[designFont];
};
