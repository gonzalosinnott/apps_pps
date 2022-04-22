import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { auth } from "../database/firebase";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import styles from "../styles/StyleHomeScreen";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/background.png")}
        resizeMode="cover"
        style={styles.image}
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

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/argentina.png")}
                style={styles.buttonImageIconStyle}
              />
              <Text style={styles.buttonText}>ESPAÑOL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/estadosunidos.png")}
                style={styles.buttonImageIconStyle}
              />
              <Text style={styles.buttonText}>INGLES</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/brasil.png")}
                style={styles.buttonImageIconStyle}
              />
              <Text style={styles.buttonText}>PORTUGUÉS</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/chromatic.png")}
                style={styles.buttonImageIconStyle}
              />
              <Text style={styles.buttonText}>COLORES</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/numbers.png")}
                style={styles.buttonImageIconStyle}
              />
              <Text style={styles.buttonText}>NUMEROS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/livestock.png")}
                style={styles.buttonImageIconStyle}
              />
              <Text style={styles.buttonText}>ANIMALES</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.body}>
          <View style={{ flexDirection: "row", marginTop: 40}}>
            <View style={{ flexDirection: "column" }}>
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/colors/black.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/colors/blue.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/colors/brown.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/colors/green.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/colors/orange.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/colors/pink.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/colors/purple.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/colors/red.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/colors/white.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/colors/yellow.png")}
                style={styles.buttonImageIcon}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/numbers/one.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/numbers/two.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/numbers/three.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/numbers/four.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/numbers/five.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/numbers/six.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/numbers/seven.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/numbers/eight.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/numbers/nine.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/numbers/ten.png")}
                style={styles.buttonImageIcon}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/animals/bird.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/animals/cat.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/animals/cow.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/animals/dog.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/animals/elephant.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/animals/fish.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/animals/horse.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/animals/owl.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/animals/rat.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("D:/TecnicaturaEnProgramación/4°Cuatrimestre/PPS/app_pps/02-TablaDidactica/assets/animals/turtle.png")}
                style={styles.buttonImageIcon}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
