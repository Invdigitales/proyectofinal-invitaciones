let form = document.querySelector("#form")
let nombre = document.querySelector("#nombre")
let apellido = document.querySelector("#apellido")
let viene = document.querySelector("#viene")
let boton = document.querySelector("#btn")


boton.addEventListener("click", () => {

  Swal.fire({
    title: '<strong>VER LA UBICACION <u></u></strong>',
    icon: 'info',
    html:
      'INGRESA, ' +
      '<a href=https://www.google.com.ar/maps/@-33.1477351,-62.8617599,15z</a> ' +
      'and other HTML tags',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down'
  })
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




const boton2 = document.querySelector("#boton2");
const contenedor = document.querySelector("#fetch");
console.log("buton",boton2)

const obtenerDatos = (e)=> {
  e.preventDefault()
  fetch("./datos.json")
  .then(response => console.log(response))
}



boton2.onclick = (e)=> {
  obtenerDatos(e);
}