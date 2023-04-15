import { Dimensions } from 'react-native'
const { width: windowWidth, height: windowHeight } = Dimensions.get('window')
const { width: screenWidth, height: screenHeight } = Dimensions.get('screen')

// --- PX - DP Helper --- //
const UI_SCREEN_DESIGN_WIDTH = 375 // This is px

function px2dp(px: number): number {
    const dp = (px * windowWidth) / UI_SCREEN_DESIGN_WIDTH
    return dp
}

function dp2px(dp: number): number {
    const px = (dp * UI_SCREEN_DESIGN_WIDTH) / windowWidth
    return px
}

export const NORMALIZED_DP = px2dp(1)

export function dp(px: number): number {
    return NORMALIZED_DP * px
}
// ----------------------- //

export default {
    // WINDOW
    windowWidth,
    windowHeight,

    // SCREEN
    screenWidth,
    screenHeight,

    // SPACING
    padding: dp(5),
    padding1: dp(4),
    padding2: dp(8),
    padding3: dp(12),
    padding4: dp(16),
    padding5: dp(20),

    margin: dp(5),
    margin1: dp(4),
    margin2: dp(8),
    margin3: dp(12),
    margin4: dp(16),
    margin5: dp(20),

    // RADIUS
    radius: dp(10),
    radius1: dp(10),
    radius2: dp(20),
    radius3: dp(30),
    radius4: dp(40),

    // FONT SIZE
    heading1: dp(32),
    heading2: dp(24),
    heading3: dp(18),
    heading4: dp(16),
    heading5: dp(14),
    heading6: dp(12),
    subHeading1: dp(24),
    subHeading2: dp(18),
    subHeading3: dp(16),
    subHeading4: dp(14),
    subHeading5: dp(12),
    body1: dp(16),
    body2: dp(14),
    body3: dp(12),
    body4: dp(14),
    buttonLarge: dp(16),
    buttonMedium: dp(14),
    huge: dp(40),
    textLink: dp(14),
    label: dp(10),
    microText: dp(11),
    other1: dp(14),
    other2: dp(32),
    pinKey: dp(20),
    progressStepLabel: dp(10),

    // LINE HEIGHT
    lineHeightHeading1: dp(40),
    lineHeightHeading2: dp(32),
    lineHeightHeading3: dp(26),
    lineHeightHeading4: dp(24),
    lineHeightHeading5: dp(22),
    lineHeightHeading6: dp(20),
    lineHeightSubHeading1: dp(32),
    lineHeightSubHeading2: dp(26),
    lineHeightSubHeading3: dp(24),
    lineHeightSubHeading4: dp(22),
    lineHeightSubHeading5: dp(20),
    lineHeightBody1: dp(24),
    lineHeightBody2: dp(22),
    lineHeightBody3: dp(18),
    lineHeightBody4: dp(20),
    lineHeightHuge: dp(48),
    lineHeightButtonLarge: dp(24),
    lineHeightButtonMedium: dp(22),
    lineHeightTextLink: dp(22),
    lineHeightLabel: dp(18),
    lineHeightMicroText: dp(20),
    lineHeightOther1: dp(22),
    lineHeightOther2: dp(40),
    lineHeightPINKey: dp(24),
    lineHeightProgressStepLabel: dp(10),

    // HOME NAV BAR HEIGHT
    homeNavBarHeight: dp(72),
}
