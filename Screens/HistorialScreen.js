import { View, Text,StyleSheet,SectionList, Image, ImageBackground,FlatList,Button} from 'react-native'
import React from 'react'
import transaccionesJSON from './transacciones.json'
export default function HistorialScreen(navigation) {

const datos= transaccionesJSON
const transac=[
    {title:"Tus transacciones", data: datos.transacciones }
]

  return (
    <ImageBackground style={styles.container}
    source={ {uri:"https://static.vecteezy.com/system/resources/thumbnails/002/375/040/small/modern-white-background-free-vector.jpg"} }
    >
<SectionList
sections={transac}
renderItem={({item})=>(
    < View>
    
    <Text>{item.numero_cuenta} </Text>
    <Text>{item.titular} </Text>
    <Text>{item.fecha} </Text>
    <Text>{item.descripcion} </Text>
    <Text style={styles.txtC}>{item.monto} </Text>
    <Text style={styles.txtB}>{item.saldo_actual} </Text>
    <Text>--------------------</Text>
    </View>
) }
/>

    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',

    },
    txtC:{
      color:"#ff0000",
      fontSize: 20,
      textAlign:"right"
    },
    txtB:{
      color:"#00ff40",
      fontSize: 20,
      textAlign:"right"
    },
    imgg:{
      width:100,
      height:100
      
       },
       container2:{
      
       padding: 0,
       alignSelf:'baseline',
       alignItems: 'center',
       justifyContent: 'center',
  fontSize:25
       }
  });