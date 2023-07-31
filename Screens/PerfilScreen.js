import { View, Text, ImageBackground,StyleSheet, TouchableOpacity,Image} from 'react-native'
import React from 'react'

export default function PerfilScreen({navigation}) {
  return (
<ImageBackground style={styles.container}
    source={ {uri:"https://static.vecteezy.com/system/resources/thumbnails/002/375/040/small/modern-white-background-free-vector.jpg"} }
    >
    <View>
      <Text style={styles.txtT}>Información de Perfil</Text>
    </View>
    <View>
      <Text>                    </Text>
    </View>
    <View>
      <Text>                    </Text>
    </View>
    <TouchableOpacity style={styles.btn1}>
    <Image style={styles.imgg}
      source={{uri:"https://static.vecteezy.com/system/resources/previews/005/720/321/original/smartphone-icon-cell-phone-symbol-free-vector.jpg"}}/>
      <Text style={styles.txtA}>Nombre completo                                               </Text>
      <Text style={styles.txtA}>Najieb Armijos                                                </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn1}>
    <Image style={styles.imgg}
      source={{uri:"https://static.vecteezy.com/system/resources/previews/005/720/321/original/smartphone-icon-cell-phone-symbol-free-vector.jpg"}}/>
      <Text style={styles.txtA}>Saludo de bienvenida                                            </Text>
      <Text style={styles.txtA}>Hey que tal                                                     </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn1}>
    <Image style={styles.imgg}
      source={{uri:"https://static.vecteezy.com/system/resources/previews/005/720/321/original/smartphone-icon-cell-phone-symbol-free-vector.jpg"}}/>
      <Text style={styles.txtA}>Autorización de datos                                            </Text>
      <Text style={styles.txtA}>Autorizado                                                       </Text>
    </TouchableOpacity>
    <View>
      <Text>                    </Text>
    </View>
<View>
<Text style={styles.txtT}>Mantén actualizada tú Información</Text>
</View>
<View>
      <Text>                    </Text>
    </View>
    <View>
      <Text>                    </Text>
    </View>
    <TouchableOpacity style={styles.btn1}>
    <Image style={styles.imgg}
      source={{uri:"https://static.vecteezy.com/system/resources/previews/005/720/321/original/smartphone-icon-cell-phone-symbol-free-vector.jpg"}}/>
 <Text style={styles.txtA}>Número celular                                                                         </Text>
      <Text style={styles.txtA}>0987485839                                                                             </Text>
      
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn1}>
    <Image style={styles.imgg}
      source={{uri:"https://static.vecteezy.com/system/resources/previews/005/720/321/original/smartphone-icon-cell-phone-symbol-free-vector.jpg"}}/>
      <Text style={styles.txtA}>correo electrónico                                                                      </Text>
      <Text style={styles.txtA}>najieb-armijos@hotmail.com                                                              </Text>
    </TouchableOpacity>
   </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  

  },
  btn1:{
   backgroundColor:"#ffffffff",
   shadowColorColor:"#000000",
   marginBottom:1,
   elevation: 20,
   height:60
   
  },
  txtA:{
fontSize:15,
alignItems: 'flex-start',
justifyContent: 'flex-start',
textAlign:"right"
  },
  txtT:{
    fontSize:20
      },
      imgg:{
        width:25,
        height:25,
        alignSelf:'flex-end'
         },
 });