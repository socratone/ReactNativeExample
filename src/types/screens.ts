import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackParamList = {
  Home: undefined;
  Profile: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<StackParamList, 'Home'>;
export type ProfileScreenProps = NativeStackScreenProps<
  StackParamList,
  'Profile'
>;
export type SignInScreenProps = NativeStackScreenProps<
  StackParamList,
  'SignIn'
>;
export type SignUpScreenProps = NativeStackScreenProps<
  StackParamList,
  'SignUp'
>;
