// usar import {} from "@/" vai sugerir os pacotes porque alteramos o tsconfig.json para mapear os módulos
// criamos o arquivo tsx para usar typescript transpilado para jsx, o javascript para expo
// usamos o jsx para criar de forma declarativa a interface da nossa aplicação.
// tudo será baseado em componentes para poder reaproveitá-los

// 3. importar: importar componentes prontos (feitos pelos devs do react native)
import {View, Text} from 'react-native';
import { StyleSheet } from 'react-native';

// 1. exportar para o expo-router conseguir encontrar o componente, componentes são nada mais que funções. (CammelCase.)
export default function Index() {
     // 2. Return: Todo componente irá retornar o conteúdo para ser renderizado na tela. 
     // Cada return só pode ter um componente raiz, os demais devem estar dentro do principal
     return (
          // 4. Componentes importados podem ser declarados como se fosse tags html
          // <View style={{flex:1, alignItems: "center"}}>
          <View style={estilo.conteiner}>  
               Hello World!
          </View>

     )
     
}

const estilo = StyleSheet.create({
     conteiner : {
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
     },
     titulo : {
          fontSize: 24, 
          fontWeight: "bold"
     }
})