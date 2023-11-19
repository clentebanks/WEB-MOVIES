
let pagina = 1;
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

btnSiguiente.addEventListener('click', ()=>{
  
  if (pagina <1000) {
    pagina +=1;
    cargarPeliculas();
  }
  
});
btnAnterior.addEventListener('click', ()=>{
  
  if (pagina >1) {
    pagina -=1;
    cargarPeliculas();
  }
  
});


const cargarPeliculas = async () =>{

  try{
    const resultado = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=057588601dc278a155c7e694df690864&Language=es-MX&page=${pagina}`);
    console.log(resultado);

    //si el resultado es correcta
    if (resultado.status===200) {
      const datos = await resultado.json();

      let peliculas = '';
      datos.results.forEach(pelicula => {
        peliculas +=`
          <div class="pelicula">
            <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"  />
          </div>
          
          <h3 class="titulo">${pelicula.title}</h3>
          
        `;
      });
      document.getElementById('contenedor').innerHTML=peliculas;



    }else if (resultado.status===401) {
      console.log('llave incorrecta');
    }else if (resultado.status===404) {
      console.log('Pelicula no disponible');
    }else{
      console.log('Error desconocido');
    }
   

  }catch(error){
    console.log(error);
  }

}


cargarPeliculas();