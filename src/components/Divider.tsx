import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scaleFont, sizeConfig } from '../utils/dimension/size_config';
import { lightTheme } from '../utils/theme/light_theme';

interface DividerProps {
  text?: string;
}

const Divider: React.FC<DividerProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      {text && <Text style={styles.text}>{text}</Text>}
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: lightTheme.colors.divider, 
  },
  text: {
    marginHorizontal: sizeConfig.size.size10,
    fontSize: scaleFont(sizeConfig.fontSize.fontSize12),
    color: lightTheme.colors.divider,
    fontWeight: 'normal',
  },
});

export default Divider;
