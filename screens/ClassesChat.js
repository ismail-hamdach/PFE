import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, Text, View, FlatList, TouchableOpacity, Image,SafeAreaView, ScrollView, Button } from 'react-native';
import { getClasses} from '../api/CourseApi';
import {AuthContext} from '../component/AuthProvider'
  
  
  
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}  >
      <Image style={[styles.image,]} source={require('../assets/profile.png')}/>
      <Text style={[styles.title, textColor]}>{item.level}</Text>
     
    </TouchableOpacity>
  );
  
 
const ChatList = ({navigation}) => {
  const [classes, setClasses] = useState(null);
  const {user} = useContext(AuthContext);
  const GetClasses = async(setClasses, uid) => {
    setIsloading(true)
    await getClasses(setClasses, uid)
    setIsloading(false)
}

  useEffect(() => {
    
    GetClasses(setClasses, user.uid)
    
  }, [])

  const [selectedId, setSelectedId] = useState(null);
  const [level, setLevel] = useState(null);
  const [isloading, setIsloading] = useState(false)

  const renderItem = ({ item }) => {
  const backgroundColor = item.id === selectedId ? "#140A7E" : "#FFF";
  const color = item.id === selectedId ? 'white' : 'black';

  return (
    <Item
      item={item}
      onPress={() => {
        setLevel(item.level)
        navigation.navigate('Room', {chatId: item.level, target: false, chatName: item.level})
        setSelectedId(item.id)
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
        data={classes}
        renderItem={renderItem}
        keyExtractor={(item , index) => index.toString()}
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