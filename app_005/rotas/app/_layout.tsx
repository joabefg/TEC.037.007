import { Stack } from "expo-router";
import { globalStyles } from '../constants/globalStyles';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Inicio" }} />
      <Stack.Screen name="detalhes" options={{ title: "Detalhes" }} />
      <Stack.Screen name="login" options={{ title: "Entrar" }} />
    </Stack>

  )

}