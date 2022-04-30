import { ImageBackground, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { auth } from '../database/firebase'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../styles/StyleQRScreen'


 
 const LoadQR = () => {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();


  const handleReturn = () => {
    navigation.replace("Inicio")
  }


  return (
    <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{ opacity: 0.2}}
      >
        <View style={styles.exitSection}>
          <TouchableOpacity style={styles.exitButton} onPress={handleReturn}>
            <Image
              source={require("../../assets/return.png")}
              style={styles.buttonImageExit}
            />
          </TouchableOpacity>
          <Text style={styles.exitText}>
            FUNCIONALIDAD FOTO (EN DESARROLLO)
          </Text>
        </View>

        <View style={styles.body}>
          <Image
            source={require("../../assets/camera.png")}
            style={styles.buttonImageMain}
          />
        </View>
        
      </ImageBackground>
  );
 }

 export default LoadQR
 
