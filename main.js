//declaramos la URI
const URI = "https://pokeapi.co/api/v2/"
var POKEMON = "pokemon/"

    window.onload = function(){
        getPokemons()
}

async function getPokemons(){
    //aplicamos el fetch
    fetch(URI+POKEMON)
    .then(function(respuesta){
        //datos de la respuesta
        if (respuesta.status === 200)

            return respuesta.json()
        else 
            throw new Error("Ocurrio un Error" + respuesta.status)
    })
    .then(function(data){
        // console.log(data.results)
        return data.results
    })
    .then(function(results){
    //   console.log(results[0])
        document.getElementById("pokemonsPrincipal").innerHTML = "<h2>Pokemones Principales<h2>"
        //por cada pokemon agreaga los datos
        results.forEach(i =>{
            // console.log(i)
            document.getElementById("pokemonsPrincipal").innerHTML += 
            `
            <tr>
                <td>${i.name}</td>
            </tr>
            `
        })
    })

}
    
async function buscarPokemo(){
    // console.log("soy boton buscar")
    var $buscarInput = document.getElementById("buscarInput").value
    $buscarInput = $buscarInput.toLowerCase()
    console.log($buscarInput)
    if($buscarInput != ""){
        //aplicamos fetch
        fetch(URI+POKEMON+$buscarInput)
        .then(function(respuesta){
            //datos de la respuesta
            if (respuesta.status === 200){
                // console.log(respuesta)
                return respuesta.json()
            }
            else{

                document.getElementById("error").innerHTML =
                `
                <p>No se encontro resultado para "${$buscarInput}"<p>
                `
                throw new Error("Ocurrio un Error " + respuesta.status)
                
            }
        })
        .then(function(data){
            console.log(data)
            document.getElementById("Imagen").style = `background-image: url("${data.sprites.other.home.front_default}"); width: 30%; height: 500px; `
            document.getElementById("resultadoBuscar").innerHTML = ""
            document.getElementById("resultadoBuscar").innerHTML =
            `
            <ul>
                <li>Nombre: ${data.forms[0].name}</li>
                <li>Habilidad: ${data.types[0].type.name}</li>
                <li>Peso: ${data.weight}</li>
            </ul>
            `

            
        })
        //agrege catch por si ocurre un error durante el fetch
        .catch(function(){
            console.log("Error de Conexicon de datos API")
        })
    }else{
        alert("no insertaste datos")
    }
    document.getElementById("buscarInput").value = ""
}



//listar Pokemones
// CRUD.getPokemons()

//obtenr pokemon por NOMBRE
// CRUD.getPokemonName("pikachu")


//obtener pokemon por ID
// CRUD.getPokemonID(4)


// function PokemonsPrincipales(){
//     document.getElementById("pokemonsPrincipal").innerHTML = ""
// }
