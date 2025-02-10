import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import CheckBox from 'react-native-check-box';
import {sizeConfig, scaleFont} from '../utils/dimension/size_config';
import {lightTheme} from '../utils/theme/light_theme';

interface CheckboxProps {
  value: boolean;
  onClick: () => void
  leftText?: string;
  rightText?: string;
}

const CheckboxComponent = ({
  value,
  onClick,
  leftText,
  rightText,
}: CheckboxProps) => {
  return (
    <CheckBox
      style={styles.checkbox}
      onClick={onClick}
      isChecked={value}
      leftText={leftText}
      leftTextStyle={{
        color: lightTheme.text.bodyText,
        fontSize: scaleFont(sizeConfig.fontSize.fontSize12),
        fontWeight: 'normal',
      }}
      rightText={rightText}
      rightTextStyle={{
        color: lightTheme.text.bodyText,
        fontSize: scaleFont(sizeConfig.fontSize.fontSize12),
        fontWeight: 'normal',
      }}
    />
  );
};

export default CheckboxComponent;

const styles = StyleSheet.create({
  checkbox: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginBottom: sizeConfig.size.size8,
  },
});
