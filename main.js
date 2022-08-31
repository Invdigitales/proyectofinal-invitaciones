
document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', VerInvitados);

function cargarTXT(){
  fetch('./datos.txt')
  .then (function (res){
    return res.text()
  })

  .then(function (invitados){
    console.log(invitados)
    document.getElementById('resultado').innerHTML= invitados;
  })

  .catch(function(error){
    console.log(error);
  })
}

function VerInvitados(){
  fetch('invitados.json')
  .then(function(res){
    return res.json();
  })

  .then (function(data){
    let html = '';
    data.forEach(function(invitados){
      html+= `
      <li>${invitados.nombre} ${invitados.apellido}</li>;
      `;
      document.getElementById('resultado').innerHTML= html
    });
  })
}