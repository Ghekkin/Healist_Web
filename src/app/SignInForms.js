import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js"
import { auth } from "./firebaseconfig.js"

const signinForm = document.querySelector("#formlogin");

signinForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = signinForm['lo_email_input'].value;
    const password= signinForm['lo_pass_input'].value;

    try{
    const usercredentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(usercredentials)

        window.location.href="./HealistPa.html"



    }catch(error){
        console.log(error)

        if(error.code==='auth/user-not-found'||error.code==='auth/wrong-password' ||error.code=== 'auth/too-many-requests'){

            texterror.textContent="*The password or Email is incorrect"; 

        }else{
            texterror.textContent="*Error, please contact admin";  
        }
        


    }

})