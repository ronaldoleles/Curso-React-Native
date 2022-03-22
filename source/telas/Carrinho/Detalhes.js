import React from 'react'
import {Image, Text, StyleSheet,View} from 'react-native'


import Texto from '../../components/Texto'

export default function Detalhes({titulo, tituloProduto, nomeVendedor, logoVendedor,descricao,preco}){
  return<>
  <Texto style= {styles.detalhes} >
    {titulo}
  </Texto>
      <Texto style= {styles.titulo}>{tituloProduto}</Texto>
    <View style= {styles.vendedor}>
      <Image style= {styles.logoVendedor} source={logoVendedor}/>
      <Texto style= {styles.nomeVendedor}>{nomeVendedor}</Texto>
    </View>    
      <Texto style= {styles.desc}>{descricao}</Texto>
      <Texto style= {styles.preco}>{preco}</Texto>
      </>
}
const styles = StyleSheet.create({
detalhes:{
  color:"black",
 fontWeight:'bold',
  fontSize: 40,
  lineHeight:70,
  textAlign: "center",
},
titulo:{ 
  color:"orange",
fontWeight:'bold',
  fontSize: 60,
  lineHeight:70,
  textAlign: "center",
},
nomeVendedor:{
  color:"#a3a3a3",
  fontWeight:'bold',
  fontSize: 30,
  lineHeight:35,
  marginLeft: 10,
},
desc:{
  color:"#a3a3a3",
  fontWeight:'bold',
  fontSize: 30,
  lineHeight:70,
  marginLeft:10
},
preco:{
  fontWeight:"bold",
  fontSize: 40,
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
},
})