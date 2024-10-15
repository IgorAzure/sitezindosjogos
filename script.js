// console.log("hello world")

const jogos = {
    CallOfDuty: {
        nome: "Call Of Duty",
        imagem: "https://logosmarcas.net/wp-content/uploads/2021/02/Call-of-Duty-Logo.png",
        resumo: "um jogo de viciado em cocaina"
    },
    CounterStrike: {
        nome: "CSGO",
        imagem: "https://w7.pngwing.com/pngs/478/212/png-transparent-cs-go-counter-strike-global-offensive-counter-strike-source-video-game-valve-corporation-counter-logo-silhouette-counter-strike-thumbnail.png",
        resumo: "um jogo muito bom, faz os amiguinhos terem raiva"
    },
    Valorant: {
        nome: "Valorant",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Valorant_logo_-_pink_color_version.svg",
        resumo: "um jogo muito merda"
    },
    Battlefield: {
        nome: "Battlefield",
        imagem: "https://cdn.worldvectorlogo.com/logos/battlefield.svg",
        resumo: "Em 2013 era BOM, hoje em dia é uma piada"
    }
}

function mudarJogo(jogo){
    let jogo_ = jogos[jogo];
    let gameDiv = document.getElementById('jogo-info');

    gameDiv.innerHTML = `
    <h1> ${jogo_.nome} </h1>
    <img src="${jogo_.imagem}" width="150px"/>
    <p> ${jogo_.resumo} </p>
    ` 

    let menuLateral = document.querySelector(".menu-lateral")
    let container = document.querySelector(".container")

    if(menuLateral.classList.contains('open')){
        menuLateral.classList.remove('open')
        container.classList.remove('open')
    }
}

function toggleMenu(){
    let menuLateral = document.querySelector('.menu-lateral')
    let container = document.querySelector('.container')
    menuLateral.classList.toggle('open');
    container.classList.toggle('open');
}