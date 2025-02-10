import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
} from 'react-native';
import React from 'react';
import {sizeConfig} from '../utils/dimension/size_config';
import {lightTheme} from '../utils/theme/light_theme';

interface TextInputProps {
  ref: React.LegacyRef<TextInput>;
  onChangeText: (text: string) => void;
  text: string;
  placeholder: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  marginTop?: number;
  marginBottom?: number;
  inputMode?: 'text' | 'none' | 'tel' | 'url' | 'email' | 'numeric';
  isMulltiline?: boolean;
  readOnly?: boolean;
  isPassword?: boolean;
  submitType?: 'enter' | 'done' | 'next' | 'search' | 'send' | 'previous';
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

const TextInputComponent = ({
  ref,
  onChangeText,
  text,
  placeholder,
  keyboardType = 'default',
  marginTop = 0,
  marginBottom = 0,
  inputMode = 'text',
  isMulltiline = false,
  readOnly = false,
  isPassword = false,
  submitType = 'done',
  onFocus,
}: TextInputProps) => {
  return (
    <TextInput
      ref={ref}
      style={[styles.input, {marginTop, marginBottom}]}
      onChangeText={onChangeText}
      onFocus={onFocus}
      value={text}
      placeholder={placeholder}
      placeholderTextColor={lightTheme.colors.disabled}
      keyboardType={keyboardType}
      inputMode={inputMode}
      clearButtonMode="while-editing"
      multiline={isMulltiline}
      readOnly={readOnly}
      secureTextEntry={isPassword}
      enterKeyHint={submitType}>
      
    </TextInput>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 0.5,
    borderColor: lightTheme.colors.border,
    paddingHorizontal: sizeConfig.size.size12,
    includeFontPadding: true,
    borderRadius: 8,
  },
});
