const cargarPeliculas = async () =>{
const resultado = await fetch('https://api.themoviedb.org/3/movie/550?api_key057588601dc278a155c7e694df690864')


console.log(resultado);
}


cargarPeliculas();