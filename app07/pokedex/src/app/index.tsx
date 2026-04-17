import { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

interface Pokemon {
    name: string;
    url: string;
}

export default function App() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        buscarPokemons();
    }, []);

    async function buscarPokemons() {
        const resposta = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=15"
        );
        const data = await resposta.json();
        console.log(data);
        setPokemons(data.results);
    }

    return (
        <ScrollView>
            {pokemons.map((pokemon) => (
                <View key={pokemon.name}>
                    <Text>{pokemon.name}</Text>
                </View>
            ))}
        </ScrollView>
    );
}