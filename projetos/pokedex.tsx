import { useEffect, useState } from "react";
import { ScrollView, Text, View, StyleSheet, Image } from "react-native";

export default function Index() {
    // 5. Criar a interface Pokemon
    interface Pokemon {
        name: string;
        image: string;
    }
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    // 3. Atribuir os pokemons a uma variavel observável
    // const [pokemons, setPokemons] = useState([]);


    // 2. Buscar os Pokemons ao iniciar a tela
    useEffect(() => {
        buscarPokemons()
    }, [])

    // 1. Função para buscar os pokemons
    async function buscarPokemons() {
        try {
            const response = await fetch(
                "https://pokeapi.co/api/v2/pokemon/?limit=10"
            );
            const data = await response.json();

            //  6. Retornar os detalhes do pokemon
            const detalhes = await Promise.all(
                data.results.map(async (pokemon: Pokemon) => {
                    const res = await fetch(pokemon.url);
                    const detalhe = await res.json();
                    return {
                        name: pokemon.name,
                        image: detalhe.sprites.front_default,
                    }
                })
            )

            console.log(data);
            // setPokemons(data.results);
            setPokemons(detalhes)
        } catch (e) {
            console.log(e)
        }
    }

    /* 4. Criar o ScrollView para mostrar os pokemons em lista
    return (
         <ScrollView style={style.container}>
              {pokemons.map((pokemon) => (
                   <View key={pokemon.name}>
                        <Text style={style.text}>{pokemon.name}</Text>
                   </View>
              ))}
         </ScrollView>
    );*/
    return (
        <ScrollView contentContainerStyle={{
            gap: 16,
            padding: 16,

        }}>
            {pokemons.map((pokemon) => (
                <View key={pokemon.name} style={{ backgroundColor: 'green' + 50, padding: 20, borderRadius: 20}}>
                    <Text style={style.text}>{pokemon.name}</Text>

                    <View style={{ flexDirection: row }}>
                        <Image
                            source={{ uri: pokemon.image }}
                            style={{ width: 150, height: 150 }} />
                        <Image
                            source={{ uri: pokemon.image }}
                            style={{ width: 150, height: 150 }} />
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#CDCDCD' },
    text: {}
})