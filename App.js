
import { StatusBar,StyleSheet, Text, SafeAreaView, Image, Dimensions,View } from 'react-native';
import imagem from './assets/topo.png'
import logoVendedor from './assets/logo.png'
const width = Dimensions.get('screen').width;



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style= {styles.topo} source={imagem}/>
      <Text style= {styles.tituloCarringo}>CARRINHO</Text>
      <Text style= {styles.detalhes} >Detalhes do Carrinho:</Text>
      <Text style= {styles.titulo}>Kit IoT</Text>
    <View style= {styles.vendedor}>
      <Image style= {styles.logoVendedor} source={logoVendedor}/>
      <Text style= {styles.nomeVendedor}>Nuvem Cloud Shopping</Text>
    </View>    
      <Text style= {styles.desc}>Um kit IoT que revoluciona a vida de muita gente</Text>
      <Text style= {styles.preco}>R$ 99,00</Text>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
topo:{
  width: "100%",
  height: 582/772 * width,
},

tituloCarringo:{
  position: "absolute",
  paddingVertical: 20,
  textAlign: "center",
  width:"100%",
  fontSize: 80,
  fontWeight: "bold",
  lineHeight: 40,
},
detalhes:{

  color:"black",
  fontWeight:"bold",
  fontSize: 40,
  lineHeight:70,
  textAlign: "center",
},
titulo:{
  
  color:"orange",
  fontWeight:"bold",
  fontSize: 60,
  lineHeight:70,
  textAlign: "center",
},
nomeVendedor:{
  color:"#a3a3a3",
  fontWeight:"bold",
  fontSize: 30,
  lineHeight:35,
  marginLeft: 10,
},
desc:{
  color:"#a3a3a3",
  fontWeight:"bold",
  fontSize: 30,
  lineHeight:70,
},
preco:{
  fontWeight:"bold",
  fontWeight:"bold",
  fontSize: 50,
  lineHeight:35,
  textAlign:'right',
},
logoVendedor:{
  width: 32,
  height: 32,
  marginLeft:30,
},
vendedor:{
  flexDirection: "row",
  padding: 10
}
});
