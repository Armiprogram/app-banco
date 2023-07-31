import { View, Text, StyleSheet, Button, Image,ImageBackground,TouchableOpacity,Alert} from 'react-native'
import React from 'react'

export default function HomeScreen({navigation})  {
  function mensaje (item){
    Alert.alert("Mensaje",item)
    console.log(item)
  }
  return (
<ImageBackground style={styles.container}
    source={ {uri:"https://static.vecteezy.com/system/resources/thumbnails/002/375/040/small/modern-white-background-free-vector.jpg"} }
    >
    <View>
      <Text style={styles.txtT}>Mis productos</Text>
    </View>
    <View>
      <Text>                    </Text>
    </View>
    <View>
      <Text>                    </Text>
    </View>
    <TouchableOpacity style={styles.btn1}>
      <Text style={styles.txtA}>PRINCIPAL                                               </Text>
      <Text style={styles.txtA}>No-1236126321361                                                </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn2}
    onPress={()=>mensaje("Najieb Armijos")}>
      <Text style={styles.txtA}>Validar mis cuentas                                          </Text>
    
    </TouchableOpacity>

    <View>
      <Text>                    </Text>
    </View>
<View>
<Text style={styles.txtT}>Operaciones</Text>
</View>
<View>
      <Text>                    </Text>
    </View>
    <View>
      <Text>                    </Text>
    </View>
    <View style={styles.container2}>
    <TouchableOpacity style={styles.btn3}>
    <Text>  </Text>
      <Image style={styles.imgg}
      source={{uri:"https://static.vecteezy.com/system/resources/previews/005/720/321/original/smartphone-icon-cell-phone-symbol-free-vector.jpg"}}/>

    </TouchableOpacity>
    <TouchableOpacity style={styles.btn3}>
    <Text>  </Text>
    <Image style={styles.imgg}
      source={{uri:"https://static.vecteezy.com/system/resources/previews/005/720/321/original/smartphone-icon-cell-phone-symbol-free-vector.jpg"}}/>
      
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn3}>
    <Text>  </Text>
    <Text>  </Text>
      <Image style={styles.imgg}
      source={{uri:"https://static.vecteezy.com/system/resources/previews/005/720/321/original/smartphone-icon-cell-phone-symbol-free-vector.jpg"}}/>

    </TouchableOpacity>
    <TouchableOpacity style={styles.btn3}>
    <Text>  </Text>
    <Text>  </Text>
      <Image style={styles.imgg}
      source={{uri:"https://static.vecteezy.com/system/resources/previews/005/720/321/original/smartphone-icon-cell-phone-symbol-free-vector.jpg"}}/>
 
    </TouchableOpacity>
    </View>
    <View style={styles.container2}>
    <Text>Transferir </Text>
    <Text>  </Text>
    <Text>Servicios</Text>
    <Text>  </Text>
    <Text>Tarjetas</Text>
    <Text>  </Text>
    <Text>Operaciones</Text>
    <Text>  </Text>
    </View>
   </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  

  },
  container2: {
   flexDirection:"row"
  

  },
  txt2: {
    flexDirection:"column"
   
 
   },
  btn1:{
   backgroundColor:"#ffffffff",
   shadowColorColor:"#000000",
   marginBottom:1,
   elevation: 20,
   height:60
   
  },
  btn2:{
    backgroundColor:"#ffff00",
    shadowColorColor:"#000000",
    marginBottom:1,
    elevation: 20,
    height:60
    
   },
   btn3:{
    backgroundColor:"#ffffffff",
    shadowColorColor:"#000000",
    marginBottom:1,
    elevation: 20,
    height:60,
    flexDirection:"row",
    alignSelf:'flex-start'
    
   },
  txtA:{
fontSize:15
  },
  txtT:{
    fontSize:20
      },
      imgg:{
        width:50,
        height:50,
        alignSelf:'flex-end',
        flexDirection:'row'
         },
 });