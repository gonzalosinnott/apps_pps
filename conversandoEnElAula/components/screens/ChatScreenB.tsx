import { Text, TouchableOpacity, Image } from 'react-native'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../styles/StyleChatScreen'
import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { auth, db } from '../../App';
import { GiftedChat } from 'react-native-gifted-chat'
 
 const ChatB = () => {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [messages, setMessages] = useState([]);
  const user = auth?.currentUser?.email || '';

  const splitUserFromEmail = (email:string) => {
    const emailUser = email.split('@')[0];
    return emailUser.charAt(0).toUpperCase() + emailUser.slice(1)
}

  useLayoutEffect(() => {
      const unsubscribe = onSnapshot(query(collection(db, "chatB"), orderBy("createdAt", "desc")), (snapshot =>
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
      addDoc(collection(db, "chatB"), {
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

            <Text style={styles.exitText}>SALA DE CHAT B</Text>
            ),
          headerTintColor: "#fee55a",
          headerBackButtonMenuEnabled: false,
          headerStyle: {
              backgroundColor: '#fee55a',  
          }
      });
  }, []);

  const handleReturn = () => {
    navigation.replace("Inicio")
    }

  

  return (    

      <GiftedChat  
            messagesContainerStyle={{ backgroundColor: '#fee55a', borderColor: '#fee55a', shadowColor: '#fee55a' }}
            optionTintColor='#optionTintColor'
            messages={messages}
            onSend={messages => onSend(messages)}
            renderUsernameOnMessage={true}
            renderAvatarOnTop={true}
            maxInputLength={21}
            user={{
                _id: auth?.currentUser?.email || 1,
                name: splitUserFromEmail(user) || '',
            }}
            textInputProps={{                      
                borderColor: '#222', 
                placeholder:"Mensaje...",                    
                
            }}             
        />
     
  );
 }

 export default ChatB