import {
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {scaleFont, sizeConfig} from '../../utils/dimension/size_config';
import ButtonComponent from '../../components/ButtonComponent';
import TextInputComponent from '../../components/TextInputComponent';
import {images} from '../../utils/constants/image_constants';
import CheckboxComponent from '../../components/CheckboxComponent';
import Divider from '../../components/Divider';
import {lightTheme} from '../../utils/theme/light_theme';
import Spacer from '../../components/spacer';
import {SafeAreaView} from 'react-native-safe-area-context';

const LoginScreen = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [isSelected, setSelection] = useState(false);

  const inputRef = useRef<TextInput>(null);

  const clearText = () => {
    inputRef.current?.clear(); // Clears the text input
  };
  return (
      <KeyboardAvoidingView style={styles.mainContainer}>
        <View style={styles.headContainer}>
          <ImageBackground
            source={images.loginBackground}
            resizeMode="cover"
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <View style={styles.overlay} />
            <View style={{padding: sizeConfig.size.size16}}>
              <Text style={styles.heading}>
                Go ahead and setup{'\n'}your account
              </Text>
              <Text style={styles.subheading}>
                Register to find meachines in your nearby location
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.formContainer}>
          <TextInputComponent
            ref={inputRef}
            onChangeText={text => onChangeText(text)}
            text={text}
            placeholder="Email address"
            marginTop={sizeConfig.size.size8}
            submitType="next"
            keyboardType="email-address"
          />
          <TextInputComponent
            ref={inputRef}
            onChangeText={text => onChangeNumber(text)}
            text={number}
            placeholder="Password"
            marginTop={sizeConfig.size.size8}
            isPassword={true}
            marginBottom={sizeConfig.size.size16}
            submitType="done"
          />
          <View style={styles.checkboxContainer}>
            <CheckboxComponent
              value={isSelected}
              onClick={() => setSelection(!isSelected)}
              rightText="Remember Me"
            />
            <Text style={{fontSize: scaleFont(sizeConfig.fontSize.fontSize12)}}>
              Forgot Password?
            </Text>
          </View>
          <ButtonComponent title="Login" onPress={() => {}} />
          <View style={{marginVertical: sizeConfig.size.size16}}>
            <Divider text="Or login with" />
          </View>
          <View style={styles.socialLoginContainer}>
            <ButtonComponent
              title="Google"
              onPress={() => {}}
              marginBottom={10}
            />
            <ButtonComponent title="Facebook" onPress={() => {}} />
          </View>
          <View style={styles.registerContainer}>
            <View style={styles.registerRowContainer}>
              <Text style={styles.registerQuestionText}>
                Don't have an account?
              </Text>
              <Text style={styles.registerText}> Register</Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  headContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Makes it cover the entire image
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent black mask
  },
  formContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: sizeConfig.size.size16,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: scaleFont(sizeConfig.fontSize.fontSize32),
    color: 'white',
    fontWeight: 'bold',
    marginBottom: sizeConfig.size.size8,
    overflow: 'hidden',
  },
  subheading: {
    fontSize: scaleFont(sizeConfig.fontSize.fontSize14),
    color: 'white',
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: sizeConfig.size.size8,
  },
  socialLoginContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  registerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  registerRowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: sizeConfig.fontSize.fontSize12,
  },
  registerQuestionText: {textAlign: 'center', fontWeight: 'normal'},
  registerText: {
    textAlign: 'center',
    color: lightTheme.colors.primary,
    fontWeight: 'bold',
    fontSize: sizeConfig.fontSize.fontSize14,
  },
});
