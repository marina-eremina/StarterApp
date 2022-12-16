import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';

import { LunaImage } from '../../assets';

export const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={LunaImage} />
      <Text style={styles.title}>{'Hello!\nMy name is Luna'}</Text>
      <Text style={styles.text}>I'm a dog!</Text>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 16,
  },
  text: {
    fontSize: 24,
    color: 'grey',
  },
});
