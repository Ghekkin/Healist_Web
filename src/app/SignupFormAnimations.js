const input_FirsN = document.querySelector('#input_FirsN');
input_FirsN.addEventListener('input', label_FirsN);

const input_LastN = document.querySelector('#input_LastN');
input_LastN.addEventListener('input', label_LastN);

const input_email = document.querySelector('#input_email');
input_email.addEventListener('input', label_email);

const input_TelNum = document.querySelector('#input_TelNum');
input_TelNum.addEventListener('input', label_TelNum);

const input_identificatorNumber = document.querySelector('#input_identificatorNumber');
input_identificatorNumber.addEventListener('input', label_identificatorNumber);

const genero = document.querySelector('#genero');
genero.addEventListener('input', label_genero);

const input_Password = document.querySelector('#input_Password');
input_Password.addEventListener('input', label_Pass);

const input_Confirm_pass = document.querySelector('#input_Confirm_pass');
input_Confirm_pass.addEventListener('input', label_Confirm_pass);


function label_FirsN() {
    const input = document.querySelector('#input_FirsN');
    const label = document.querySelector('#label_FirsN');
    
    if (input.value.trim() !== '') {
      label.classList.add('ocultar');
    } else {
      label.classList.remove('ocultar');
    }
  }

  function label_LastN() {
    const input = document.querySelector('#input_LastN');
    const label = document.querySelector('#label_LastN');
    
    if (input.value.trim() !== '') {
      label.classList.add('ocultar');
    } else {
      label.classList.remove('ocultar');
    }
  }

  function label_email() {
    const input = document.querySelector('#input_email');
    const label = document.querySelector('#label_email');
    
    if (input.value.trim() !== '') {
      label.classList.add('ocultar');
    } else {
      label.classList.remove('ocultar');
    }
  }

  function label_TelNum() {
    const input = document.querySelector('#input_TelNum');
    const label = document.querySelector('#label_TelNum');
    
    if (input.value.trim() !== '') {
      label.classList.add('ocultar');
    } else {
      label.classList.remove('ocultar');
    }
  }

  function label_identificatorNumber() {
    const input = document.querySelector('#input_identificatorNumber');
    const label = document.querySelector('#label_identificatorNumber');
    
    if (input.value.trim() !== '') {
      label.classList.add('ocultar');
    } else {
      label.classList.remove('ocultar');
    }
  }



  function label_genero() {
    const input = document.querySelector('#genero');
    const label = document.querySelector('#label_genero');
    
    if (input.value.trim() !== '') {
      label.classList.add('ocultar');
    } else {
      label.classList.remove('ocultar');
    }
  }

  function label_Pass() {
    const input = document.querySelector('#input_Password');
    const label = document.querySelector('#label_Pass');
    
    if (input.value.trim() !== '') {
      label.classList.add('ocultar');
    } else {
      label.classList.remove('ocultar');
    }
  }

  function label_Confirm_pass() {
    const input = document.querySelector('#input_Confirm_pass');
    const label = document.querySelector('#label_Confirm_pass');
    
    if (input.value.trim() !== '') {
      label.classList.add('ocultar');
    } else {
      label.classList.remove('ocultar');
    }
  }



  