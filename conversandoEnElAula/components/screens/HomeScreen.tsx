import { ImageBackground, Text, TouchableOpacity, View, Image } from 'react-native'
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

  const handleSalaA = () => {
    navigation.replace("Chat")
  }

  const handleSalaB = () => {
    navigation.replace("Chat")
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
        imageStyle = {{opacity:0.4}}>

      <View style={styles.header}>

        <View style={ styles.exitSection }>
          <Text style={styles.exitText}>USUARIO: {auth.currentUser?.email}</Text>
          <TouchableOpacity style={styles.exitButton} onPress={handleSignOut}>
              <Image source={require("../../assets/exit.png")} style={styles.buttonImageExit} />
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.body}>

        <Text style={styles.buttonText}>ELIJA UNA SALA</Text>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress = { handleSalaA } style={styles.buttonMain}>
            <Image source={require("../../assets/logoA.png")} style={styles.buttonImageMain} />
            <Text style={styles.buttonText}>PPS-4A</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = { handleSalaB } style={styles.buttonMain}>
            <Image source={require("../../assets/logoB.png")} style={styles.buttonImageMain} />
            <Text style={styles.buttonText}>PPS-4B</Text>
          </TouchableOpacity>
        </View>

      </View>
      </ImageBackground>
    </View>
  );
 }

 export default HomeScreen
 
