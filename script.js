
const APIKEY = "4b332586e9b97b2805a007f45353efcc"


const formularioProvincias = document.querySelector("#formularioProvincias")
formularioProvincias.addEventListener("submit", async (e)=>{
  e.preventDefault()
  const ciudad = e.target.children["provincia"].value
  console.log(e.target.children["provincia"].value)
  /*
  const consulta = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},ar&appid=71db4a3153716749adab248fafe3b05e&units=metric`)
  .then(respuesta => respuesta.json())
  .then(datos => console.log(datos.main.temp + " grados"))
  .catch(error => console.log("no se pudo comunicar con el servidor"))
  */
  try{
    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},ar&appid=71db4a3153716749adab248fafe3b05e&units=metric`)
    const data = await resp.json()
    console.log(data.main.temp + " grados")
  }catch(e){
    console.log("no se pudo comunicar con el servidor")
  }
})
/*
// traer los post de placeholder
  const lista = document.querySelector('#listado')
fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (resp) => resp.json() )
    .then( (data) => {
       
        data.forEach((post) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${post.title}</h4>
                <p>${post.body}</p>
            `
            lista.append(li)
        })
    })
// Enviar un dato a placeholder
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
          title: 'Coderhouse',
          body: 'Post de prueba',
          userId: 1,
      }),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
  })
  .then((response) => response.json())
  .then((data) => console.log(data))

// archivo data json
const lista2 = document.querySelector('#listado2')
fetch('/data.json')
    .then( (res) => res.json())
    .then( (data) => {

        data.forEach((producto) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${producto.nombre}</h4>
                <p>${producto.precio}</p>
                <p>Código: ${producto.id}</p>
                <hr/>
            `
   
            lista2.append(li)
        })
    })
    */
    fetch('https://swapi.dev/api/people/')
    .then((response) => response.json())
    .then((json) => console.log(json));