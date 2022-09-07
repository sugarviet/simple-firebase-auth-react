import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const inititalizedAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default inititalizedAuthentication;