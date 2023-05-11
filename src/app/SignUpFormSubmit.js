import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js"
import { auth } from "./firebaseconfig.js"

      const signupForm = document.querySelector("#form-register");

      signupForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const email = signupForm['input_email'].value;
        const pass = signupForm['input_Confirm_pass'].value;

        console.log(email,pass)

try{
  const usercredentials = await createUserWithEmailAndPassword(auth, email, pass)
  console.log(usercredentials)

  
  window.location.href="./index.html";


}catch(error){

  console.log(error)

}


      });
