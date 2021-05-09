import React, { useEffect } from 'react'
import { StyleSheet, Text, FlatList, View } from 'react-native'
import { useState } from 'react/cjs/react.development';
import { getChats, getMessages, sendMessage } from '../api/ChatApi';

const Message = () => {
    const data = [
        {
            title: "test",
            picture  : ["test"],
            description: "test",
            date: '122134564897'
        }
    ];
    const [messages, setMessages] = useState(null);
    useEffect(() =>{
        getChats(setMessages, '1')
        // sendMessage('test message', '1', '1', '2')
    }, [])
    return(
        <View>

        <FlatList
            data={messages}
            
            renderItem={({item}) => (
                <Text>{item.title}</Text>
            )}
            keyExtractor={(item, index) => index.toString()}
        />

        
    </View>
    )

}

export default Message;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})