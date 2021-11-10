import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.Congig";

const initializeAuthentication=()=>{
    initializeApp(firebaseConfig)
}
export default initializeAuthentication