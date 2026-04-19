import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre</Text>

      <Text style={styles.texto}>
        O Serviço Nacional de Aprendizagem Industrial (SENAI) tem como objetivo estimular 
        a inovação industrial por meio da educação, 
        consultoria, pesquisa aplicada e serviços técnicos e tecnológicos que são decisivos para
        a competitividade das empresas do Estado e do Brasil.
        É um dos cincos maiores complexos de educação profissional do mundo e o maior da América Latina e reconhecido como modelo de educação profissional, pela qualidade dos serviços
       que promove e pela aposta em formatos educacionais diferenciados e inovadores,
       que capacitam profissionais em cursos presenciais e a distância, formando trabalhadores aptos a contribuir para o desenvolvimento da indústria.
Diretoria
Nossas
Unidades
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  texto: {
    textAlign: 'flex-start',
    fontSize: 16,
  },
});