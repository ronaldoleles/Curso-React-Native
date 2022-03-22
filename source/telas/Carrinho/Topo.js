import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';

import Texto from '../../components/Texto';
const width = Dimensions.get('screen').width;

export default function Topo({titulo,imagem}){
  return<>
  <Image style= {styles.topo} source={imagem}/>
      <Texto style= {styles.tituloCarringo}>{titulo}</Texto>
      </>
}
const styles = StyleSheet.create({
topo:{
  width: "100%",
  height: 150/772 * width,
},
tituloCarringo:{
  position: "absolute",
  paddingVertical: 20,
  textAlign: "center",
  width:"100%",
  fontSize: 80,
  fontWeight:"bold",
  lineHeight: 40,
  
},
})