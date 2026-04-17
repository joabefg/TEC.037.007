import { View, Text, StyleSheet, Image } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('@/assets/logo-senai.png')} 
        style={styles.img} 
      />

      <Text style={styles.titulo}>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    alignItems: "center",
  },

  titulo: {
    fontSize: 32,
    fontWeight: "900",
  },

  img: {
    width: `40%`,
    height: `40%`,
    marginBottom: 32,
  }
});