import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAAdaL6z-x_zRXtCZkIY27bKvLTe_dyUTQ",
	authDomain: "serene-6c4dd.firebaseapp.com",
	projectId: "serene-6c4dd",
	storageBucket: "serene-6c4dd.appspot.com",
	messagingSenderId: "514745799477",
	appId: "1:514745799477:web:fc51a760cfcc04bb35727c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
