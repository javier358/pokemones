function Traer_pokemon_pikachu()
{
    var UrlAPI = "https://pokeapi.co/api/v2/pokemon/pikachu"
    console.log(UrlAPI)
    fetch(UrlAPI)
    .then(response => response.json())
    .then(data => 
        {   
            var imagen;
            imagen = document.createElement("img");
            imagen.src = data.sprites.front_default; 
            salida = imagen.src;
            document.getElementById("imagen_pikachu").innerHTML = "<img src =" +salida+">"
        }
        )   

}

function Imprimir_pokemon()
{
    var  UrlAPI = "https://pokeapi.co/api/v2/pokemon/"
    console.log(UrlAPI)
    fetch(UrlAPI)
    .then(response => response.json())
    .then(data => 
        {   
        for (let i of data["results"])
            {
            console.log(data)
            document.write(i.name+"<br>")
            }
        }
        )

}

function Traer_pokemon()
{
    var pokemon = document.getElementById("pokemon_name").value;
    console.log(pokemon)

    var UrlAPI = "https://pokeapi.co/api/v2/pokemon/"+pokemon
    console.log(UrlAPI)
    fetch(UrlAPI)
    .then(response => response.json())
    .then(data => 
        {   
            var imagen;
            imagen = document.createElement("img");
            imagen.src = data.sprites.front_default; 
            salida = imagen.src;
            document.getElementById("imagen_pokemon").innerHTML = "<img src =" +salida+">"
        }
        )   

}