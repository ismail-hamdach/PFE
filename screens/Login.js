import React, {useContext, useState} from 'react'
import {StyleSheet, Image, TextInput, Text, View, TouchableOpacity, ActivityIndicator} from 'react-native'
import AuthContext from '../component/AuthProvider';

const Login = ({navigation}) => {

  const {login, err} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  


  const singin = (email, password) => {
   
    if(email.length >= 1 && password.length >= 1){
       login(email,password);
    }
    
  }


  
  return (

    <View style={styles.main_container}>

      <View style={styles.container_header}>
        
        <Image source ={require('../assets/20944362.jpg')} style={styles.image} />
        <Text style={styles.h1}> Connexion </Text>

      </View>

      <View style={styles.container_body}>

        <Text style={styles.text}> Adresse e-mail </Text>
        <TextInput
          placeholder={'Example@mail.example'}
          style={styles.email_input}
          onChangeText= {(val) => setEmail(val)}
        />
        
        <Text style={styles.text}> Mot de passe </Text>

        <TextInput
          placeholder={'Mot de passe'}
          style={styles.email_input}
          onChangeText= {(val) => setPassword(val)}
          secureTextEntry={true}
        />

        <Text style={styles.Danger}>{
          err
        }</Text>

        <TouchableOpacity 
          style={styles.foget_container}
          onPress={() => navigation.navigate("forget")}  
        >
          <Text style={{ color: "orange" }}> Mot de passe oublié ? </Text>
        </TouchableOpacity>

        <View style={styles.loginbuttom}>

          <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => { 
              singin(email, password); }}
          >
            <Text style={{color: 'white'}}> Connexion </Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    backgroundColor:"#E5E5E5",
    flex:1,
    width: '100%',
    borderColor:"black",
    alignItems: 'center',
    justifyContent: 'center'
  },
  container_header:{
    flex:2,
    alignItems:'center',
    justifyContent: 'center',
    //height: 38,
    width: '100%',
    backgroundColor:"#fff",
    borderColor:"#fff",
    borderRadius: 30

  },
  image:{
    flex: 6,
    width:200,
    height:200
  },
  container_body:{
    flex: 3,
    //height: 400,
    paddingLeft:35,
    paddingRight:35,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  h1:{
    flex: 1,
    color : "#333",
    fontFamily:"sans-serif",
    fontWeight: 'bold',
  },
  text:{
    color : "#333",
    marginTop: 1,
    fontWeight: 'bold',
    width: '100%',
    alignItems: 'flex-start'
  },
  email_input:{
    borderBottomWidth:1,
    height:42,
    width:"100%"
  },
  password_text:{
    marginTop: 10,
    color : "gray"
  },
  password_input:{
    borderBottomWidth:1,
    height: 42,
    width: "80%"
  },
  foget_container:{
    
  },
  Danger:{
    color: "red"
  },
  TouchableOpacity:{
    
    width:314,
    height:60,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'

  },
  forget_text:{
    color: "white"
  },
  hide: {
    display: 'none'
  },
  show: {
    display: 'flex'
  },
  email_input: {
    borderBottomColor:'#000',
    color:"gray",
    borderBottomWidth:1,
    height:45,
    width: '100%',
    bottom: 10,
    
  },
  
  loginbuttom: {
    marginTop: 30,
    alignItems:'center',
    justifyContent: 'center',
    width:'80%',
    height:60,
    borderRadius:30,
    backgroundColor:"#140A7E",
    color: 'white'
  }

})

export default Login
