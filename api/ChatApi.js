import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/database";
//import 'firebase/database'


//this fuction used to get a list of chats owned by the uid, it take as argements uid and a function gets the list
export const getChats = async(chatRetrieved, uid) => {
    var user = null;
    var chatList = [];
    var db = firebase.firestore();
    await db.collection("chats")
        .where('partners', 'array-contains', uid)
        .get()
        .then( (querySnapshot) => {
            querySnapshot.forEach( async (doc) => { 
                chatList.push({
                    id: doc.id,
                    name: doc.data().name,
                    lastMessage: doc.data().lastMessage 
                })
            })
            
        })
    db = null;
    console.log(user)
    console.log(chatList)
    chatRetrieved(chatList)
}

export const findUserById = async (userRetrieved, uid) => {
    var db = firebase.firestore()
    var user = null;
    await db.collection("users")
    .where('uid', '==', uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            user = doc.data()
        });
    })
    userRetrieved(user)
}

export const createChat = async(source, target) => {
    var db = firebase.firestore();
    await db.collection('chats').add({
        partners: [source, target],
        time: new Date()
    })
    .then((docRef) => {
        alert("Chat written with ID: "+ docRef.id)
    })
    .catch((error) => {
        alert("Error adding Chat: "+ error);
    })
}

export const getMessagesClasse = async(messagesRetrieved, chatID) => {
    var messagesList = [];
    console.log(chatID)
    var db = firebase.firestore();
    await db.collection("messages")
        .where('chatID', '==', chatID)
        .orderBy('time', 'desc')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data())
            messagesList.push({
                _id: doc.id,
                text: doc.data().text,
                createdAt: new Date (doc.data().time.seconds*1000) ,
                user: {
                    _id: doc.data().source,
                    name: doc.data().chatID
                }
            });
        });
    });
    db = null;
    messagesRetrieved(messagesList)
}

// export const getMessages = async (messagesRetrieved, chatID) => {
//     var messagesList = [];
//     var dbRef = firebase.database().ref('messages/' + chatID ).orderByChild('time');
//     //await messagesRetrieved(null)
//     //var i = 0;
//     // console.log('chat id is : ' + chatID)
//     dbRef.on('value', (snapshot) => {
//             console.log('--------------------------------')
//             console.log("snapshot is : " + snapshot.val() )
//             console.log('--------------------------------')
            
//             snapshot.forEach((childSnapshot) => {
                
//                 messagesList.push({
//                     _id: childSnapshot.key.toString(),
//                     text: childSnapshot.val().text,
//                     createdAt: new Date (childSnapshot.val().time) ,
//                     user: {
//                         _id: childSnapshot.val().source,
//                         name: 'Administration',
//                     }
//                  });
//             });
//     })  
//     //db = null;
//     await messagesRetrieved(messagesList)
// }

export const getMessages = async(messagesRetrieved, chatID) => {
    var messagesList = [];
    var db = firebase.firestore();
    await db.collection("messages")
        .where('chatID', '==', chatID)
        .orderBy('time', 'desc')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            console.log(doc.data())
            messagesList.push({
                _id: doc.id,
                text: doc.data().text,
                createdAt: new Date (doc.data().time.seconds*1000) ,
                user: {
                    _id: doc.data().source,
                    name: 'Administration',
                }
            });
        });
    });
    db = null;
    messagesRetrieved(messagesList)
}



export const sendMessage = async(message, chatID, source, target, chatName) => {
    var db = firebase.firestore();
    await db.collection('messages').add({
        chatID: chatID,
        source: source,
        //target: target,
        text: message,
        time: new Date()
    })
    .then(async(docRef) => {
       if(target){
        await db.collection('chats').doc(chatID).update(
            {
                "lastMessage": chatName + ' : ' +message
            }
        )
       }
    })
    .catch((error) => {
        alert("Error adding Message: "+ error);
        return false
    })
}

// export const sendMessage = async(message, chatID, source, target) => {
//     var db = firebase.database();
//     console.log(chatID)
//     await db.ref('messages/' + chatID).push({
//         chatID: chatID,
//         source: source,
//         text: message,
//         time: firebase.database.ServerValue.TIMESTAMP,
//         target: 'hwllo'
//     })
//     .then((docRef) => {
//         return true
//     })
//     .catch((error) => {
//         alert("Error adding Message: "+ error);
//         return false
//     })
// }

