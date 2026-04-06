import { TextInput, StyleSheet } from "react-native"

export function input() {
    return <TextInput style={styles.input}/>

}
const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 48,
        borderWidth: 1,
        borderColor: '#DCDCDC',
        borderRadius: 8
    }
})