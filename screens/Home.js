import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList,ActivityIndicator , TouchableOpacity, Image,SafeAreaView, ScrollView } from 'react-native';
import ReadMore from 'react-native-read-more-text';
import {getPostes as GetPostes} from '../api/PostesApi'
  
const date = (time) => {
  let date = new Date(time.seconds * 1000);
  let dd = date.getDate();
  let mm = date.getMonth()+1; 
  let yyyy = date.getFullYear();
  if(dd<10) 
  {
      dd='0'+dd;
  } 

  if(mm<10) 
  {
      mm='0'+mm;
  } 
  date = dd+'-'+mm+'-'+yyyy;
  
  
  return(date)
}

const Item = ({ item, onPress, backgroundColor, textColor }) => (

  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}  >

    <Text style={[styles.userName, textColor]}>{item.title}</Text>
    <Text style={styles.londyalha}>{date(item.date)}</Text>
    <Text style={[styles.PublicationDate, textColor]}>{item.PublicationDate}</Text>
    <Image style={[styles.ImagePost,]}  source={{uri: item.picture[0]}}/>
    <ReadMore numberOfLines={3} style={[styles.londyalha]}><Text style={[styles.description, textColor]} >{item.description}</Text></ReadMore>
  </TouchableOpacity>
);
  
const post = ({navigation}) => {
  

  const [postList, setPostList] = useState(null);
  const [isloading, setIsloading] = useState(false)

  const [selectedId, setSelectedId] = useState(null);

  const getPostes = async (setPostList) => {
      setIsloading(true)
      await GetPostes(setPostList)
      setTimeout(() => setIsloading(false), 700)
     
  }

  useEffect( () => {
      getPostes(setPostList)
  }, [])

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#140A7E" : "#140A7E";
    const color = item.id === selectedId ? '#FFF' : '#fff';
    
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
  const style = isloading? styles.show : styles.hide;

  return (
    <SafeAreaView style={styles.container}>
      <View style= {style}>
        <ActivityIndicator size="large" color="#3d3d3d" />
      </View>
      <FlatList
      // ItemSeparatorComponent={
      //   Platform.OS !== 'android' &&
      //   (({ highlighted }) => (
      //     <View
      //       style={[
      //         style.separator,
      //         highlighted && { marginLeft: 0 }
      //       ]}
      //     />
      //   ))
      // }
        data={postList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {      
      backgroundColor: '#F0F0F0',
      padding: 10,
      marginVertical: 10,
      marginHorizontal: 12,
      borderRadius:10,
      height:400,
    },
    userName: {
      margin: 5,
      fontSize: 18,
      fontWeight: 'bold'
    },
    PublicationDate: {
      fontSize: 10,
      marginLeft:55,
      bottom:30,
      left:20,
      color:"#333"
    },
    poste:{
      marginLeft:75,
      bottom:30,
    },
    ImageUser: {
      width: 50,
      height:50,
      borderRadius:15,
      top:17,
      left:15,
    },
    ImagePost: {
      width: "100%",
      height:"50%",
      borderRadius:10,
      bottom:10,
      right:16.9,
      left:0.5,      
    },
    description:{
      paddingLeft:30,
      margin:30,
      left:5,
      color:'#FFF',
    },
    hide: {
      display: 'none'
    },show: {
      display: 'flex'
    },
    londyalha:{
      color:"white",
    },
  });
  
  export default post;