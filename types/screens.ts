import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackParamList = {
  Home: undefined;
  Profile: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<StackParamList, 'Home'>;
export type ProfileScreenProps = NativeStackScreenProps<
  StackParamList,
  'Profile'
>;
