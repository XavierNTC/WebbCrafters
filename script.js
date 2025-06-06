function expandir1() {

    /*
        As funções retrair tem como função expandir e retrair os parágrafos retrateis através da adição e remoção da classe "expandir". Além disso, há o efeito de rotacionar as setas que ativam as funções, dessa forma a seta acompanha a direção em que o parágrafo se moverá, tornando a dinâmica mais intuitiva. 
    */

    var p = document.getElementById("paragrafoRetratil1"); // Cria uma variavel para representar o parágrafo retrátil.
    p.classList.toggle("expandir"); // Expande e retrai o parágrafo.

    var seta = document.getElementById("seta1"); // Cria uma variavel para representar a seta que ativa essa função.

    var setaParaCima = "setaParaCima"; // Cria uma variavel para representar a classe que aponta a seta para cima.
    var setaParaBaixo = "setaParaBaixo"; // Cria uma variavel para representar a classe que aponta a seta para baixo.

    if (seta.classList.contains(setaParaCima)) { // Se a seta estiver para cima ela vai para baixo.

        seta.classList.remove(setaParaCima);
        seta.classList.add(setaParaBaixo);

    } else if (seta.classList.contains(setaParaBaixo)) {  // Se a seta estiver para baixo ela vai para cima.

        seta.classList.remove(setaParaBaixo);
        seta.classList.add(setaParaCima);

    } else  if (!seta.classList.contains(setaParaBaixo) && !seta.classList.contains(setaParaCima)) { // Se for a primaeira ativação da função a seta não possuirá nenhuma das classes, como ela começa para baixo, mandamos ela para cima.

        seta.classList.add(setaParaCima); 

    }
}
function expandir2() {

    /*
        As funções retrair tem como função expandir e retrair os parágrafos retrateis através da adição e remoção da classe "expandir". Além disso, há o efeito de rotacionar as setas que ativam as funções, dessa forma a seta acompanha a direção em que o parágrafo se moverá, tornando a dinâmica mais intuitiva. 
    */

    var p = document.getElementById("paragrafoRetratil2"); // Cria uma variavel para representar o parágrafo retrátil.
    p.classList.toggle("expandir"); // Expande e retrai o parágrafo.


    var seta = document.getElementById("seta2"); // Cria uma variavel para representar a seta que ativa essa função.

    var setaParaCima = "setaParaCima"; // Cria uma variavel para representar a classe que aponta a seta para cima.
    var setaParaBaixo = "setaParaBaixo"; // Cria uma variavel para representar a classe que aponta a seta para baixo.

    if (seta.classList.contains(setaParaCima)) { // Se a seta estiver para cima ela vai para baixo.

        seta.classList.remove(setaParaCima);
        seta.classList.add(setaParaBaixo);

    } else if (seta.classList.contains(setaParaBaixo)) {  // Se a seta estiver para baixo ela vai para cima.

        seta.classList.remove(setaParaBaixo);
        seta.classList.add(setaParaCima);

    } else  if (!seta.classList.contains(setaParaBaixo) && !seta.classList.contains(setaParaCima)) { // Se for a primaeira ativação da função a seta não possuirá nenhuma das classes, como ela começa para baixo, mandamos ela para cima.

        seta.classList.add(setaParaCima); 

    }
}
function expandir3() {

    /*
        As funções retrair tem como função expandir e retrair os parágrafos retrateis através da adição e remoção da classe "expandir". Além disso, há o efeito de rotacionar as setas que ativam as funções, dessa forma a seta acompanha a direção em que o parágrafo se moverá, tornando a dinâmica mais intuitiva. 
    */

    var p = document.getElementById("paragrafoRetratil3"); // Cria uma variavel para representar o parágrafo retrátil.
    p.classList.toggle("expandir"); // Expande e retrai o parágrafo.


    var seta = document.getElementById("seta3"); // Cria uma variavel para representar a seta que ativa essa função.

    var setaParaCima = "setaParaCima"; // Cria uma variavel para representar a classe que aponta a seta para cima.
    var setaParaBaixo = "setaParaBaixo"; // Cria uma variavel para representar a classe que aponta a seta para baixo.

    if (seta.classList.contains(setaParaCima)) { // Se a seta estiver para cima ela vai para baixo.

        seta.classList.remove(setaParaCima);
        seta.classList.add(setaParaBaixo);

    } else if (seta.classList.contains(setaParaBaixo)) {  // Se a seta estiver para baixo ela vai para cima.

        seta.classList.remove(setaParaBaixo);
        seta.classList.add(setaParaCima);

    } else  if (!seta.classList.contains(setaParaBaixo) && !seta.classList.contains(setaParaCima)) { // Se for a primaeira ativação da função a seta não possuirá nenhuma das classes, como ela começa para baixo, mandamos ela para cima.

        seta.classList.add(setaParaCima); 

    }
}

let menuAberto = false;

function expandirMenu() {
    /*
        Essa função expande e retrai o menu na versão ,obile do site
    */
    const menu = document.querySelector('.espacoMenu');
    const iconMenu = document.querySelector('#iconMenuDois');

    if (!menuAberto) {
        menu.classList.add('aberto'); // Adiciona a classe 'aberto' para mostrar o menu
    } else {
        menu.classList.remove('aberto'); // Remove a classe 'aberto' para esconder o menu
    }

    menuAberto = !menuAberto; // Inverte o estado do menu
}

document.addEventListener('scroll', function() {

    /*
        Essa função rotaciona o circulo maior da seção tempo em sentido horário.
    */

    const element = document.getElementById('imagemSecaoTempo1'); // Cria uma variável para a imagem.
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Lê a rolagem da tela.

    const rotationFactor = 0.1; // (quanto maior o valor, mais devagar a rotação).
    const rotationDegree = scrollTop * rotationFactor;

    element.style.transform = `rotate(${rotationDegree}deg)`; // Adiciona a rotação ao elemento.
});

document.addEventListener('scroll', function() {

    /*
        Essa função rotaciona o circulo menor da seção tempo em sentido anti-horário.
    */

    const element = document.getElementById('imagemSecaoTempo2'); // Cria uma variável para a imagem.
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Lê a rolagem da tela.

    const rotationFactor = 0.2; // (quanto maior o valor, mais devagar a rotação).
    const rotationDegree = scrollTop * rotationFactor * -1;

    element.style.transform = `rotate(${rotationDegree}deg)`; // Adiciona a rotação ao elemento.
});

/*
let cont = 0;

window.addEventListener('scroll', function() {
    var elemento = document.getElementById('secaoManutencao');
    var posicao = elemento.getBoundingClientRect();
    
    
    // Verifica se qualquer parte da div está visível na tela
    if (posicao.top < window.innerHeight && posicao.bottom >= 0 && cont == 0) {
        // A div está visível, execute o efeito desejado
        confirm('A div está visível!');
        cont++;
    }
});
*/