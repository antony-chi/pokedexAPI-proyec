//invocamos a request
// const request = require("request")

//declaramos la URI

const URI = "https://pokeapi.co/api/v2/"
var POKEMON = "pokemon/"

function getPokemons(){
    //aplicamos el fetch
    var datos = fetch(URI+POKEMON).then(function(respuesta){
        //datos de la respuesta 
        return respuesta.json()
    })
    console.log(datos)

    // request.get(URI+POKEMON+"/",(error, response, body) => 
    // {
    //     //validamos nuestra peticion 
    //     if(response.statusCode === 200)
    //     {
    //         const pokemons = JSON.parse(body)
    //         console.log(pokemons)
    //         return pokemons
    //     }else{
    //         console.log(response.statusCode, response.statusMessage)
    //             //mostrara el error
    //     }
    // })
}

//fuhncion obtener pokemon por nombre
const getPokemonName = (name) =>
{
    request.get(URI+POKEMON+name,(error, response, body) =>
    {
       if (response.statusCode === 200)
       {
            const pokemonEncontrado = JSON.parse(body)
            console.log(pokemonEncontrado.forms[0].name)
            return pokemonEncontrado
       } else
       {
            console.log(response.statusCode, response.statusMessage)
                //por si hay error
       }
    })
}


//funcion buscar pokemon por ID //PASAMOS EL ID como numero sin comillas

const getPokemonID = (id) =>
{   
    request.get(URI+POKEMON+id,(error,response,body) =>{
        if (response.statusCode == 200) {
            const pokemonEncontrado = JSON.parse(body)
            console.log(pokemonEncontrado.forms)
            return pokemonEncontrado
        } else {
            console.error("se encontro error"+response.statusCode, response.statusMessage)
        }
    })
}


function provar(name){
    console.log("hola" + name)
}

//exportar las funciones
export  {getPokemons, provar}
