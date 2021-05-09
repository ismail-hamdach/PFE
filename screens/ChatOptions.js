import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const ChatOptions = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() =>  navigation.navigate('Classes')}>
        <View>
          <Image style={styles.Professeurs} source={require('../assets/administration.png')} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() =>  navigation.navigate('ChatList')}>
        <View>
          <Image style={styles.Professeurs} source={require('../assets/administration1.png')} />
        </View>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },header:{
    position: "absolute",
    width: 375,
    height: 77,
    left: 0,
    top: 35,
   },
   Professeurs: {
    position: "relative",
    borderRadius:10,
    width: 355,
    height: 120,
    
   },
});

export default ChatOptions;



