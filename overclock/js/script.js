let cartas = [];
let tela = document.getElementById('todos');
let cards1 = document.getElementById('cards1');
let cards2 = document.getElementById('cards2');
let cards3 = document.getElementById('cards3');
let contador = 0;

let m1 = [];
let m2 = [];
let m3 = [];

function generateRan(){  //Função para gerar randomicamente o vetor de números
    let max = 21;
    for(i = 0;i<max ; i++){
        var temp = Math.floor(Math.random()*max);
        if(cartas.indexOf(temp) == -1){
            cartas.push(temp);
        }
        else
         i--;
    }
    console.log(cartas);
    for(i=0; i<7; i++) { //as cartas serão organizadas em 3 pilhas
        m1[i] = cartas[i];
        m2[i] = cartas[i+7];
        m3[i] = cartas[i+14];
    }

}

function comecar() { //Chama a função randômica e escreve na tela
    let comeco = document.getElementById('comeco');
    comeco.style.display = 'none';
    generateRan();
    tela.innerHTML = `<h4>Olhe as cartas abaixo e escolha uma.</h4><br>
    <div">`

    cartas.forEach((number) => {
        tela.innerHTML += `<img src="./img/${number}.png">`
    })
    
    tela.innerHTML += `</div>
    <p>Memorizou? Então clique <button onclick="distribuir()">Aqui</button></p>`
}

function distribuir(){ //Apenas mostra na tela as cartas distruídas em 3 filas
    tela.innerHTML = `<h4>Agora, em qual lista está sua carta? Clique no botão correspondente</h4>
    <div class="listas"><div class="list">`

    m1.forEach((number) => {
        tela.innerHTML += `<img src="./img/${number}.png">`
    });
    tela.innerHTML += `<p><button class="button" onclick="emb(this)" value=1>Lista 1</button></p></div><div class="list">`;

    m2.forEach((number) => {
        tela.innerHTML += `<img src="./img/${number}.png">`;
    });
    tela.innerHTML += `<p><button class="button" onclick="emb(this)" value=2>Lista 2</button></p></div><div class="list">`;

    m3.forEach((number) => {
        tela.innerHTML += `<img src="./img/${number}.png">`;
    });
    tela.innerHTML += `<p><button class="button" onclick="emb(this)" value=3>Lista 3</button></p></div>`;
    
    tela.innerHTML += `</div>`
}

function emb(obj) { //vai receber do HTML o valor do botão, de 1 a 3
    if (contador === 3) {
        tela.innerHTML = `<h2>A carta que você pensou foi</h2><br>
        <img src="./img/${cartas[10]}.png">
        <div><p>Para começar de novo, clique <button onclick="reload()">aqui</button></p></div>`
    } else {
        if (obj.value == 1) {
            cartas = [];
            cartas = cartas.concat(...m2, ...m1, ...m3);
            contador++;
        }
        if (obj.value == 2) {
            cartas = [];
            cartas = cartas.concat(...m3,...m2,...m1);
            contador++;
        }
        if (obj.value == 3) {
            cartas = [];
            cartas = cartas.concat(...m1,...m3,...m2);
            contador++;
        }
        m1 = [];
        m2 = [];
        m3 = [];
        for(i=0; i<21; i = i+3) {
            m1.push(cartas[i]);
            m2.push(cartas[i+1]);
            m3.push(cartas[i+2]);
        }
        distribuir();
    }    
}

function reload(){
    document.location.reload(true);
}


