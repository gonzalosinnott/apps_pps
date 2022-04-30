import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import HideWithKeyboard from "react-native-hide-with-keyboard";
import { auth } from "../database/firebase";
import styles from "../styles/StyleFormScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faTimesCircle,
  faKey,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-native-modal";

const LoadForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isModalAlertVisible, setModalAlertVisible] = useState(false);
  const [isModalSpinnerVisible, setModalSpinnerVisible] = useState(false);

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
        imageStyle = {{opacity:0.3}}>
        
        <View style={styles.exitSection}>
          <TouchableOpacity style={styles.exitButton} onPress={handleReturn}>
            <Image
              source={require("../../assets/return.png")}
              style={styles.buttonImageExit}
            />
          </TouchableOpacity>
          <Text style={styles.exitText}>
            FUNCIONALIDAD FORMULARIO (EN DESARROLLO)
          </Text>
        </View>
        
        
        <View style={styles.body}> 


          <View style={styles.inputContainer}>
            <View style={styles.input}>
              <TextInput
                placeholder="Apellido   "
                placeholderTextColor="grey"
                style={styles.textInput}
                onChangeText={(text) => setEmail(text)}
              />
            </View>

            <View style={styles.input}>
              <TextInput
                placeholder="Nombre   "
                placeholderTextColor="grey"
                style={styles.textInput}
                onChangeText={(text) => setEmail(text)}
              />
            </View>

            <View style={styles.input}>
              <TextInput
                placeholder="DNI   "
                placeholderTextColor="grey"
                style={styles.textInput}
                onChangeText={(text) => setEmail(text)}
              />
            </View>

            <View style={styles.input}>
              <TextInput
                placeholder="Correo   "
                placeholderTextColor="grey"
                style={styles.textInput}
                onChangeText={(text) => setEmail(text)}
              />
            </View>

            <View style={styles.input}>
              <TextInput
                placeholder="Contraseña  "
                placeholderTextColor="grey"
                style={styles.textInput}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
              />
            </View>

            <View style={styles.input}>
              <TextInput
                placeholder="Confirmar Contraseña  "
                placeholderTextColor="grey"
                style={styles.textInput}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
              />
            </View>
          </View>

        </View>


         
      </ImageBackground>
    </View>
  );
};

export default LoadForm;
