
 let url = 'https://jsonplaceholder.typicode.com/users' //origen de los datos
    
 fetch(url) //solicitud a la url
 .then(response => response.json()) //se obtiene la respuesta 
 .then(data => mostrarData(data)) //leemos la data (objeto)
 .catch(error => console.log(error)) //se identiifca un error


 const mostrarData = (data) =>{
   console.log (data)
   let body = ""
         for (var i = 0; i < data.length; i++) {      
            body+=`<tr><td>${data[i].venis}</td><td>${data[i].nombre}</td><td>${data[i].email}</td></tr>`
         }
         document.getElementById('data').innerHTML = body
         //console.log(body)
     }





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





