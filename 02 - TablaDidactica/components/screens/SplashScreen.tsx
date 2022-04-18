import React from "react";
import { Dimensions, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import LottieView from 'lottie-react-native';


export default function Splash() {

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const win = Dimensions.get('window');

    setTimeout(() => {
        navigation.replace( 'Login' );
        }, 5000);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" , backgroundColor: '#398148',
  }}>
      <LottieView source={require('D:/Tecnicatura_en_Programación/4° Cuatrimestre/PPS/app_pps/02 - TablaDidactica/assets/language.json')} autoPlay loop />      
    </View>
  );
}
