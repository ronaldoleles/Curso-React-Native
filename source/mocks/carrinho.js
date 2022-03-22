import topo from '../../assets/topo.png';
import logoVendedor from '../../assets/logo.png';
import antena2g from '../../assets/antena2g3g.png';
import antenaWifi from '../../assets/antenaWifi.png';
import modem from '../../assets/modem.png';
import node from '../../assets/nodeMcu.png';
import placaMae from '../../assets/placaMae.png';
import cpu from '../../assets/processador.png';
import gpu from '../../assets/placaVideo.png';
import wCooler from '../../assets/wCooler.png';

const carrinho ={
  topo:{
          titulo:"Carrinho",
          imagem: topo,

  },
  detalhes:{
        titulo:"Detalhes do Carrinho:",
        tituloProduto:"Kit IoT",
        descricao:"Um kit IoT que revoluciona a vida de muita gente",
        logoVendedor:logoVendedor,
        nomeVendedor:"Nuvem Cloud Shopping",
        preco:"R$ 109,00",
  },
  itens: {
    titulo: "Itens do Carrinho",
    lista: [
      {
        nome:"Antena 2g/3g", 
        imagem: antena2g,
      },
       {
        nome:"Antena WIFI", 
        imagem: antenaWifi,
      },
       {
        nome:"Modem", 
        imagem: modem,
      },
       {
        nome:"Node MCU", 
        imagem: node,
      },
    ]
  },
  outrosItens:{
    titulo:"Itens Relacionados",
    lista:[
      {
        nome: "Placa Mãe",
        imagem: placaMae,
      },
      {
        nome:"Processador",
        imagem:cpu,
      },
       {
        nome:"Placa de Vídeo",
        imagem:gpu,
      },
       {
        nome:"Water Cooler",
        imagem:wCooler,
      },
    ]
  }
}

export default carrinho;