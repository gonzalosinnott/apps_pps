import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../database/firebase'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../styles/StyleHomeScreen'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

 
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

  const loadUserByQR = () => {
    navigation.replace("LoadQR")
  }

  const loadUserByForm = () => {
    navigation.replace("LoadForm")
  }

  const loadUserList = () => {
    navigation.replace("LoadList")
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
        imageStyle = {{opacity:0.4}}>

        <View style={ styles.exitSection }>
          <Text style={styles.exitText}>USUARIO: {auth.currentUser?.email}</Text>
          <TouchableOpacity style={styles.exitButton} onPress={handleSignOut}>
           <FontAwesomeIcon icon={ faPowerOff  }  size={ 32 } style={styles.faIcon}/>
          </TouchableOpacity>
        </View>

        
        <View style={styles.body}>

        <TouchableOpacity onPress={loadUserByQR} style={styles.buttonLoadData}>
          <Text style={styles.buttonText}>CARGA POR QR</Text>

        </TouchableOpacity>
        <TouchableOpacity onPress={loadUserByForm} style={styles.buttonLoadData}>
          <Text style={styles.buttonText}>CARGA POR FORMULARIO</Text>         
        </TouchableOpacity>
        
        <TouchableOpacity onPress={loadUserList} style={styles.buttonList}>
              <Text style={styles.buttonText}>VER LISTADO DE USUARIOS</Text>         
        </TouchableOpacity>

      </View>
      </ImageBackground>
    </View>
  );
 }

 export default HomeScreen
 
