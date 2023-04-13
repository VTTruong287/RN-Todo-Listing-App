import React from 'react';
import { Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import { Colors, Dimensions } from '../../contants';

export type TextBoxProps = TextInputProps & {
    state?: TextBoxState;
    viewStyle?: ViewStyle;
    errorMessage?: string;
};

export enum TextBoxState {
    DEFAULT,
    FOCUSED,
    DISABLED,
    READ_ONLY,
    ERROR,
}

export default function TextBox(props: TextBoxProps) {
    const [textBoxState, setTextBoxState] = React.useState(props.state || TextBoxState.DEFAULT);

    return (
        <>
            <View
                style={{
                    flexGrow: 1,
                    paddingHorizontal: Dimensions.padding * 2,
                    paddingTop: Dimensions.padding,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 4,
                    borderWidth: 1,
                    borderColor:
                        textBoxState == TextBoxState.FOCUSED
                            ? Colors.primary6
                            : (props.errorMessage &&
                                  textBoxState !== TextBoxState.DISABLED &&
                                  textBoxState !== TextBoxState.READ_ONLY) ||
                              textBoxState == TextBoxState.ERROR
                            ? Colors.red6
                            : Colors.neutral3,
                    backgroundColor:
                        textBoxState == TextBoxState.DISABLED || textBoxState == TextBoxState.READ_ONLY
                            ? Colors.neutral3
                            : Colors.neutral1,
                    ...props.viewStyle,
                }}
            >
                <TextInput
                    defaultValue={props.defaultValue}
                    value={props.value}
                    style={{
                        alignSelf: 'stretch',
                        marginBottom: Dimensions.margin * 2,
                        color: textBoxState == TextBoxState.DISABLED ? Colors.neutral5 : Colors.neutral9,
                        paddingVertical: 0,
                    }}
                    placeholder={props.placeholder}
                    placeholderTextColor={Colors.neutral5}
                    editable={textBoxState != TextBoxState.DISABLED && textBoxState != TextBoxState.READ_ONLY}
                    onFocus={() => {
                        setTextBoxState(TextBoxState.FOCUSED);
                    }}
                    onBlur={() => {
                        setTextBoxState(TextBoxState.DEFAULT);
                    }}
                    {...(() => {
                        const { state, viewStyle, ...textProps } = props;
                        return textProps;
                    })()}
                />
            </View>
            {!!props.errorMessage &&
                textBoxState !== TextBoxState.DISABLED &&
                textBoxState !== TextBoxState.READ_ONLY && (
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: Dimensions.margin }}>
                        <Text style={{ color: Colors.red6 }}>{props.errorMessage}</Text>
                    </View>
                )}
        </>
    );
}
