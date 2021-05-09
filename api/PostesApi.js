import firebase from 'firebase/app'
import 'firebase/firestore'

export const getPostes = async(postesRetreived) => {
    var posteList = [];
    var db = firebase.firestore();
    await db.collection("postes")
        .orderBy('date', 'desc')
        .get()
        .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            posteList.push(doc.data());
            //console.log(posteList)
        });
    });
    db = null;
    postesRetreived(posteList)
}

export const createPost = async() => {
    
}