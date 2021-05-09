import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, ActivityIndicator, Text, View, FlatList, TouchableOpacity, Image,SafeAreaView, ScrollView, Button } from 'react-native';
import { getChats } from '../api/ChatApi';
import {AuthContext} from '../component/AuthProvider'

  
  
  
  
  
 
const ChatList = ({navigation}) => {
  const [messages, setMessages] = useState(null);
  const [isloading, setIsloading] = useState(false)
  const {user} = useContext(AuthContext);

  const  GetChats = async(setMessages, uid) => {
    setIsloading(true)
    await getChats(setMessages, uid)
    setIsloading(false)
    
  }

  const Item = ({ item, onPress, backgroundColor, textColor, }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}  >
      <Image style={[styles.image,]} source={require('../assets/profile.png')}/>
      <Text style={[styles.title, textColor]}>{user.displayName !== item.name[0] ? item.name[0] : item.name[1]}</Text>
      <Text style={[styles.lastMessage, textColor]} numberOfLines={1}>{item.lastMessage}</Text>
    </TouchableOpacity>
  );

  // const messages = [
  //   { id : 'afsdf',
  //     name: 'Administration'},
  //   { id : 'afsd2f',
  //     name: 'Abbassi Amina'},
  //   { id : 'afsdf5',
  //     name: 'Alami Mohammed'},
  // ]

  useEffect(() =>{
    GetChats(setMessages, user.uid)
  }, [])

  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
  const backgroundColor = item.id === selectedId ? "#140A7E" : "#FFF";
  const color = item.id === selectedId ? 'white' : 'black';

  
  return (
    <Item
      item={item}
      onPress={() => {
        setSelectedId(item.id)
        navigation.navigate('Room', {chatId: item.id, target: true, chatName: user.displayName !== item.name[0] ? item.name[0] : item.name[1]})
      }}

      backgroundColor={{ backgroundColor }}
      textColor={{ color }}
    />
  )};
  
  const style = isloading? styles.show : styles.hide;

  return (
    <SafeAreaView style={styles.container}>
      <View style= {style}>
        <ActivityIndicator size="large" color="#3d3d3d" />
      </View>
      <FlatList
        // ItemSeparatorComponent={
        // Platform.OS !== 'android' &&
        //   (({ highlighted }) => (
        //     <View
        //       style={[
        //         style.separator,
        //         highlighted && { marginLeft: 0 }
        //       ]}
        //     />
        //   ))
        // }
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        extraData={selectedId}
      />
    </SafeAreaView>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  item: {
    backgroundColor: '#F0F0F0',

    padding: 0,
    marginVertical: 3,
    marginHorizontal: 4,
    borderRadius:10,
  },
  title: {
    fontSize: 18,
    marginLeft:55,
    bottom:30,
    left:20,
  },
  lastMessage:{
    fontSize: 12,
    marginLeft:55,
    bottom:30,
    left:20,
  }
  ,
  poste:{
    marginLeft:75,
    bottom:30,
  },
  image: {
    width: 50,
    height:50,
    borderRadius:10,
    top:17,
    left:15,
  },hide: {
    display: 'none'
  },show: {
    display: 'flex'
  },
});

export default ChatList;