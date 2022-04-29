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

  const handlePhoto = () => {
    navigation.replace("TakePhoto")
  }

  const handlePositiveVote = () => {
    navigation.replace("PositiveVote")
  }

  const handleNegativeVote = () => {
    navigation.replace("NegativeVote")
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{ opacity: 0.4 }}
      >
        <View style={styles.body}>
        
          <View style={styles.exitSection}>
            <Text style={styles.exitText}>
              USUARIO: {auth.currentUser?.email}
            </Text>
            <TouchableOpacity style={styles.exitButton} onPress={handleSignOut}>
              <Image source={require("../../assets/logout.png")} style={styles.buttonImageExit} />
            </TouchableOpacity>
          </View>
        

          <View style={{ flexDirection: "row" }}>

            <TouchableOpacity onPress = { handlePhoto } style={styles.buttonMain}>
              <Image source={require("../../assets/positive-vote.png")} style={styles.buttonImageMain} />
              <Text style={styles.buttonText}>COSAS POSITIVAS</Text>
              <Image source={require("../../assets/camera.png")} style={styles.buttonImageVote}/>
            </TouchableOpacity>

            <TouchableOpacity onPress = { handlePhoto } style={styles.buttonMain}>
              <Image source={require("../../assets/negative-vote.png")} style={styles.buttonImageMain} />
              <Text style={styles.buttonText}>COSAS NEGATIVAS</Text>
              <Image source={require("../../assets/camera.png")} style={styles.buttonImageVote}/>
            </TouchableOpacity>

          </View>

          <TouchableOpacity onPress = { handlePositiveVote } style={styles.buttonVote}>
            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start', }}>
              <Image source={require("../../assets/positive-vote.png")} style={styles.buttonImageVote} />
              <Text style={styles.buttonText}>VOTAR COSAS POSITIVAS</Text>              
            </View>
          </TouchableOpacity> 

          <TouchableOpacity onPress = { handleNegativeVote } style={styles.buttonVote}>
          <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start', }}>
              <Image source={require("../../assets/negative-vote.png")} style={styles.buttonImageVote} />
              <Text style={styles.buttonText}>VOTAR COSAS NEGATIVAS</Text>              
            </View>
          </TouchableOpacity>         

        </View>
      </ImageBackground>
    </View>
  );
 }

 export default HomeScreen
 
