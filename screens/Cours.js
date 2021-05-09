import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Image,SafeAreaView, ActivityIndicator, Linking, Text } from 'react-native';
import { getCourses } from '../api/CourseApi';

  
  
  
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}  >
      <Image style={[styles.image,]} source={require('../assets/icon.png')}/>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
      <Text style={[styles.description, textColor]}>{item.description}</Text>
    </TouchableOpacity>
  );
  
 
const ChatList = ({route, navigation}) => {

  const [selectedId, setSelectedId] = useState(null);
  const [courses, setCourses] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true)
  const [isloading, setIsloading] = useState(false)

  const {level} = route.params;

  const GetCourses = async(setCourses, level) => {
    setIsloading(true)
    await getCourses(setCourses, level)
    setIsloading(false)
  }
  useEffect(() =>{
    GetCourses(setCourses, level)
    
  }, [])

  useEffect(() =>{
    setIsEmpty(courses.length === 0)
  }, [courses])


  
  const renderItem = ({ item }) => {
  const backgroundColor = item.id === selectedId ? "#140A7E" : "#FFF";
  const color = item.id === selectedId ? 'white' : 'black';

  return (
    <Item
      item={item}
      onPress={() => {
        setSelectedId(item.id)
        Linking.openURL(item.url).catch((err) => console.error('An error occurred', err));
      }}

      backgroundColor={{ backgroundColor }}
      textColor={{ color }}
    />
  )};
  
  const style = isloading? styles.show : styles.hide;
  return isEmpty ?  (
    <View style={styles.box}>
      <View style= {style}>
        <ActivityIndicator size="large" color="#3d3d3d" />
      </View>
      
      { !isloading && 
        <Text>
          Vide
        </Text>
      }
      
    </View>
  ) : (
    <SafeAreaView style={styles.container}>
      <FlatList
        ItemSeparatorComponent={
        Platform.OS !== 'android' &&
          (({ highlighted }) => (
            <View
              style={[
                style.separator,
                highlighted && { marginLeft: 0 }
              ]}
            />
          ))
        }
        data={courses}
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
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
  description: {
    fontSize: 12,
    marginLeft:55,
    marginRight: 10,
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
  },
  hide: {
    display: 'none'
  },
  show: {
    display: 'flex'
  },
});

export default ChatList;