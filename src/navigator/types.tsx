import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    BottomTab: NavigatorScreenParams<BottomTabStackParamList>;
}

export type BottomTabStackParamList = {
    Home: undefined;
    Chat: undefined;
    Profile: undefined;
}

// export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home', 'HomeStack'>;
// export type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile', 'ProfileStack'>;
