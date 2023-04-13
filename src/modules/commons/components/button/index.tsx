import React from 'react';
import { View, Pressable, Text, ViewStyle, StyleProp, TextStyle } from 'react-native';
import { Dimensions } from '../../contants';

export type onPressedCallback = () => void;

export type StateStyle = {
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    fontSize?: number;
    lineHeight?: number;
};

export type Icon = {
    render: (state: ButtonState, stateColor?: string) => React.ReactNode;
};

export type ButtonProps = {
    disabled?: boolean;
    text?: string;
    leftIcon?: Icon;
    rightIcon?: Icon;
    defaultStyle?: StateStyle;
    pressedStyle?: StateStyle;
    disabledStyle?: StateStyle;
    onPressed?: onPressedCallback;
    style?: ViewStyle;
    buttonStyle?: ViewStyle;
    textStyle?: ViewStyle | TextStyle;
};

export enum ButtonState {
    DEFAULT,
    DISABLED,
    PRESSED,
}

export default function Button(props: ButtonProps) {
    const [buttonState, setButtonState] = React.useState<ButtonState>(ButtonState.DEFAULT);

    React.useEffect(() => {
        setButtonState(props.disabled ? ButtonState.DISABLED : ButtonState.DEFAULT);
    }, [props]);

    return (
        <View
            style={{
                minHeight: Dimensions.lineHeightButtonMedium + 24,
                height: Dimensions.lineHeightButtonMedium + 24,
                ...props.style,
            }}
        >
            <Pressable
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    padding: 12,
                    backgroundColor:
                        buttonState == ButtonState.DISABLED
                            ? props.disabledStyle?.backgroundColor
                            : buttonState == ButtonState.PRESSED
                            ? props.pressedStyle?.backgroundColor
                            : props.defaultStyle?.backgroundColor,
                    borderColor:
                        buttonState == ButtonState.DISABLED
                            ? props.disabledStyle?.borderColor
                            : buttonState == ButtonState.PRESSED
                            ? props.pressedStyle?.borderColor
                            : props.defaultStyle?.borderColor,
                    alignItems: 'center',
                    justifyContent: !props.leftIcon && !props.rightIcon ? 'space-around' : 'space-between',
                    borderRadius: 4,
                    borderWidth: 1,
                    ...props.buttonStyle,
                }}
                onPress={props.onPressed}
                onPressIn={() => {
                    setButtonState(ButtonState.PRESSED);
                }}
                onPressOut={() => {
                    setButtonState(ButtonState.DEFAULT);
                }}
                disabled={props.disabled}
            >
                {props.leftIcon?.render(
                    buttonState,
                    buttonState == ButtonState.PRESSED
                        ? props.pressedStyle?.textColor
                        : buttonState == ButtonState.DISABLED
                        ? props.disabledStyle?.textColor
                        : props.defaultStyle?.textColor,
                )}

                <Text
                    style={{
                        ...props.textStyle,
                        paddingHorizontal: Dimensions.padding,
                        color:
                            buttonState == ButtonState.DISABLED
                                ? props.disabledStyle?.textColor
                                : buttonState == ButtonState.PRESSED
                                ? props.pressedStyle?.textColor
                                : props.defaultStyle?.textColor,

                        fontSize:
                            buttonState == ButtonState.DISABLED
                                ? props.disabledStyle?.fontSize
                                : buttonState == ButtonState.PRESSED
                                ? props.pressedStyle?.fontSize
                                : props.defaultStyle?.fontSize,
                    }}
                >
                    {props.text || ' '}
                </Text>

                {props.rightIcon?.render(
                    buttonState,
                    buttonState == ButtonState.PRESSED
                        ? props.pressedStyle?.textColor
                        : buttonState == ButtonState.DISABLED
                        ? props.disabledStyle?.textColor
                        : props.defaultStyle?.textColor,
                )}
            </Pressable>
        </View>
    );
}
