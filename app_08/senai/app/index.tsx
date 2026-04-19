import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/logo_senai.png')} 
        style={styles.image}
      />

      <Text style={styles.title}>Bem-vindo ao Senai!</Text>
      <Link href="../sobre" style={styles.button}> Sobre </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  image: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  button: {
  backgroundColor: '#0b36ac',
  color: '#fff',          // cor do texto
  padding: 10,
  borderRadius: 8,
  textAlign: 'center',
  marginTop: 10,
},
});