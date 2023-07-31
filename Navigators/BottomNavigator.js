import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import ProductosScreen from "../Screens/ProductosScreen";
import HistorialScreen from "../Screens/HistorialScreen";
import PerfilScreen from "../Screens/PerfilScreen";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { Image } from "react-native";
const Tab = createBottomTabNavigator();
import HomeScreen from "../Screens/HomeScreen";
function MyTabs(){
    return(
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Home" component={HomeScreen}
                 
                options={{ 
                    tabBarLabel:"Inicio",
                    tabBarIcon:()=>(
<FontAwesome name="home" size={24} color="black" />
                    ),
                    
                    headerTitle:"BANCO PICHINCHA"
                   
                }} 
                />

                <Tab.Screen
                 name="Mis Productos" 
                 component={ProductosScreen}
                 options={{ 
                    tabBarIcon:()=>(
<MaterialIcons name="money" size={24} color="black" />
                    ),
                    headerTitle:"Mis Productos"
                }} 
                
                />
                    <Tab.Screen
                 name="Historial" 
                 component={HistorialScreen}
                 options={{ 
                    tabBarIcon:()=>(
<MaterialIcons name="list" size={24} color="black" />
                    ),
                    headerTitle:"Historial"
                }} 
                
                />
                        <Tab.Screen
                 name="Perfil" 
                 component={PerfilScreen}
                 options={{ 
                    tabBarIcon:()=>(
<MaterialIcons name="person" size={24} color="black" />
                    ),
                    headerTitle:"Perfil"
                }} 
                
                />
                
            </Tab.Navigator>
            
    )
}
export default function BottomNavigation(){
 return(
    <NavigationContainer>
        <MyTabs/>
    </NavigationContainer>
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