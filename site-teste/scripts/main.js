let minhaImagem = document.querySelector('img');
minhaImagem.onclick = function(){
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === "imagens/firefox-logo.png"){
        minhaImagem.setAttribute('src',"imagens/firefox2.jpg");
    }else{
        minhaImagem.setAttribute('src',"imagens/firefox-logo.png");
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario(){
    let meuNome = prompt('Por favor, digite seu nome:');
    if(!meuNome || meuNome === null){
        defineNomeUsuario();
    }else{
    localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = 'Mozilla é massa, ' + meuNome;
}
}

if(!localStorage.getItem('nome')){
    defineNomeUsuario();
}else{
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Mozila é legal, ' + nomeGuardado;
}

meuBotao.onclick = function(){
    defineNomeUsuario()
}; 