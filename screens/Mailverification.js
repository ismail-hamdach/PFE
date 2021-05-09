import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  FormInput,
} from 'react-native';
import firebase from 'firebase/app'
import "firebase/auth";

const ForgetPass = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");

  return (
    <View style={styles.main_container}>
      <View style={styles.container_header}>
        <Image source={require('../assets/20944362.jpg')} style={styles.image} />
        <Text style={styles.title}> Retrouvez votre compte </Text>
        <View style={styles.lineres}/>
      </View>

      <View style={styles.container_body}>
        <Text style={styles.textetape}> Etape 1 </Text>
        <Text style={styles.text}> Veuillez saisir votre adresse e-mail pour rechercher votre compte. </Text>
        <TextInput
          placeholder={'Example@mail.example'}
          style={styles.email_input}
          onChangeText= {(val) => setEmail(val)}
        />
        <Text style={{color: 'red'}}>{err}</Text>
        <TouchableOpacity style={styles.loginbuttom} 
          onPress={ async () => {
            try{
                await firebase.auth().sendPasswordResetEmail(email);
                navigation.navigate("forgetPassSucc")
            }catch(e){
                setErr(e.message);
            }}}
        >
          <Text style={styles.verificetion}> Vérifiez </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main_container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: '100%'
  },
  verificetion: {
    color: '#FFf',
    justifyContent: 'center',
    alignItems: 'center',
    top:15,
  },
  text: {
    color: '#333',
    fontWeight: 'bold',
    bottom:30,
    alignItems: 'flex-start',
    width: '80%'
  },
  textetape: {
    color: '#FF7368',
    fontWeight: 'bold',
    bottom:40,
    alignItems: 'flex-start',
    width: '80%'

  },
  title:{
    top:2.5,
    fontWeight: 'bold',
    borderBottomWidth:3,
    borderColor:"#140A7E",
    borderRadius:3,   
    },
  email_input: {
    borderBottomColor:'#000',
    color:"gray",
    borderBottomWidth:1,
    height:45,
    width: '80%',
    bottom: 10,
    
  },

  loginbuttom: {
    top: 10,
    alignItems: 'center',
    width:150,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#140A7E',
  },
  
});

export default ForgetPass