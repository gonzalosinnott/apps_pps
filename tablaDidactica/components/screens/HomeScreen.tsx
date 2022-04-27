import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {useState} from 'react';
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

  const [image1, setImage1] = useState(require("../../assets/numbers/one.png"));
  const [image2, setImage2] = useState(require("../../assets/numbers/two.png"));
  const [image3, setImage3] = useState(require("../../assets/numbers/three.png"));
  const [image4, setImage4] = useState(require("../../assets/numbers/four.png"));
  const [image5, setImage5] = useState(require("../../assets/numbers/five.png"));
  const [image6, setImage6] = useState(require("../../assets/numbers/six.png"));
  const [image7, setImage7] = useState(require("../../assets/numbers/seven.png"));
  const [image8, setImage8] = useState(require("../../assets/numbers/eight.png"));
  const [image9, setImage9] = useState(require("../../assets/numbers/nine.png"));
  const [image10, setImage10] = useState(require("../../assets/numbers/ten.png"));

  const setNumbers = () => {
    setImage1(require("../../assets/numbers/one.png"));
    setImage2(require("../../assets/numbers/two.png"));
    setImage3(require("../../assets/numbers/three.png"));
    setImage4(require("../../assets/numbers/four.png"));
    setImage5(require("../../assets/numbers/five.png"));
    setImage6(require("../../assets/numbers/six.png"));
    setImage7(require("../../assets/numbers/seven.png"));
    setImage8(require("../../assets/numbers/eight.png"));
    setImage9(require("../../assets/numbers/nine.png"));
    setImage10(require("../../assets/numbers/ten.png"));
  };

  const setColors = () => {
    setImage1(require("../../assets/colors/black.png"));
    setImage2(require("../../assets/colors/blue.png"));
    setImage3(require("../../assets/colors/brown.png"));
    setImage4(require("../../assets/colors/green.png"));
    setImage5(require("../../assets/colors/orange.png"));
    setImage6(require("../../assets/colors/pink.png"));
    setImage7(require("../../assets/colors/purple.png"));
    setImage8(require("../../assets/colors/red.png"));
    setImage9(require("../../assets/colors/white.png"));
    setImage10(require("../../assets/colors/yellow.png"));
  };

  const setAnimals = () => {
    setImage1(require("../../assets/animals/bird.png"));
    setImage2(require("../../assets/animals/cat.png"));
    setImage3(require("../../assets/animals/cow.png"));
    setImage4(require("../../assets/animals/dog.png"));
    setImage5(require("../../assets/animals/elephant.png"));
    setImage6(require("../../assets/animals/fish.png"));
    setImage7(require("../../assets/animals/horse.png"));
    setImage8(require("../../assets/animals/owl.png"));
    setImage9(require("../../assets/animals/rat.png"));
    setImage10(require("../../assets/animals/turtle.png"));
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
            <TouchableOpacity style={styles.button} onPress={setNumbers}>
              <Image
                source={require("../../assets/numbers.png")}
                style={styles.buttonImageIconStyle}
              />
              <Text style={styles.buttonText}>NUMEROS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={setColors}>
              <Image
                source={require("../../assets/chromatic.png")}
                style={styles.buttonImageIconStyle}
              />
              <Text style={styles.buttonText}>COLORES</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={setAnimals}>
              <Image
                source={require("../../assets/livestock.png")}
                style={styles.buttonImageIconStyle}
              />
              <Text style={styles.buttonText}>ANIMALES</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.body}>
          <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.buttonObject}>
                <Image
                  source={image1}
                  style={styles.buttonImageIcon}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonObject}>
                <Image
                  source={image2}
                  style={styles.buttonImageIcon}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonObject}>
                <Image
                  source={image3}
                  style={styles.buttonImageIcon}
                />
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.buttonObject}>
                <Image
                  source={image4}
                  style={styles.buttonImageIcon}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonObject}>
                <Image
                  source={image5}
                  style={styles.buttonImageIcon}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonObject}>
                <Image
                  source={image6}
                  style={styles.buttonImageIcon}
                />
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.buttonObject}>
                <Image
                  source={image7}
                  style={styles.buttonImageIcon}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonObject}>
                <Image
                  source={image8}
                  style={styles.buttonImageIcon}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonObject}>
                <Image
                  source={image9}
                  style={styles.buttonImageIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity style={styles.buttonObject}>
                <Image
                  source={image10}
                  style={styles.buttonImageIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
