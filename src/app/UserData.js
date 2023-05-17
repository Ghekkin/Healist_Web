import { getDocs } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { colRef } from "./firebaseconfig.js";

var idlocal = localStorage.getItem("id");
var logloc = localStorage.getItem("loged");

console.log(logloc);
if (logloc === "null") {
  window.location.href = "./Login.html";
}
console.log(logloc);

loading();

var imagen = document.getElementById("logoutimg");

imagen.addEventListener("click", function () {
  localStorage.setItem("id", null);

  localStorage.setItem("loged", null);
  window.location.href = "./Login.html";
});

var botonCita = document.getElementById("botoncitaemerg");

botonCita.addEventListener("click", function () {
  window.alert("Contact us to modify your account details.");


});

var botonHopital = document.getElementById("hospita");

botonHopital.addEventListener("click", function () {
  window.alert("Map of nearby hospitals coming soon.");

  window.location.href = "./ComingSoon.html";
});

var botonMedicalr = document.getElementById("medicalr");

botonMedicalr.addEventListener("click", function () {
  window.alert("Your medical history will be available soon.");

  window.location.href = "./ComingSoon.html";
});

var botonmsg = document.getElementById("mensaj");

botonmsg.addEventListener("click", function () {
  window.alert(
    "You will be able to contact the doctors directly through this platform in the near future."
  );
  window.location.href = "./ComingSoon.html";
});

var botonnoti = document.getElementById("bellnoti");

botonnoti.addEventListener("click", function () {
  window.alert("At the moment, there are no notifications");
});

var botonperfil = document.getElementById("perfill");

botonperfil.addEventListener("click", function () {
  window.alert("To change any information in your profile, please contact");
});

//console.log(idlocal);

getidtonombre(idlocal).then((fs) => {
  //console.log(fs);
  welcoolme.textContent = "Welcome, " + fs;
  nombreperfil.textContent = fs;
});

getidtofecha(idlocal).then((fs) => {
  //console.log(fs);
  edadpipol.textContent = fs + " years old";
});

getidtofecha(idlocal);

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
              emailIds.push({
                id: obj.id,
                FirstName: obj.FirstName,
                LastName: obj.LastName,
              });
            }
          });
          return emailIds;
        }
        const emailIds = getEmailIds(users);
        //console.log(emailIds);

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

        resolve(fs + " " + ls);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getidtofecha(idtofecha) {
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
              emailIds.push({
                id: obj.id,
                DateBirth: obj.DateBirth,
                LastName: obj.LastName,
              });
            }
          });
          return emailIds;
        }
        const emailIds = getEmailIds(users);
        //console.log(emailIds);

        let fs = "";
        for (let i = 0; i < emailIds.length; i++) {
          if (emailIds[i].id === idtofecha) {
            fs = emailIds[i].DateBirth;
            break;
          }
        }

        function obtenerEdad(fechaNacimiento) {
          const fechaActual = new Date();
          const fechaNac = new Date(fechaNacimiento);

          let edad = fechaActual.getFullYear() - fechaNac.getFullYear();

          // Verificar si el cumpleaños ya ha pasado este año
          const mesActual = fechaActual.getMonth() + 1;
          const diaActual = fechaActual.getDate();
          const mesNac = fechaNac.getMonth() + 1;
          const diaNac = fechaNac.getDate();

          if (
            mesActual < mesNac ||
            (mesActual === mesNac && diaActual < diaNac)
          ) {
            edad--;
          }

          return edad;
        }

        var edad = obtenerEdad(fs);

        //console.log(edad)
        resolve(edad);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function loading() {
  const loadi = document.querySelector("#loadingg");

  setTimeout(function () {
    loadi.classList.add("no");
  }, 800);
}
