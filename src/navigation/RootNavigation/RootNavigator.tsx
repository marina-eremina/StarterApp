import { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, ProfileScreen } from '../../screens';

enum RootNavigationStack {
  HOME = 'HOME',
  PROFILE = 'PROFILE',
}

type RootStackParamList = {
  HOME: undefined;
  PROFILE: undefined;
};

type RootNavigationStackProps = StackNavigationProp<RootStackParamList, 'HOME'>;

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  const navigation = useNavigation<RootNavigationStackProps>();

  const navigateToProfile = useCallback(() => navigation.navigate('PROFILE'), [navigation]);

  const HomeScreenComponent = useCallback(() => {
    return <HomeScreen navigateToProfile={navigateToProfile} />;
  }, [navigateToProfile]);

  return (
    <RootStack.Navigator initialRouteName={RootNavigationStack.HOME}>
      <RootStack.Screen name={RootNavigationStack.HOME} component={HomeScreenComponent} />
      <RootStack.Screen name={RootNavigationStack.PROFILE} component={ProfileScreen} />
    </RootStack.Navigator>
  );
};
