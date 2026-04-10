import { Text, View, StyleSheet,Button} from 'react-native';
import {Link, useRouter} from 'expo-router';

export default function detalhes(){
  
    const router = useRouter();
    return(

      <View style={styles.container}>

       
           <Text>Pagina de Detalhes</Text>
           <Link href="/login">Sair</Link>
          <Button title='Realizar logout' onPress={() => router.replace("/login")}/>

           
      </View>


    )

}

const styles = StyleSheet.create({

  container: {

    flex: 1, 
    justifyContent: 'center',
    alignContent: 'center'



  }

})