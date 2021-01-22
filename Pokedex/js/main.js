function dex(){
    let poke = document.getElementById('txtn').value.toLowerCase();

    if(poke <= 0 || poke > 649) { //Verifica se o usuário digitou um número válido
        alert("Sinto muito, esse valor não é válido. Digite um valor entre 1 e 649 ou o nome de um pokemón");
        document.getElementById('txtn').value='';
        return;
    }

    let url = `https://pokeapi.co/api/v2/pokemon/${poke}`;

    fetch (url)
    .then(response => response.json() )
    .then(data => {

        let imagem = document.getElementById('foto');
        imagem.innerHTML = `
        <img src='${data.sprites.other.dream_world.front_default}'/>`
        imagem.style.background = "url(./img/bgvisor.png)";
        imagem.style.backgroundSize = "cover";

        let info = document.getElementById('infos');
        info.innerHTML = `
        <p><b>ID:</b> ${data.order}</p>
        <p><b>Nome:</b> ${data.name}</p>
        <p><b>Altura:</b> ${data.height}</p>
        <p><b>Peso:</b> ${data.weight}</p>
        `

    })
    .catch(err => {
        alert("Sinto muito, não foi possível encontrar seu pokémon. Verifique se o nome está correto.");
        console.log(err);
    });

    document.getElementById('txtn').value='';
}



