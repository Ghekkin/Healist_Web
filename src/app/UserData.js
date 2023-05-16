import {getDocs} from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js';
import { colRef } from "./firebaseconfig.js"

var enlace = window.location.href

var url = new URL(enlace);

var id = url.searchParams.get('id');

getidtonombre(id)
  .then((fs) => {
    console.log(fs); 
    welcoolme.textContent="Welcome, "+fs;


  })



function getidtonombre(idtoname) {
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
                emailIds.push({ id: obj.id, FirstName: obj.FirstName, LastName: obj.LastName });
              }
            });
            return emailIds;
          }
          const emailIds = getEmailIds(users);
          console.log(emailIds)

          
          let fs = "";
          for (let i = 0; i < emailIds.length; i++) {
            if (emailIds[i].id === idtoname) {
                fs = emailIds[i].FirstName;
              break;
            }

          }

          let ls = "";
          for (let i = 0; i < emailIds.length; i++) {
            if (emailIds[i].id === idtoname) {
                ls = emailIds[i].LastName;
              break;
            }

          }

          resolve(fs+" "+ls); 
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
   