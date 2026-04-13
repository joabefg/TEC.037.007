import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Aluno } from '@/types/aluno';

export default function App() {
     //const [data, setData] = useState([]);
     const [data, setData] = useState<Aluno[]>([]);
     const [loading, setLoading] = useState(true);


     // IMPORTANTE: Se usar celular físico, troque 'localhost' pelo seu IP (ex: 192.168.x.x)
     const url = 'http://localhost:3000/alunos';

     useEffect(() => {
          fetch(url)
               .then((response) => response.json())
               .then((json) => setData(json))
               .catch((error) => console.error(error))
               .finally(() => setLoading(false));
     }, []);

     return (
          <View style={{ flex: 1, padding: 24, backgroundColor: '#cdcdcd' }}>
               <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20, marginTop: 20 }}>
                    Lista de Alunos
               </Text>

               <View style={[styles.row, styles.header]}>
                    <Text style={styles.cell}>Nome</Text>
                    <Text style={styles.cell}>Média</Text>
               </View>

               <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                         <View style={styles.row}>
                              <Text style={styles.cell}>{item.nome}</Text>
                              <Text style={styles.cell}>{item.media}</Text>
                         </View>
                    )}
               />
          </View>
     );
}

const styles = StyleSheet.create({
     container: { flex: 1, padding: 20, paddingTop: 50 },
     title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
     row: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#000', paddingVertical: 10 },
     header: { backgroundColor: '#f0f0f0' },
     cell: { flex: 1, textAlign: 'center', fontSize: 16 }
});