import { ImageBackground, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../database/firebase'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../styles/StyleHomeScreen'

 
 const HomeScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={ styles.exitSection }>
          <Text style={styles.exitText}>USUARIO: {auth.currentUser?.email}</Text>
          <TouchableOpacity style={styles.exitButton} onPress={handleSignOut}>
            <Text style={styles.buttonText}>CERRAR SESION</Text>
          </TouchableOpacity>
        </View>
      </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.button} >
            <Image source={require("D:/Tecnicatura_en_Programación/4° Cuatrimestre/PPS/app_pps/02 - TablaDidactica/assets/argentina.png")} style={styles.buttonImageIconStyle}/>            
            <Text style={styles.buttonText}>ESPAÑOL</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button} >
            <Image source={require("D:/Tecnicatura_en_Programación/4° Cuatrimestre/PPS/app_pps/02 - TablaDidactica/assets/estadosunidos.png")} style={styles.buttonImageIconStyle}/>           
            <Text style={styles.buttonText}>INGLES</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} >
            <Image source={require("D:/Tecnicatura_en_Programación/4° Cuatrimestre/PPS/app_pps/02 - TablaDidactica/assets/brasil.png")} style={styles.buttonImageIconStyle}/>           
            <Text style={styles.buttonText}>PORTUGUÉS</Text>
          </TouchableOpacity>       
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.button} ><Image source={require("D:/Tecnicatura_en_Programación/4° Cuatrimestre/PPS/app_pps/02 - TablaDidactica/assets/chromatic.png")} style={styles.buttonImageIconStyle}/>           
            <Text style={styles.buttonText}>COLORES</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button} >
            <Image source={require("D:/Tecnicatura_en_Programación/4° Cuatrimestre/PPS/app_pps/02 - TablaDidactica/assets/numbers.png")} style={styles.buttonImageIconStyle}/>           
            <Text style={styles.buttonText}>NUMEROS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} > 
            <Image source={require("D:/Tecnicatura_en_Programación/4° Cuatrimestre/PPS/app_pps/02 - TablaDidactica/assets/livestock.png")} style={styles.buttonImageIconStyle}/>          
            <Text style={styles.buttonText}>ANIMALES</Text>
          </TouchableOpacity>       
        </View>

      <View style={styles.body}>

      </View>

    </View>
  );
 }

 export default HomeScreen
 
