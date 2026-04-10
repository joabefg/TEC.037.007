import { Stack } from "expo-router";

export default function layout() {

  return(
    <Stack>

     <Stack.Screen name="index" 
     options={{title: 'Inicio'}} />

     <Stack.Screen name="detalhes" 
     options={{title: 'Detalhes'}} />

     <Stack.Screen name="login" 
     options={{title: 'Entrar'}} />

    </Stack>
  )


}
