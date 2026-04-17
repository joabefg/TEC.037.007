import { Stack } from 'expo-router' // cria rotas automaticamente

export default function Layout() {
  return (
    <Stack>
    <Stack.Screen name="index" options={{ title: 'Inicio'}} />
    <Stack.Screen name="sobre" options={{ title: 'Sobre'}} />
  </Stack>
  )
}