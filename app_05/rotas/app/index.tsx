import { Text, View, StyleSheet} from 'react-native';
import {Link} from 'expo-router';

export default function index(){

    return(

      <View style={styles.container}>

       
           <Text>Pagina Inicial</Text>
           <Link href="/detalhes">Detalhes</Link>

           
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