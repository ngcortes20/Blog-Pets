document.querySelector('.login-form').addEventListener('submit', function (e) { //Formulario
    e.preventDefault(); // Para que no se envíe el formulario
    document.getElementById('alerta').classList.remove('d-none');
  });
 
  function ocultarAlerta() { // Oculta la alerta
    document.getElementById('alerta').classList.add('d-none');
  }