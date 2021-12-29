// Rename the file name to firebase.js

import firebase from "firebase"

const firebaseConfig = {
    // UnComment the Below Portion and ADD your fireabase config keys

	apiKey: "AIzaSyAe2QkZAJq5Ywk7K9hMEEs53XNDs7p0zJI",
	authDomain: "neon-coast-324009.firebaseapp.com",
	projectId: "neon-coast-324009",
	storageBucket: "neon-coast-324009.appspot.com",
	messagingSenderId: "785585447336",
	appId: "1:785585447336:web:9e7ef6c62c673fd796fd9d",
	measurementId: "G-71V2XQV3E0"
}

firebase.initializeApp(firebaseConfig)
firebase.auth()

export default firebase