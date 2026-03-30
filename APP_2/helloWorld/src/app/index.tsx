import { Text, View, StyleSheet } from "react-native";

export default function App() {
    return (
        <View>
            <Text style={estilo.container}>Hello World</Text>
        </View>
    )
}

const estilo = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});