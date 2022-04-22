import { useNavigation  } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import HideWithKeyboard from 'react-native-hide-with-keyboard'
import { auth } from '../database/firebase'
import styles from '../styles/StyleLoginScreen'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserSecret, faUserLock, faUser, faTimesCircle, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Modal from "react-native-modal";

const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isModalAlertVisible, setModalAlertVisible] = useState(false);
  const [isModalSpinnerVisible, setModalSpinnerVisible] = useState(false);

  const win = Dimensions.get('window');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const toggleModalAlert = () => {
    setModalAlertVisible(!isModalAlertVisible);
  };

  const toggleSpinnerAlert = () => {
    setModalSpinnerVisible(true);
    setTimeout(() => {
      setModalSpinnerVisible(false);
      setModalAlertVisible(true);
    }, 1200);
  };  

  const onPressAdminHandler = () => {
    setEmail("admin@admin.com");
    setPassword("admin123");
  }

  const onPressTeacherHandler = () => {
    setEmail("user@mail.com");
    setPassword("user123");
  }

  const onPressStudentHandler = () => {
    setEmail("anon@mail.com");
    setPassword("anon123");
  }

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged(user => {
      if (user){
        navigation.replace('Inicio')
      }
    })
    return unsuscribe
  }, [])

  const handelSignUp = async () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registro de usuario como: ', user?.email);        
      })
      .catch(error => {
        toggleSpinnerAlert();  
        switch (error.code) {  
            case 'auth/invalid-email':
              setErrorMsg('Formato de email incorrecto.');
              break;                       
            case 'auth/email-already-in-use':
              setErrorMsg('El email ingresado ya esta registrado.');
              break;                    
            case 'auth/missing-email':
              setErrorMsg('Ingrese el mail.');
              break; 
            case 'auth/internal-error':
              setErrorMsg('Ingrese la contraseña.');
              break;
            default:
              setErrorMsg('La contraseña debe tener mas de 6 caracteres');
              break;   
        }
    })
  }

  const handleLogin = async () => {
      await auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Inicio de sesion como: ', user?.email);
        if (user){
          navigation.replace('Inicio')
        }
      })
      .catch(error => { 
        toggleSpinnerAlert();  
         switch (error.code) { 
            case 'auth/invalid-email':
              setErrorMsg('Formato de email incorrecto.');
              break;                   
            case 'auth/user-not-found':
              setErrorMsg('Usuario no registrado.');
              break;                 
            case 'auth/wrong-password':
              setErrorMsg('Contraseña incorrecta.');
              break;
            case 'auth/internal-error':
              setErrorMsg('Ingrese contraseña.');
              break;;
            default:
                alert(error.message)  
                break; 
        }
    }) 
  } 

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/05-ConversandoEnElAula/assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
      <View style={styles.body}>
        
          <Text style={styles.title}>LEMON</Text>
          <Image
              style={{
                width: win.width / 4,
                height: win.width / 4,
                resizeMode: "contain",
                alignSelf: "center",
              }}
              source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/05-ConversandoEnElAula/assets/logo.png")}
            />
          <Text style={styles.title}>CHAT</Text>


        <View style={styles.inputContainer}>

          <View style={styles.inputMail}>
            <FontAwesomeIcon style={styles.inputImage} icon={ faEnvelope }  size={ 15 } />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={styles.inputPassword}>
            <FontAwesomeIcon style={styles.inputImage} icon={ faKey }  size={ 15 } />
            <TextInput
              placeholder="Contraseña"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
          </View>
        </View>

        <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={handleLogin} style={styles.buttonLogin}>
              <Text style={styles.buttonText}>INICIAR SESION</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handelSignUp}
              style={styles.buttonRegister}
            >
              <Text style={styles.buttonText}>REGISTRARSE</Text>
            </TouchableOpacity>
          </View>


        <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: '100%',
            }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={onPressAdminHandler}
                style={styles.buttonRole}
              >
                <FontAwesomeIcon
                  icon={faUserLock}
                  size={32}
                  style={styles.faIcon}
                />
                <Text style={styles.roleText}>ADMIN</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={onPressTeacherHandler}
                style={styles.buttonRole}
              >
                <FontAwesomeIcon
                  icon={faUser}
                  size={32}
                  style={styles.faIcon}
                />
                <Text style={styles.roleText}>USUARIO</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={onPressStudentHandler}
                style={styles.buttonRole}
              >
                <FontAwesomeIcon
                  icon={faUserSecret}
                  size={32}
                  style={styles.faIcon}
                />
                <Text style={styles.roleText}>ANONIMO</Text>
              </TouchableOpacity>
            </View>
          </View>

        
            
      </View>   
      <View style={styles.footer}>
        <HideWithKeyboard>
          <Text style={styles.footerText}>
            &copy; {new Date().getFullYear()} Copyright - LEMON SOFTWARE
          </Text>
        </HideWithKeyboard>

        <View>
            <Modal isVisible={isModalAlertVisible}>
              <View style={styles.modalContainer}>
                <ImageBackground
                  source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/05-ConversandoEnElAula/assets/background.png")}
                  resizeMode="cover"
                  borderRadius={25}
                  style={styles.image}
                >
                  <View style={styles.modalBody}>
                    <Text style={styles.modalText}>{errorMsg}</Text>
                    <TouchableOpacity
                      onPress={toggleModalAlert}
                      style={styles.escapeButton}
                    >
                      <FontAwesomeIcon
                        icon={faTimesCircle}
                        size={40}
                        style={styles.faIcon}
                      />
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              </View>
            </Modal>
          </View>

        <View>
          <Modal isVisible={isModalSpinnerVisible}>
            <ActivityIndicator size="large" color="3c8e99" />
          </Modal>
        </View>

      </View>
      </ImageBackground>  
    </View>
  );
}

export default LoginScreen