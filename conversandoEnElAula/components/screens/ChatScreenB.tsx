import { ImageBackground, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../styles/StyleChatScreen'
 
 const ChatB = () => {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleReturn = () => {
    navigation.replace("Inicio")
    }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
        imageStyle = {{opacity:0.4}}>

      
        <View style={ styles.exitSection }>
          <TouchableOpacity style={styles.exitButton} onPress={handleReturn}>
              <Image source={require("../../assets/return.png")} style={styles.buttonImageExit} />
          </TouchableOpacity>
          <Text style={styles.exitText}>SALA DE CHAT</Text>
        </View>


      <View style={styles.body}>

      <TouchableOpacity  style={styles.chatHistory}>
            <Text style={styles.exitText}>HISTORIAL DE MENSAJES</Text>
            <Text style={styles.exitText}>(NO IMPLEMENTADO)</Text>
        </TouchableOpacity>

      <View style={styles.inputText}>
            <TextInput
              placeholder="Mensaje"

            />
          </View>
      </View>
      </ImageBackground>
    </View>
  );
 }

 export default ChatB
 
