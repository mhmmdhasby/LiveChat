// 1. Impor module yang diperlukan dari firebase dan firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js"
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  doc,
  updateDoc,
  deleteDoc,
  increment
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"

// 2. Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDYY9Lf3ykmYbelxDzB3gK3AdMqi1ygyhc",
  authDomain: "insan-cemerlang-1e0d1.firebaseapp.com",
  projectId: "insan-cemerlang-1e0d1",
  storageBucket: "insan-cemerlang-1e0d1.firebasestorage.app",
  messagingSenderId: "408649573711",
  appId: "1:408649573711:web:c58e9fb0d751757102513a",
  measurementId: "G-K96S0SX4VX"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const messageCollection = collection(db, "messages")

//.menentukan elemen elemen DOM yang diperlukan
const chatForm = document.getElementById("chat-form")
const usernameInput= document.getElementById("username")
const messagesInput = document.getElementById("message")
const chatBox = document.getElementById("chat-box")

chatForm.addEventListener("submit",async(event)=>{
  event.preventDefault()
  
  const username = usernameInput.value.trim()
  const message = MessageInput.value.trim()
  
  if (username&&message) {
    try {
      await addDoc(messagesCollection,{
        username: username,
        message: message,
        waktu: serverTimestamp()
      })
      MessageInput.value=""
    } catch (error) {
      console.log("Gagal mengirim pesan", error)
    }
  }
})