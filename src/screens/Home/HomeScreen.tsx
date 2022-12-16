import { Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';

interface HomeProps {
  navigateToProfile(): void;
}

export const HomeScreen = (props: HomeProps) => {
  const { navigateToProfile } = props;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{'HomeScreen'}</Text>
      <Pressable style={styles.button} onPress={navigateToProfile}>
        <Text style={styles.buttonText}>{'go to Profile'}</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
  },
});
