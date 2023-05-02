
const APIKEY = "4b332586e9b97b2805a007f45353efcc"


const formularioProvincias = document.querySelector("#formularioProvincias")
formularioProvincias.addEventListener("submit", (e)=>{
  e.preventDefault()
  const ciudad = e.target.children["provincia"].value
  console.log(e.target.children["provincia"].value)
  const consulta = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},ar&appid=71db4a3153716749adab248fafe3b05e&units=metric`)
  .then(respuesta => respuesta.json())
  .then(datos => console.log(datos.main.temp + " grados"))
  .catch(error => console.log("no se pudo comunicar con el servidor"))
})


