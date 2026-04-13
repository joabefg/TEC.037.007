
import {View, Text,StyleSheet} from 'react-native';
import {Link} from 'expo-router';
import { globalStyles } from '../constants/globalStyles';

export default function Index() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titulo}>Página de login</Text>
    </View>
  );
}

