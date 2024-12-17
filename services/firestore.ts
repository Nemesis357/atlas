// import firestore from '@react-native-firebase/firestore';
import { FIREBASE_STORE } from '../FirebaseConfig';
import { collection, addDoc, getDocs } from "firebase/firestore";


export const users = collection(FIREBASE_STORE, "users");

export const createRecord = async (record: any) => {
    try {
        const docRef = await addDoc(collection(FIREBASE_STORE, "records"), {
            title: record.title,
            description: record.description
        });
        return docRef;
        console.log('%c *-*-* try -docRef- *-*-*', 'color:#bada55;', docRef);
    } catch (e) {
        console.log('%c *-*-* createRecord -catch- *-*-*', 'color:tomato;', e);
    }
}

export const getRecord = async () => {
    const querySnapshot = await getDocs(collection(FIREBASE_STORE, "records"));
    querySnapshot.forEach(doc => {
        console.log(`${doc.id} => ${doc.data().title} - ${doc.data().description}`);
    })
}

export const createChatRoom = async (roomName: any) => {
    try {
        const roomRef = await addDoc(collection(FIREBASE_STORE, "chatRooms"), {
            name: roomName,
            createdAt: new Date()
        })
    } catch ( e ) {
        console.log('%c *-*-* createChatRoom -catch- *-*-*', 'color:tomato;', e);
    }
}