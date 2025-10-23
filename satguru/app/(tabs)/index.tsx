

import { Image } from 'expo-image';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Satguru Services</Text>
      <Text style={styles.tagline}>One Call All Solutions..! Electricial, Plumbing, Carpenters, Interior Designing, Tiles and more — Right At Your Doorstep.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 24,
  },
  logo: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  tagline: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});
