import { ImageBackground, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../styles/StyleChatScreen'
import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { auth, db } from '../../App';
import { Day, GiftedChat, InputToolbar  } from 'react-native-gifted-chat'
 
 const ChatA = () => {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [messages, setMessages] = useState([]);

  useLayoutEffect(() => {
      const unsubscribe = onSnapshot(query(collection(db, "chatA"), orderBy("createdAt", "desc")), (snapshot =>
          setMessages(snapshot.docs.map(doc => ({
              _id: doc.data()._id,
              text: doc.data().text,
              createdAt: doc.data().createdAt.toDate(),
              user: doc.data().user
          })))
      ))
      return unsubscribe;
  }, [])

  const onSend = useCallback((messages = []) => {
      setMessages(previousMessages =>
          GiftedChat.append(previousMessages, messages))
      const {
          _id,
          createdAt,
          text,
          user } = messages[0]
      addDoc(collection(db, "chatA"), {
          _id,
          createdAt,
          text,
          user
      });
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
          headerLeft: () => (
            <TouchableOpacity style={styles.exitButton} onPress={handleReturn}>
              <Image source={require("../../assets/return.png")} style={styles.buttonImageExit} />
            </TouchableOpacity>
          ),
          headerTitle: () => (

            <Text style={styles.exitText}>SALA DE CHAT A</Text>
            ),
          headerTintColor: "#fff",
          headerTitleAlign: 'center',
          headerBackButtonMenuEnabled: false,
          headerStyle: {
              backgroundColor: '#a5d1f1',  
          }
      });
  }, []);

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

      <View style={styles.body}>

      <GiftedChat  
            messagesContainerStyle={{ backgroundColor: '#a5d1f1', borderColor: '#3770b6', shadowColor: '#3770b6' }}
            optionTintColor='#optionTintColor'
            messages={messages}
            onSend={messages => onSend(messages)}
            renderUsernameOnMessage={true}
            renderAvatarOnTop={true}
            maxInputLength={21}
            user={{
                _id: auth?.currentUser?.email || 1,
                name: auth?.currentUser?.displayName || '',
            }}
            textInputProps={{                      
                borderColor: '#222', 
                placeholder:"Escribe un mensaje aquí...",                    
                
            }}             
        />
      </View>
      </ImageBackground>
    </View>
  );
 }

 export default ChatA
 
