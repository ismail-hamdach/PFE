import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function App({navigation}) {
  return (
    <View style={styles.main_container}>
      <View style={styles.container_header}>
        <Image source={require('../assets/20944362.jpg')} style={styles.image} />
        <Text style={styles.title}> réinitialisez votre mot de passe </Text>
        <View style={styles.lineres}/>
      </View>

      <View style={styles.container_body}>
        <Text style={styles.textetape}> Etape 2 </Text>
        <Text style={styles.text}>S'il vous plaît vérifiez votre boîte email </Text>
        <Text style={styles.text}>nous vous avons envoyé un lien</Text>
        <Text style={styles.text}>pour réinitialiser votre mot de passe</Text>

        

        <TouchableOpacity style={styles.loginbuttom}
          onPress={() => {navigation.navigate('login')}} >
          <Text style={styles.verificetion}>Aller vers connexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main_container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
    width: '100%',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    //height: 38,
    width: '100%',
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderRadius: 30,
  },
  image: {
    flex: 6,
    width: 250,
    height: 200,
  },
  container_body: {
    flex: 3,
    //height: 400,
    //paddingLeft: 35,
    //paddingRight: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: '80%'
  },
  verificetion: {
    color: '#FFf',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#333',
    fontWeight: 'bold',
    width: '100%',
    alignItems: 'flex-start',
    padding:2,
    bottom:30,
  },
  textetape: {
    color: '#FF7368',
    fontWeight: 'bold',
    bottom:40,

  },
  title:{
    top:2.5,
    fontWeight: 'bold',
    borderBottomWidth:3,
    borderColor:"#140A7E",
    borderRadius:3,   
    },

  loginbuttom: {
    top: 100,
    //left:30,
    width:"50%",
    height: 50,
    borderRadius: 25,
    backgroundColor: '#140A7E',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
});
