import React, { useEffect, useState, useContext } from 'react';
import { useLayoutEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import {getMessagesClasse, getMessages, sendMessage} from '../api/ChatApi'
import {AuthContext} from '../component/AuthProvider'



export default function RoomScreen({route, navigation}) {

  const {chatId, target, chatName} = route.params;


  
  const {user} = useContext(AuthContext);
  const [messages, setMessages] = useState(null)
  //   [{
  //     _id: 0,
  //     text: 'New room created.',
  //     createdAt: new Date().getTime(),
  //     system: true
  //   },
  //   // example of chat message
    
  //   {
  //     _id: 3,
  //     text: 'Vous allez bien?',
  //     createdAt: new Date().getTime(),
  //     user: {
  //       _id: user.uid,
  //       name: 'Administration'
  //     }
  //   },
  //   {
  //     _id: 2,
  //     text: 'Bonjour Madame',
  //     createdAt: new Date().getTime(),
  //     user: {
  //       _id: 1,
  //       name: 'Administration'
  //     }
  //   },
  //   {
  //     _id: 1,
  //     text: 'salut hamza',
  //     createdAt: new Date().getTime(),
  //     user: {
  //       _id: 2,
  //       name: 'Administration'
  //     }
  //   },
  // ]);

  useLayoutEffect(()=>{
    navigation.setOptions({ headerTitle: chatName })
  }, [navigation, chatName])

  useEffect(() => {
    if(target){
      getMessages(setMessages, chatId)
    }
    else
      getMessagesClasse(setMessages, chatId)
  }, [])
  

  // this methode was created to handel the send messages 
  const onSend = async(newMessage, target, chatName) => {
    // console.log(newMessage[0].text)
    // setMessages(null)
    await sendMessage(newMessage[0].text, chatId, user.uid, target, chatName)
    // getMessages(setMessages, chatId)
    setMessages(GiftedChat.append(messages, newMessage));
  }

  return (
    
    <GiftedChat 
      messages={messages}
      renderInputToolbar={!target ? () => null : undefined}
      renderLoading={() =>  
        <ActivityIndicator size="large" color="#0000ff" />
      }
      onSend={(newMessage) => {       
        onSend(newMessage, target, user.displayName)

        }
      }
      user={
        { _id: user.uid}
      }
    />
  );
}