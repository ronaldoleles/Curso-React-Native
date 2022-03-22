
import { StatusBar,StyleSheet, SafeAreaView, View, FlatList} from 'react-native'
import Topo from './source/telas/Carrinho/Topo'
import Detalhes from './source/telas/Carrinho/Detalhes'
import { useFonts, Montserrat_400Regular,Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Mocks from './source/mocks/carrinho';
import Item from './source/telas/Carrinho/Item';
import Texto from './source/components/Texto';
import Outros from './source/telas/Carrinho/Outros';



  
export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });
   if (!fontsLoaded) {
    return <View></View>;
  }
 
  return (
    <SafeAreaView style={styles.container}>
      

    <FlatList
      data = {Mocks.itens.lista}
      renderItem = {Item}
      keyExtractor = {({nome})=>nome}
      ListHeaderComponent={
        ()=>{
          return <>
         <Topo {...Mocks.topo}/>
         <Detalhes {...Mocks.detalhes}/>
         <Texto style={styles.titulo}>
           {Mocks.itens.titulo}
           </Texto>
          </>
        }
      }
      ListFooterComponent={
        ()=>{
          return <>
           <Texto style={styles.titulo}>
            {Mocks.outrosItens.titulo}
           </Texto>         
             <FlatList 
               data = {Mocks.outrosItens.lista}
                renderItem = {Item}
                 keyExtractor = {({nome})=>nome}
             />
          </>
        }      
      }
  /> 
      <StatusBar />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
titulo:{
      color:"orange",
      fontWeight: "bold",
      marginTop:30,
      marginBottom: 30,
      fontSize:35,
      marginLeft:10
  },
});
