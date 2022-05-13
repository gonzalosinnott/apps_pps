import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import React from "react";
import { auth } from "../database/firebase";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import styles from "../styles/StyleHomeScreen";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Audio } from "expo-av";
import ActionButton from "react-native-action-button";

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

  const [languageIcon, setLanguageIcon] = useState(
    require("../../assets/languages/argentina.png")
  );
  const [categoryIcon, setCategoryIcon] = useState(require("../../assets/categories/numbers.png"));
  const [sound1, setSound1] = useState(require("../../assets/sounds/spanish/numbers/uno.mp3"));
  const [sound2, setSound2] = useState(require("../../assets/sounds/spanish/numbers/dos.mp3"));
  const [sound3, setSound3] = useState(require("../../assets/sounds/spanish/numbers/tres.mp3"));
  const [sound4, setSound4] = useState(require("../../assets/sounds/spanish/numbers/cuatro.mp3"));
  const [sound5, setSound5] = useState(require("../../assets/sounds/spanish/numbers/cinco.mp3"));
  const [sound6, setSound6] = useState(require("../../assets/sounds/spanish/numbers/seis.mp3"));
  const [sound7, setSound7] = useState(require("../../assets/sounds/spanish/numbers/siete.mp3"));
  const [sound8, setSound8] = useState(require("../../assets/sounds/spanish/numbers/ocho.mp3"));
  const [sound9, setSound9] = useState(require("../../assets/sounds/spanish/numbers/nueve.mp3"));
  const [sound10, setSound10] = useState(require("../../assets/sounds/spanish/numbers/diez.mp3"));

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
    setSound1(require("../../assets/sounds/spanish/numbers/uno.mp3"));
    setSound2(require("../../assets/sounds/spanish/numbers/dos.mp3"));
    setSound3(require("../../assets/sounds/spanish/numbers/tres.mp3"));
    setSound4(require("../../assets/sounds/spanish/numbers/cuatro.mp3"));
    setSound5(require("../../assets/sounds/spanish/numbers/cinco.mp3"));
    setSound6(require("../../assets/sounds/spanish/numbers/seis.mp3"));
    setSound7(require("../../assets/sounds/spanish/numbers/siete.mp3"));
    setSound8(require("../../assets/sounds/spanish/numbers/ocho.mp3"));
    setSound9(require("../../assets/sounds/spanish/numbers/nueve.mp3"));
    setSound10(require("../../assets/sounds/spanish/numbers/diez.mp3"));
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
    setSound1(require("../../assets/sounds/english/numbers/one.mp3"));
    setSound2(require("../../assets/sounds/english/numbers/two.mp3"));
    setSound3(require("../../assets/sounds/english/numbers/three.mp3"));
    setSound4(require("../../assets/sounds/english/numbers/four.mp3"));
    setSound5(require("../../assets/sounds/english/numbers/five.mp3"));
    setSound6(require("../../assets/sounds/english/numbers/six.mp3"));
    setSound7(require("../../assets/sounds/english/numbers/seven.mp3"));
    setSound8(require("../../assets/sounds/english/numbers/eight.mp3"));
    setSound9(require("../../assets/sounds/english/numbers/nine.mp3"));
    setSound10(require("../../assets/sounds/english/numbers/ten.mp3"));
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
    setSound1(require("../../assets/sounds/portuguese/numbers/um.mp3"));
    setSound2(require("../../assets/sounds/portuguese/numbers/dois.mp3"));
    setSound3(require("../../assets/sounds/portuguese/numbers/tres.mp3"));
    setSound4(require("../../assets/sounds/portuguese/numbers/quatro.mp3"));
    setSound5(require("../../assets/sounds/portuguese/numbers/cinco.mp3"));
    setSound6(require("../../assets/sounds/portuguese/numbers/seis.mp3"));
    setSound7(require("../../assets/sounds/portuguese/numbers/sete.mp3"));
    setSound8(require("../../assets/sounds/portuguese/numbers/oito.mp3"));
    setSound9(require("../../assets/sounds/portuguese/numbers/nove.mp3"));
    setSound10(require("../../assets/sounds/portuguese/numbers/dez.mp3"));
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
    setSound1(require("../../assets/sounds/spanish/colors/negro.mp3"));
    setSound2(require("../../assets/sounds/spanish/colors/azul.mp3"));
    setSound3(require("../../assets/sounds/spanish/colors/marron.mp3"));
    setSound4(require("../../assets/sounds/spanish/colors/verde.mp3"));
    setSound5(require("../../assets/sounds/spanish/colors/naranja.mp3"));
    setSound6(require("../../assets/sounds/spanish/colors/rosa.mp3"));
    setSound7(require("../../assets/sounds/spanish/colors/purpura.mp3"));
    setSound8(require("../../assets/sounds/spanish/colors/rojo.mp3"));
    setSound9(require("../../assets/sounds/spanish/colors/blanco.mp3"));
    setSound10(require("../../assets/sounds/spanish/colors/amarillo.mp3"));
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
    setSound1(require("../../assets/sounds/english/colors/black.mp3"));
    setSound2(require("../../assets/sounds/english/colors/blue.mp3"));
    setSound3(require("../../assets/sounds/english/colors/brown.mp3"));
    setSound4(require("../../assets/sounds/english/colors/green.mp3"));
    setSound5(require("../../assets/sounds/english/colors/orange.mp3"));
    setSound6(require("../../assets/sounds/english/colors/pink.mp3"));
    setSound7(require("../../assets/sounds/english/colors/purple.mp3"));
    setSound8(require("../../assets/sounds/english/colors/red.mp3"));
    setSound9(require("../../assets/sounds/english/colors/white.mp3"));
    setSound10(require("../../assets/sounds/english/colors/yellow.mp3"));
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
    setSound1(require("../../assets/sounds/portuguese/colors/preto.mp3"));
    setSound2(require("../../assets/sounds/portuguese/colors/azul.mp3"));
    setSound3(require("../../assets/sounds/portuguese/colors/marrom.mp3"));
    setSound4(require("../../assets/sounds/portuguese/colors/verde.mp3"));
    setSound5(require("../../assets/sounds/portuguese/colors/laranja.mp3"));
    setSound6(require("../../assets/sounds/portuguese/colors/rosa.mp3"));
    setSound7(require("../../assets/sounds/portuguese/colors/roxa.mp3"));
    setSound8(require("../../assets/sounds/portuguese/colors/vermelho.mp3"));
    setSound9(require("../../assets/sounds/portuguese/colors/branco.mp3"));
    setSound10(require("../../assets/sounds/portuguese/colors/amarelo.mp3"));
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
    setSound1(require("../../assets/sounds/spanish/animals/pajaro.mp3"));
    setSound2(require("../../assets/sounds/spanish/animals/gato.mp3"));
    setSound3(require("../../assets/sounds/spanish/animals/vaca.mp3"));
    setSound4(require("../../assets/sounds/spanish/animals/perro.mp3"));
    setSound5(require("../../assets/sounds/spanish/animals/elefante.mp3"));
    setSound6(require("../../assets/sounds/spanish/animals/pez.mp3"));
    setSound7(require("../../assets/sounds/spanish/animals/caballo.mp3"));
    setSound8(require("../../assets/sounds/spanish/animals/buho.mp3"));
    setSound9(require("../../assets/sounds/spanish/animals/rata.mp3"));
    setSound10(require("../../assets/sounds/spanish/animals/tortuga.mp3"));
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
    setSound1(require("../../assets/sounds/english/animals/bird.mp3"));
    setSound2(require("../../assets/sounds/english/animals/cat.mp3"));
    setSound3(require("../../assets/sounds/english/animals/cow.mp3"));
    setSound4(require("../../assets/sounds/english/animals/dog.mp3"));
    setSound5(require("../../assets/sounds/english/animals/elephant.mp3"));
    setSound6(require("../../assets/sounds/english/animals/fish.mp3"));
    setSound7(require("../../assets/sounds/english/animals/horse.mp3"));
    setSound8(require("../../assets/sounds/english/animals/owl.mp3"));
    setSound9(require("../../assets/sounds/english/animals/rat.mp3"));
    setSound10(require("../../assets/sounds/english/animals/turtle.mp3"));
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
    setSound1(require("../../assets/sounds/portuguese/animals/passaro.mp3"));
    setSound2(require("../../assets/sounds/portuguese/animals/gato.mp3"));
    setSound3(require("../../assets/sounds/portuguese/animals/vaca.mp3"));
    setSound4(require("../../assets/sounds/portuguese/animals/cachorro.mp3"));
    setSound5(require("../../assets/sounds/portuguese/animals/elefante.mp3"));
    setSound6(require("../../assets/sounds/portuguese/animals/peixe.mp3"));
    setSound7(require("../../assets/sounds/portuguese/animals/cavalo.mp3"));
    setSound8(require("../../assets/sounds/portuguese/animals/coruja.mp3"));
    setSound9(require("../../assets/sounds/portuguese/animals/ratazana.mp3"));
    setSound10(require("../../assets/sounds/portuguese/animals/tartaruga.mp3"));
  };

  var setItemsAtr = (language: number, object: number) => {
    setLanguageFlag(language);
    setObjectFlag(object);
    console.log(language + " " + object);

    switch (language) {
      case 1:
        setLanguageIcon(require("../../assets/languages/argentina.png"));
        switch (object) {
          case 1:
            setCategoryIcon(require("../../assets/categories/numbers.png"));
            setNumbersSpanish();
            console.log("Numbers Spanish");
            break;
          case 2:
            setCategoryIcon(require("../../assets/categories/chromatic.png"));
            setColorsSpanish();
            console.log("Colors Spanish");
            break;
          case 3:
            setCategoryIcon(require("../../assets/categories/livestock.png"));
            setAnimalsSpanish();
            console.log("Animals Spanish");
            break;
        }
        break;
      case 2:
        setLanguageIcon(require("../../assets/languages/estadosunidos.png"));
        switch (object) {
          case 1:
            setCategoryIcon(require("../../assets/categories/numbers.png"));
            setNumbersEnglish();
            console.log("Numbers English");
            break;
          case 2:
            setCategoryIcon(require("../../assets/categories/chromatic.png"));
            setColorsEnglish();
            console.log("Colors English");
            break;
          case 3:
            setCategoryIcon(require("../../assets/categories/livestock.png"));
            setAnimalsEnglish();
            console.log("Animals English");
            break;
        }
        break;
      case 3:
        setLanguageIcon(require("../../assets/languages/brasil.png"));
        switch (object) {
          case 1:
            setCategoryIcon(require("../../assets/categories/numbers.png"));
            setNumbersPortuguese();
            console.log("Numbers Portuguese");
            break;
          case 2:
            setCategoryIcon(require("../../assets/categories/chromatic.png"));
            setColorsPortuguese();
            console.log("Colors Portuguese");
            break;
          case 3:
            setCategoryIcon(require("../../assets/categories/livestock.png"));
            setAnimalsPortuguese();
            console.log("Animals Portuguese");
            break;
        }
        break;
    }
  };

  async function playSound(aVPlayback: typeof AVPlaybackSource) {
    try {
      const { sound: soundObject, status } = await Audio.Sound.createAsync(
        aVPlayback,
        { shouldPlay: true }
      );
      await soundObject.playAsync();
    } catch (error) {
      console.log(error);
    }
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
        </View>

        <View style={styles.body}>
          <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.buttonObject}
                onPress={() => playSound(sound1)}
              >
                <Image source={image1} style={styles.buttonImageIcon} />
                <Text style={styles.buttonText}>{text1}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonObject}
                onPress={() => playSound(sound2)}
              >
                <Image source={image2} style={styles.buttonImageIcon} />
                <Text style={styles.buttonText}>{text2}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonObject}
                onPress={() => playSound(sound3)}
              >
                <Image source={image3} style={styles.buttonImageIcon} />
                <Text style={styles.buttonText}>{text3}</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.buttonObject}
                onPress={() => playSound(sound4)}
              >
                <Image source={image4} style={styles.buttonImageIcon} />
                <Text style={styles.buttonText}>{text4}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonObject}
                onPress={() => playSound(sound5)}
              >
                <Image source={image5} style={styles.buttonImageIcon} />
                <Text style={styles.buttonText}>{text5}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonObject}
                onPress={() => playSound(sound6)}
              >
                <Image source={image6} style={styles.buttonImageIcon} />
                <Text style={styles.buttonText}>{text6}</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.buttonObject}
                onPress={() => playSound(sound7)}
              >
                <Image source={image7} style={styles.buttonImageIcon} />
                <Text style={styles.buttonText}>{text7}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonObject}
                onPress={() => playSound(sound8)}
              >
                <Image source={image8} style={styles.buttonImageIcon} />
                <Text style={styles.buttonText}>{text8}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonObject}
                onPress={() => playSound(sound9)}
              >
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
              <TouchableOpacity
                style={styles.buttonObject}
                onPress={() => playSound(sound10)}
              >
                <Image source={image10} style={styles.buttonImageIcon} />
                <Text style={styles.buttonText}>{text10}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ActionButton
          renderIcon={(active) =>
            active ? (
              <Image
                source={languageIcon}
                style={styles.buttonImageIconStyle}
              />
            ) : (
              <Image
                source={languageIcon}
                style={styles.buttonImageIconStyle}
              />
            )
          }
          verticalOrientation="up"
          position="left"
          bgColor="rgba(37, 77, 50, 0.8);"
          buttonColor="rgba(0,0,0,0)"
          spacing={60}
        >
          <ActionButton.Item onPress={() => setItemsAtr(1, objectFlag)}>
            <Image
              source={require("../../assets/languages/argentina.png")}
              style={styles.buttonImageIconStyle}
            />
          </ActionButton.Item>

          <ActionButton.Item onPress={() => setItemsAtr(2, objectFlag)}>
            <Image
              source={require("../../assets/languages/estadosunidos.png")}
              style={styles.buttonImageIconStyle}
            />
          </ActionButton.Item>

          <ActionButton.Item onPress={() => setItemsAtr(3, objectFlag)}>
            <Image
              source={require("../../assets/languages/brasil.png")}
              style={styles.buttonImageIconStyle}
            />
          </ActionButton.Item>
        </ActionButton>

        <ActionButton
          renderIcon={(active) =>
            active ? (
              <Image
                source={categoryIcon}
                style={styles.buttonImageIconStyle}
              />
            ) : (
              <Image
                source={categoryIcon}
                style={styles.buttonImageIconStyle}
              />
            )
          }
          verticalOrientation="up"
          position="right"
          bgColor="rgba(37, 77, 50, 0.6);"
          buttonColor="rgba(0,0,0,0)"
          spacing={60}
        >
          <ActionButton.Item onPress={() => setItemsAtr(languageFlag, 1)}>
            <Image
              source={require("../../assets/categories/numbers.png")}
              style={styles.buttonImageIconStyle}
            />
          </ActionButton.Item>

          <ActionButton.Item onPress={() => setItemsAtr(languageFlag, 2)}>
            <Image
              source={require("../../assets/categories/chromatic.png")}
              style={styles.buttonImageIconStyle}
            />
          </ActionButton.Item>

          <ActionButton.Item onPress={() => setItemsAtr(languageFlag, 3)}>
            <Image
              source={require("../../assets/categories/livestock.png")}
              style={styles.buttonImageIconStyle}
            />
          </ActionButton.Item>
        </ActionButton>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
