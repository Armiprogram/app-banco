import { View, Text, StyleSheet,FlatList,Image, ImageBackground, Alert,TouchableOpacity} from 'react-native'
import React from 'react'
function mensaje (item1,item2){
  Alert.alert("Mensaje",item1,item2)
  console.log(item1,item2)
}
const CATEGORY_LIST=[
  {
    nombre:"Jimmy",
    numero: "02459420524895",
    "saldo": "2000",
   
  },
  {
    nombre:"Janeth",
    numero: "84568445645",
    "saldo": "3000",
  },
  {
    nombre:"Violeta",
    numero: "0524895",
    "saldo": "5000",
    
  },
  {
    nombre:"Najieb",
    numero: "024594205",
    "saldo": "1000",
  },
  {
    nombre:"Julio",
    numero: "020524895",
    "saldo": "1500",
  }
]
export default function ProductosScreen({navigation}) {
  return (
    <FlatList 
    data={CATEGORY_LIST}
    renderItem={({item})=> (
      < ImageBackground style={styles.container}
      source={ {uri:"https://static.vecteezy.com/system/resources/thumbnails/002/375/040/small/modern-white-background-free-vector.jpg"} }>
      <TouchableOpacity 
       onPress={()=>mensaje(item.nombre,item.saldo)}>
      
      <Text style={styles.txtC}>N-cuenta</Text>
      <Text style={styles.txtC}>{item.numero}</Text>
      </TouchableOpacity>
      
      </ImageBackground>

    )}
  
    />
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#696c',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection:"column"

    },
    txtC:{
      color:"#000000",
      fontSize: 20,
      textAlign:"right"
    },
    imgg:{
      width:100,
      height:100
      
       }
  });
