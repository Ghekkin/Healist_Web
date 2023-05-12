import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js"
import { auth } from "./firebaseconfig.js"
import { colRef } from "./firebaseconfig.js"
import {getDocs,addDoc} from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js';

      const signupForm = document.querySelector("#form-register");
      const loading = document.querySelector('#loading');




      signupForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const FirstName = signupForm['input_FirsN'].value;
        const LastName = signupForm['input_LastN'].value;
        const email = signupForm['input_email'].value;
        const MobileNumber = signupForm['input_TelNum'].value;
        const ID = signupForm['input_identificatorNumber'].value;
        const DateBirth = signupForm['input_nacimiento'].value;
        const Gender = signupForm['genero'].value;
        const pass = signupForm['input_Password'].value;

        console.log(FirstName,LastName,email,MobileNumber,ID,DateBirth,Gender,pass)

try{
  const submit = document.querySelector('#Registesbutt');
  submit.classList.add('loading');
  Registesbutt.textContent="Loading";
  loading.classList.add('start');
  const usercredentials = await createUserWithEmailAndPassword(auth, email, pass)
  console.log(usercredentials)

  addDoc(colRef,{

    FirstName: FirstName,
    LastName: LastName,
    email:email,
    MobileNumber:MobileNumber,
    ID:ID,
    DateBirth:DateBirth,
    Gender:Gender,
    pass:pass,
    

  })





  setTimeout(function() {
    window.location.href="./Registro_exitoso.html"
  }, 1500)

}catch(error){

  const submit = document.querySelector('#Registesbutt');
  submit.classList.remove('loading');
  Registesbutt.textContent="Register";


  console.log(error)

  console.log(error.code)
  if(error.code==='auth/weak-password'){
    errortext.textContent="*The password is too weak";
  }
  if(error.code==='auth/invalid-email'){
    errortext.textContent="*The email is invalid";
  }
  if(error.code==='auth/email-already-in-use'){
    errortext.textContent="*The email is already in use";
  }

}

});


    ///get collection data
    getDocs(colRef)
    .then((snapshot) => {
      let users=[]
      snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data(), id:doc.id })
      })
      console.log(users)

    });
