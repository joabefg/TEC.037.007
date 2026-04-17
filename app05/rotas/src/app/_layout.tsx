import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen 
                name="index"
                options={{ title: "Página Inicial" }} 
            />
            <Stack.Screen 
                name="detalhes"
                options={{ title: "Detalhes" }} 
            />
            <Stack.Screen 
                name="login"
                options={{ title: "Login" }} 
            />
        </Stack>
    );
}