import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js"
import { auth } from "./firebaseconfig.js"
import {getDocs,addDoc} from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js';
import { colRef } from "./firebaseconfig.js"

const signinForm = document.querySelector("#formlogin");

signinForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = signinForm['lo_email_input'].value;
    const password= signinForm['lo_pass_input'].value;



    try{
    const usercredentials = await signInWithEmailAndPassword(auth, email, password)
        //console.log(usercredentials)

        console.log();

        getidforemail(email)
  .then((ids) => {
    console.log(ids); // muestra el valor de ids
    window.location.href="./HealistPa.html"+"?"+"id="+ids

  })
  .catch((error) => {
    console.error(error); // maneja cualquier error que ocurra en la promesa
  });



    }catch(error){
        console.log(error)

        if(error.code==='auth/user-not-found'||error.code==='auth/wrong-password' ||error.code=== 'auth/too-many-requests'){

            texterror.textContent="*The password or Email is incorrect"; 

        }else{
            texterror.textContent="*Error, please contact admin";  
        }
        


    }

})


function getidforemail(userem) {
    return new Promise((resolve, reject) => {
      getDocs(colRef)
        .then((snapshot) => {
          let users = [];
          snapshot.docs.forEach((doc) => {
            users.push({ ...doc.data(), id: doc.id });
          });
  
          function getEmailIds(json) {
            const emailIds = [];
            json.forEach((obj) => {
              if (obj.hasOwnProperty("email")) {
                emailIds.push({ email: obj.email, id: obj.id });
              }
            });
            return emailIds;
          }
  
          const emailIds = getEmailIds(users);
  
          let ids = "";
          for (let i = 0; i < emailIds.length; i++) {
            if (emailIds[i].email === userem) {
              ids = emailIds[i].id;
              break;
            }
          }
  
          resolve(ids); // resuelve la promesa con el valor de ids
        })
        .catch((error) => {
          reject(error); // rechaza la promesa si hay un error en la consulta
        });
    });
  }
   
    





