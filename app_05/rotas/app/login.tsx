import { Text, View, StyleSheet} from 'react-native';
import {Link} from 'expo-router';

export default function detalhes(){

    return(

      <View style={styles.container}>

       
           <Text>Pagina de Login</Text>
           <Link href="/destalhes">Sair</Link>

           
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