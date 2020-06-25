import React, {useState, useRef} from 'react';
import { View, ScrollView, Text, StyleSheet,
  TextInput, TouchableOpacity, Dimensions, ImageBackground, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-snap-carousel';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');


export default function app() {

  const carouselRef = useRef(null);

const [lista, setLista] = useState([
  {
    title:"PAI RICO, PAI POBRE",
    text: "Este livro é a continuação da primeira obra de Robert Kiyosaki, focando-se na importância da educação financeira. Muitas pessoas acreditam que é preciso ter dinheiro para gerar dinheiro, mas isso não é verdade. Lembre-se sempre de que pode perder dinheiro em qualquer investimento, mesmo nos que são considerados pouco arriscados. É preciso saber investir.",
    release: 2018,
    img: 'https://img.wook.pt/images/pai-rico-pai-pobre-robert-t-kiyosaki/MXwxODIyMzU5NXwxMzkwNzY5NnwxNDY3NTg2ODAwMDAw/502x'
},
{
    title:"Pense e Enriqueça",
    text: "Henry Ford, George Eastman, King Gillette, Theodore Roosevelt, Woodrow Wilson, John Rockefeller, Thomas Edison e Alexander Graham Bell - são algumas das personagens de sucesso da história dos Estados Unidos que Napoleon Hill estuda em Pense e Enriqueça. ",
    release: 2020,
    img: 'https://img.wook.pt/images/pense-e-enriqueca-napoleon-hill/MXw1MjI5Nnw4MjM2M3wxMzgzNTIzMjAwMDAw/502x'
},
{
    title:"Ariel",
    text: "inclui alguns dos mais importantes poemas de Sylvia Plath, escritos no período que vai da edição do seu primeiro livro de poesia em 1960, até ao seu suicídio três anos mais tarde. Exprimem com notável intensidade e rigor os seus sentimentos ao longo de um período difícil da sua vida.» «Se estes poemas são desesperados, e destrutivos, são também ternos, abertos às coisas, e invulgarmente inteligentes, irónicos e atentos… São obras de uma grande pureza artística e, apesar do seu niilismo, de uma grande generosidade… ",
    release: 2020,
    img: 'https://img.wook.pt/images/ariel-sylvia-plath/MXwyMjQ1MDl8MzQwNTI0fDEzOTUzNjAwMDAwMDA=/502x'
},
{
    title:"Top Gun: MAVERICK",
    text: "Em Top Gun: Maverick, depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, o piloto à moda antiga Maverick (Tom Cruise) enfrenta drones e prova que o fator humano ainda é fundamental no mundo contemporâneo das guerras tecnológicas.",
    release: 2020,
    img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/topgun.jpeg'
},
{
    title:"BloodShot",
    text: "Bloodshot é um ex-soldado com poderes especiais: o de regeneração e a capacidade de se metamorfosear. ",
    release: 2020,
    img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blood.jpg'
},
{
    title:"Free Guy",
    text: "Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando ele descobre que é personagem em um brutalmente realista vídeo game de mundo aberto.",
    release: 2020,
    img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/freeguy.jpg'
},
]);


const [background, setBackground] = useState(lista[0].img);
const [activeIndex , setActiveIndex] = useState(0);

const _renderItem = ({item, index})=>{
return(
  <View>
    <TouchableOpacity>
      <Image
      source ={{uri:item.img}}
      style ={styles.carouselImg}
      />
      <Text style ={styles.carouselText}>{item.title}</Text>
      <Icon name ="book" size ={30} color ="#fff" style={styles.carouselIcon}
      />
      
    </TouchableOpacity>
  </View>
)
};
 return (
   <ScrollView style = {styles.container}>
     <View style ={{flex:1, height: screenHeight}}>
        <View style ={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
          <ImageBackground
          source ={{uri:background}}
          style = {styles.imgBg}
          blurRadius={5}>

            <View style ={styles.viewSearch}>
              <TextInput style ={styles.input}
                placeholder="Procurando algo?"/>

            
            <TouchableOpacity style={styles.icon}>
              <Icon name ="search" color="#000" size={25}/>
            </TouchableOpacity>

            </View>
            <Text style={{color:'#fff' , fontSize: 25, fontWeight:'bold',
             marginLeft:10, marginVertical:10}}>
              
              Livros Recentes
            </Text>
            <View style={styles.slideView}>
            <Carousel
            style={styles.carousel}
            ref={carouselRef}
            data ={lista}
            renderItem={_renderItem}
            sliderWidth ={screenWidth}
            itemWidth ={200}
            inactiveSlideOpacity={0.5}
            onSnapToItem ={(index)=>{
              setBackground(lista[index].img);
              setActiveIndex(index);
            }}
            />
            </View>
            <View style ={styles.moreInfo}>
              <View style={{marginTop:10}}>
                <Text style={styles.bookTitle}>{lista[activeIndex].title}</Text>
                <Text style={styles.bookDesc}>{lista[activeIndex].text}</Text>
              </View>
              <TouchableOpacity style={{marginRight:15, marginTop:10}}>
            <Icon name="favorite" color="red" size ={30}
           
            />
            </TouchableOpacity>
              </View>
          </ImageBackground>

        </View>
     </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  imgBg:{
    flex:1,
    width:null,
    height: null,
    opacity: 1,
    justifyContent:"flex-start",
    backgroundColor:"#000"
  },
  viewSearch:{
    marginTop:20,
    backgroundColor:"#fff",
    elevation:10,
    borderRadius:5,
    marginVertical:10,
    width:"95%",
    flexDirection: "row",
    alignSelf: "center"
  },
  input:{
    width:'90%',
    padding: 13,
    paddingLeft: 20,
    fontSize:17
  },
  icon:{
    position: 'absolute',
    right: 20,
    top: 15,
  },

  slideView:{
    width:'100%',
    height:350,
    justifyContent:'center',
    alignItems: 'center'
  },
  carousel:{
    flex:1,
    overflow: 'visible'
  },
  carouselImg:{
    alignSelf: 'center',
    width:200,
    height:300,
    borderRadius:12,
    backgroundColor:'rgba(0,0,0,0.5)'
  },
  carouselText:{
    padding:15,
    color:'#fff',
    position:'absolute',
    bottom:10,
    left:5,
    fontWeight:'bold'
  },
  carouselIcon:{
    position:'absolute',
    top:15,
    right:15
  },

  moreInfo:{
    backgroundColor: '#fff',
    width:screenWidth,
    height:screenHeight,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    flexDirection:'row',
    justifyContent: 'space-around',
  },
  bookTitle:{
    paddingLeft: 15,
    fontSize:25,
    fontWeight: 'bold',
    color:'#131313',
    marginBottom: 5,
  },
  bookDesc:{
    paddingLeft: 15,
    color: '#131313',
    fontSize: 14,
    fontWeight:'bold'
  }

});