import firebase from 'firebase/app'
import 'firebase/firestore'
//import {RNFetchBlob} from 'rn-fetch-blob'

export const getClasses = async(classesRetreived, uid) => {
    // console.log(uid)
    var classeList = [];
    var db = firebase.firestore();
    await db.collection("children")
        .where("parent", '==', uid)
        // .orderBy('level', 'desc')
        .get()
        .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            
            classeList.push(doc.data());
            // console.log(doc.data())
        });
    });
    db = null;
    classesRetreived(classeList)
}



export const getCourses = async(CoursesRetreived, level) => {
    // console.log(level)
    var CourseList = [];
    var db = firebase.firestore();
    await db.collection("cours")
        .where("level", '==', level)
        .orderBy('time', 'desc')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {   
                CourseList.push(doc.data());
                //console.log(doc.data())
            });
        });
    db = null;
    console.log('course list : ' +  CourseList.length)
    CoursesRetreived(CourseList)
}


// const downloadCourse = () => {
//     const { config, fs } = RNFetchBlob
//     let PictureDir = fs.dirs.PictureDir // this is the pictures directory. You can check the available directories in the wiki.
//     let options = {
//     fileCache: true,
//     addAndroidDownloads : {
//         useDownloadManager : true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
//         notification : false,
//         path:  PictureDir + "/me_"+Math.floor(date.getTime() + date.getSeconds() / 2), // this is the path where your downloaded file will live in
//         description : 'Downloading image.'
//     }
//     }
//     config(options).fetch('GET', "https://i.pinimg.com/originals/04/62/e6/0462e638ce05a1bc852efc44979f2c2d.jpg").then((res) => {
//     // do some magic here
//     })
// }