  import { View, Text, StyleSheet, Button} from 'react-native';
  import { Link, useRouter} from 'expo-router';
  import { estilo } from '@/constants/globalStyles';
  
  export default function Login() {
    const router = useRouter ();
      return (
          <View style={estilo.container}>
              <Text style= {estilo.title}>Pagina de Login</Text>
              <Link style={estilo.button href ="/detalhes"}></Link>
          </View>
      )
  }
  