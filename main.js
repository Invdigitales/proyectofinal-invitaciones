
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

let boton = document.querySelector("#button")

boton.addEventListener("click", () => {

  Swal.fire('Gracias por completar el formulario de asistencia')
});


const getRemainTime = deadline => {
  let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
    remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

  return {
    remainTime,
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays
  }
};


const countdown = (deadline, elem, finalMessage) => {
  const el = document.getElementById(elem);

  const timerUpdate = setInterval(() => {
    let t = getRemainTime(deadline);
    el.innerHTML = `${t.remainDays}dias:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;

    if (t.remainTime <= 1) {
      clearInterval(timerUpdate)
      el.innerHTML = finalMessage;
    }

  }, 1000)
};

countdown('Oct 09 2022 18:43:30 GMT-0300', 'clock', 'feliz cumple');

console.log(getRemainTime('Oct 09 2022 18:43:30 GMT-0300'));






