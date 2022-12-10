import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, writeBatch, collection } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASvx_S6Jv_zWP9aEa8TuJ4If15ulJucxY",
  authDomain: "crwn-clothing-605d6.firebaseapp.com",
  projectId: "crwn-clothing-605d6",
  storageBucket: "crwn-clothing-605d6.appspot.com",
  messagingSenderId: "726539212958",
  appId: "1:726539212958:web:7229adef6520939cfe838f",
  measurementId: "G-NKHF0SYY0Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// google sign in method
const googleProvider = new GoogleAuthProvider();
//set parameter
googleProvider.setCustomParameters({
  promt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

//get db fromm firestore
const db = getFirestore();

//add local collcetion to firestore : using writeBatch
export const addCollectionAndDocument = async(collcetionKey, objectsToAdd) =>{
  //declare batch
  const batch = writeBatch(db);
  //declare collection ref = collection => catagories
  const collectionRef = collection(db, collcetionKey)

  //objectToAdd => an object of an array
  objectsToAdd.forEach((object) => {
    //docRef => reference to where the document address => collection = catagories, document = object.title
    const docRef = doc(collectionRef, object.title.toLowerCase())  
    batch.set(docRef, object)  
  });

  await batch.commit();
  console.log('done')
}


//getting response auth from login page and check with userSnapshot.exist()
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  console.log("userSnapshot exists ? : " + userSnapshot.exists());

  //create document if userSnapshot.exist is false/doesnt exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser =  async () => {
  await signOut(auth);
  console.log("Signed Out")

};

export const onAuthStateChangedListener = (callback) => {onAuthStateChanged(auth, callback)}