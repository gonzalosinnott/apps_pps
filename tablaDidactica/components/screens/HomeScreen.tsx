import { Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import { useState } from 'react';
import React from "react";
import { auth } from "../database/firebase";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import styles from "../styles/StyleHomeScreen";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Audio } from 'expo-av';


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

  const [languageFlag, setLanguageFlag] = useState(1);
  const [objectFlag, setObjectFlag] = useState(1);

  const [AVPlaybackSource, setAVPlaybackSource] = useState(1);
  const [sound1, setSound1] = useState(require("../../assets/test.mp3"));
  
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

  const [text1, setText1] = useState("UNO");
  const [text2, setText2] = useState("DOS");
  const [text3, setText3] = useState("TRES");
  const [text4, setText4] = useState("CUATRO");
  const [text5, setText5] = useState("CINCO");
  const [text6, setText6] = useState("SEIS");
  const [text7, setText7] = useState("SIETE");
  const [text8, setText8] = useState("OCHO");
  const [text9, setText9] = useState("NUEVE");
  const [text10, setText10] = useState("DIEZ");

  const setNumbersSpanish = () => {
    setText1("UNO");
    setText2("DOS");
    setText3("TRES");
    setText4("CUATRO");
    setText5("CINCO");
    setText6("SEIS");
    setText7("SIETE");
    setText8("OCHO");
    setText9("NUEVE");
    setText10("DIEZ");
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

  const setNumbersEnglish = () => {
    setText1("ONE");
    setText2("TWO");
    setText3("THREE");
    setText4("FOUR");
    setText5("FIVE");
    setText6("SIX");
    setText7("SEVEN");
    setText8("EIGHT");
    setText9("NINE");
    setText10("TEN");
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

  const setNumbersPortuguese = () => {
    setText1("UM");
    setText2("DOIS");
    setText3("TRÊS");
    setText4("QUATRO");
    setText5("CINCO");
    setText6("SEIS");
    setText7("SETE");
    setText8("OITO");
    setText9("NOVE");
    setText10("DEZ");
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

  const setColorsSpanish = () => {
    setText1("NEGRO");
    setText2("AZUL");
    setText3("MARRON");
    setText4("VERDE");
    setText5("NARANJA");
    setText6("ROSA");
    setText7("PURPURA");
    setText8("ROJO");
    setText9("BLANCO");
    setText10("AMARILLO");
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

  const setColorsEnglish = () => {
    setText1("BLACK");
    setText2("BLUE");
    setText3("BROWN");
    setText4("GREEN");
    setText5("ORANGE");
    setText6("PINK");
    setText7("PURPLE");
    setText8("RED");
    setText9("WHITE");
    setText10("YELLOW");
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

  const setColorsPortuguese = () => {
    setText1("PRETO");
    setText2("AZUL");
    setText3("MARROM");
    setText4("VERDE");
    setText5("LARANJA");
    setText6("ROSA");
    setText7("ROXA");
    setText8("VERMELHO");
    setText9("BRANCO");
    setText10("AMARELO");
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

  const setAnimalsSpanish = () => {
    setText1("PAJARO");
    setText2("GATO");
    setText3("VACA");
    setText4("PERRO");
    setText5("ELEFANTE");
    setText6("PEZ");
    setText7("CABALLO");
    setText8("BUHO");
    setText9("RATA");
    setText10("TORTUGA");
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

  const setAnimalsEnglish = () => {
    setText1("BIRD");
    setText2("CAT");
    setText3("COW");
    setText4("DOG");
    setText5("ELEPHANT");
    setText6("FISH");
    setText7("HORSE");
    setText8("OWL");
    setText9("RAT");
    setText10("TURTLE");
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

  const setAnimalsPortuguese = () => {
    setText1("PÁSSARO");
    setText2("GATO");
    setText3("VACA");
    setText4("CACHORRO");
    setText5("ELEFANTE");
    setText6("PEIXE");
    setText7("CAVALO");
    setText8("CORUJA");
    setText9("RATAZANA");
    setText10("TARTARUGA");
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

  var setItemsAtr = (language: number, object: number) => {
    setLanguageFlag(language);
    setObjectFlag(object);
    console.log(language + " " + object);

    switch (language) {
      case 1:
        switch (object) {
          case 1:
            setNumbersSpanish();
            console.log("Numbers Spanish");
            break;
          case 2:
            setColorsSpanish();
            console.log("Colors Spanish");
            break;
          case 3:
            setAnimalsSpanish();
            console.log("Animals Spanish");
            break;
        }
        break;
      case 2:
        switch (object) {
          case 1:
            setNumbersEnglish();
            console.log("Numbers English");
            break;
          case 2:
            setColorsEnglish();
            console.log("Colors English");
            break;
          case 3:
            setAnimalsEnglish();
            console.log("Animals English");
            break;
        }
        break;
      case 3:
        switch (object) {
          case 1:
            setNumbersPortuguese();
            console.log("Numbers Portuguese");
            break;
          case 2:
            setColorsPortuguese();
            console.log("Colors Portuguese");
            break;
          case 3:
            setAnimalsPortuguese();
            console.log("Animals Portuguese");
            break;
        }
        break;
    }
  };

  async function playSound(aVPlayback:typeof AVPlaybackSource) {
    try {
       const { sound: soundObject, status } = await 
          Audio.Sound.createAsync(aVPlayback, { shouldPlay: true });
       await soundObject.playAsync();
       } catch (error) { console.log(error); }
   }

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
            <TouchableOpacity
              style={styles.buttonLanguage}
              onPress={() => setItemsAtr(1, objectFlag)}
            >
              <Image
                source={require("../../assets/argentina.png")}
                style={styles.buttonImageIconStyle}
              />
              <Text style={styles.buttonText}>ESPAÑOL</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonLanguage}
              onPress={() => setItemsAtr(2, objectFlag)}
            >
              <Image
                source={require("../../assets/estadosunidos.png")}
                style={styles.buttonImageIconStyle}
              />
              <Text style={styles.buttonText}>INGLES</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonLanguage}
              onPress={() => setItemsAtr(3, objectFlag)}
            >
              <Image
                source={require("../../assets/brasil.png")}
                style={styles.buttonImageIconStyle}
              />
              <Text style={styles.buttonText}>PORTUGUÉS</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.buttonCategory}
              onPress={() => setItemsAtr(languageFlag, 1)}
            >
              <Image
                source={require("../../assets/numbers.png")}
                style={styles.buttonImageIconStyle}
              />
              <Text style={styles.buttonText}>NUMEROS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonCategory}
              onPress={() => setItemsAtr(languageFlag, 2)}
            >
              <Image
                source={require("../../assets/chromatic.png")}
                style={styles.buttonImageIconStyle}
              />
              <Text style={styles.buttonText}>COLORES</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonCategory}
              onPress={() => setItemsAtr(languageFlag, 3)}
            >
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
              <TouchableOpacity style={styles.buttonObject} onPress={()=>playSound(sound1)}>
                <Image source={image1} style={styles.buttonImageIcon} />
                <Text style={styles.buttonText}>{text1}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonObject}>
                <Image source={image2} style={styles.buttonImageIcon} />
                <Text style={styles.buttonText}>{text2}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonObject}>
                <Image source={image3} style={styles.buttonImageIcon} />
                <Text style={styles.buttonText}>{text3}</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.buttonObject}>
                <Image source={image4} style={styles.buttonImageIcon} />
                <Text style={styles.buttonText}>{text4}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonObject}>
                <Image source={image5} style={styles.buttonImageIcon} />
                <Text style={styles.buttonText}>{text5}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonObject}>
                <Image source={image6} style={styles.buttonImageIcon} />
                <Text style={styles.buttonText}>{text6}</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.buttonObject}>
                <Image source={image7} style={styles.buttonImageIcon} />
                <Text style={styles.buttonText}>{text7}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonObject}>
                <Image source={image8} style={styles.buttonImageIcon} />
                <Text style={styles.buttonText}>{text8}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonObject}>
                <Image source={image9} style={styles.buttonImageIcon} />
                <Text style={styles.buttonText}>{text9}</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity style={styles.buttonObject}>
                <Image source={image10} style={styles.buttonImageIcon} />
                <Text style={styles.buttonText}>{text10}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;