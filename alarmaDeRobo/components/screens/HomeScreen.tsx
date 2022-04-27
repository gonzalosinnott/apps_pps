import { ImageBackground, Text, TouchableOpacity, View, Image } from 'react-native'
import {useState} from 'react';
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

  let [flagImage, setFlagImage] = useState(true);

  const handleAlarm = () => {
    setFlagImage(previousState => !previousState);
  }

  let imageAlarm = flagImage ? require('../../assets/alarmOff.png') : require('../../assets/alarmOn.png');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{ opacity: 0.5 }}
      >
        <View style={styles.header}>
          <View style={styles.exitSection}>
            <Text style={styles.exitText}>
              USUARIO: {auth.currentUser?.email}
            </Text>
            <TouchableOpacity style={styles.exitButton} onPress={handleSignOut}>
              <FontAwesomeIcon
                icon={faPowerOff}
                size={32}
                style={styles.faIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.body}>
          <TouchableOpacity  onPress={handleAlarm} >
            <Image
              source={imageAlarm}
              style={styles.buttonImageIcon}
            />
          </TouchableOpacity>
        </View>

      </ImageBackground>
    </View>
  );
 }

 export default HomeScreen
 
