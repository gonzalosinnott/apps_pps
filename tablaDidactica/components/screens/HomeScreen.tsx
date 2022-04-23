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
        source={require("../../assets/background.png")}
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
                source={require("../../assets/argentina.png")}
                style={styles.buttonImageIconStyle}
              />
              <Text style={styles.buttonText}>ESPAÑOL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("../../assets/estadosunidos.png")}
                style={styles.buttonImageIconStyle}
              />
              <Text style={styles.buttonText}>INGLES</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("../../assets/brasil.png")}
                style={styles.buttonImageIconStyle}
              />
              <Text style={styles.buttonText}>PORTUGUÉS</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("../../assets/chromatic.png")}
                style={styles.buttonImageIconStyle}
              />
              <Text style={styles.buttonText}>COLORES</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("../../assets/numbers.png")}
                style={styles.buttonImageIconStyle}
              />
              <Text style={styles.buttonText}>NUMEROS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("../../assets/livestock.png")}
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
                source={require("../../assets/colors/black.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/colors/blue.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/colors/brown.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/colors/green.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/colors/orange.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/colors/pink.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/colors/purple.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/colors/red.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/colors/white.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/colors/yellow.png")}
                style={styles.buttonImageIcon}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Image
                source={require("../../assets/numbers/one.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/numbers/two.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/numbers/three.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/numbers/four.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/numbers/five.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/numbers/six.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/numbers/seven.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/numbers/eight.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/numbers/nine.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/numbers/ten.png")}
                style={styles.buttonImageIcon}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Image
                source={require("../../assets/animals/bird.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/animals/cat.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/animals/cow.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/animals/dog.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/animals/elephant.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/animals/fish.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/animals/horse.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/animals/owl.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/animals/rat.png")}
                style={styles.buttonImageIcon}
              />
              <Image
                source={require("../../assets/animals/turtle.png")}
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
