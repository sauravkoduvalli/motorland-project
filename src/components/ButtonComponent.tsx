import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import {lightTheme} from '../utils/theme/light_theme';
import {scaleFont, sizeConfig} from '../utils/dimension/size_config';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  marginVertical?: number;
  marginHorizontal?: number;
  marginTop?: number;
  marginBottom?: number;
}

const ButtonComponent = ({
  title,
  onPress,
  disabled = false,
  marginVertical,
  marginHorizontal,
  marginTop,
  marginBottom,
}: ButtonProps) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      disabled={disabled}
      underlayColor={lightTheme.colors.border}
      style={[
        styles.button,
        {
          backgroundColor: disabled
            ? lightTheme.colors.disabled
            : lightTheme.colors.primary,
          marginTop: marginTop,
          marginBottom: marginBottom,
          marginVertical: marginVertical,
          marginHorizontal: marginHorizontal,
        },
      ]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: lightTheme.text.buttonText,
    fontWeight: 'bold',
    fontSize: scaleFont(sizeConfig.fontSize.fontSize14),
  },
});
