import { View, Text} from 'react-native';

export default function App(){
  const [data, setData] = useState([])
  const url = 'http://localhost:3000/alunos'
  useEffect
  return (
    <View>
      <Text>Lista de Alunos</Text>
    </View>
  )
}