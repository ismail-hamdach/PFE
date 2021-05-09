import React, {useContext} from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import {AuthContext} from '../component/AuthProvider'
const Profile = () => {
    const {user} = useContext(AuthContext);
    const {logOut} = useContext(AuthContext);
    return(
        <View style={styles.item}>
            <Image style={styles.image} source={{uri: user.photoURL}}/>
            <Text style={styles.title}>{user.displayName}</Text>
            <Button title = {"Se déconnecter"} onPress = {() => {logOut()}}/>
        </View>
    )

}

export default Profile;


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
  image: {
    width: 50,
    height:50,
    borderRadius:10,
    top:17,
    left:15,
  },
});
