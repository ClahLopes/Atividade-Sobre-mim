const nav = document.getElementsByTagName("nav")[0];
const topoNav = nav.offsetTop; // offset - método só de leitura, retorna a distancia em px do elemento em relação ao elemento pai, ou seja, a distancia do nav para o topo do body(elemento pai)

window.onscroll = function(){
    fixarMenuNoTopo();
}

function fixarMenuNoTopo(){
    if(window.pageYOffset >= topoNav){
        nav.classList.add("FixoNoTopo");
    } else{
        nav.classList.remove("FixoNoTopo");
    }
}