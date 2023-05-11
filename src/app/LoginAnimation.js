const input_email = document.querySelector('#email_input');
input_email.addEventListener('input', ocultarLabelemail);

const input_pass = document.querySelector('#pass_input');
input_pass.addEventListener('input', ocultarLabelpass);



function ocultarLabelemail() {
    const input = document.querySelector('#email_input');
    const label = document.querySelector('#email_label');
    
    if (input.value.trim() !== '') {
      label.classList.add('ocultar');
    } else {
      label.classList.remove('ocultar');
    }
  }

  function ocultarLabelpass() {
    const input = document.querySelector('#pass_input');
    const label = document.querySelector('#pass_label');
    
    if (input.value.trim() !== '') {
      label.classList.add('ocultar');
    } else {
      label.classList.remove('ocultar');
    }
  }



  