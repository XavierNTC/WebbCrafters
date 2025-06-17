// --- Funções de Expandir/Retrair Parágrafos (Refatoradas) ---
function toggleParagraph(paragraphId, arrowId) {
    /*
        Esta função expande e retrai parágrafos retráteis através da adição e remoção da classe "expandir".
        Além disso, ela rotaciona a seta que ativa a função, tornando a dinâmica mais intuitiva.
    */
    const p = document.getElementById(paragraphId);
    p.classList.toggle("expandir");

    const seta = document.getElementById(arrowId);
    const setaParaCima = "setaParaCima";
    const setaParaBaixo = "setaParaBaixo";

    // Alterna a classe da seta para cima/baixo
    if (seta.classList.contains(setaParaCima)) {
        seta.classList.remove(setaParaCima);
        seta.classList.add(setaParaBaixo);
    } else if (seta.classList.contains(setaParaBaixo)) {
        seta.classList.remove(setaParaBaixo);
        seta.classList.add(setaParaCima);
    } else { // Para a primeira ativação, assume que a seta deve ir para cima
        seta.classList.add(setaParaCima);
    }
}

// Adaptação das suas funções originais para usar a função genérica `toggleParagraph`
function expandir1() {
    toggleParagraph("paragrafoRetratil1", "seta1");
}

function expandir2() {
    toggleParagraph("paragrafoRetratil2", "seta2");
}

function expandir3() {
    toggleParagraph("paragrafoRetratil3", "seta3");
}

// --- Função de Expandir/Retrair Menu Mobile ---
let menuAberto = false;

function expandirMenu() {
    /*
        Essa função expande e retrai o menu na versão mobile do site.
    */
    const menu = document.querySelector('.espacoMenu');
    // const iconMenu = document.querySelector('#iconMenuDois'); // Esta variável não está sendo usada

    if (!menuAberto) {
        menu.classList.add('aberto'); // Adiciona a classe 'aberto' para mostrar o menu
    } else {
        menu.classList.remove('aberto'); // Remove a classe 'aberto' para esconder o menu
    }

    menuAberto = !menuAberto; // Inverte o estado do menu
}

// --- Funções de Rotação de Elementos ao Rolar ---
document.addEventListener('scroll', function() {
    /*
        Essa função rotaciona o círculo maior da seção tempo em sentido horário.
    */
    const element = document.getElementById('imagemSecaoTempo1');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const rotationFactor = 0.1; // Quanto maior o valor, mais devagar a rotação.
    const rotationDegree = scrollTop * rotationFactor;

    if (element) { // Garante que o elemento existe antes de tentar manipulá-lo
        element.style.transform = `rotate(${rotationDegree}deg)`;
    }
});

document.addEventListener('scroll', function() {
    /*
        Essa função rotaciona o círculo menor da seção tempo em sentido anti-horário.
    */
    const element = document.getElementById('imagemSecaoTempo2');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const rotationFactor = 0.2; // Quanto maior o valor, mais devagar a rotação.
    const rotationDegree = scrollTop * rotationFactor * -1; // Multiplica por -1 para anti-horário

    if (element) { // Garante que o elemento existe antes de tentar manipulá-lo
        element.style.transform = `rotate(${rotationDegree}deg)`;
    }
});

// --- Função de Rolagem Suave (Smooth Scrolling) ---
function smoothScrollTo(targetId) {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Adiciona listeners de evento para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão de "pulo" do link
        const targetId = this.getAttribute('href');
        smoothScrollTo(targetId);
    });
});

// Lida com a rolagem suave para links que vão para uma seção específica em outra página
window.addEventListener('load', function() {
    if (window.location.hash) {
        // Dá um momento para o navegador renderizar a página antes de rolar
        setTimeout(() => {
            smoothScrollTo(window.location.hash);
        }, 100);
    }
});

// --- Botão "Voltar ao Topo" ---
// Certifique-se de ter um botão no seu HTML com id="backToTopBtn"
// Ex: <button id="backToTopBtn" title="Voltar ao topo">↑</button>

let backToTopButton = document.getElementById("backToTopBtn");

// Verifica se o botão existe antes de adicionar listeners
if (backToTopButton) {
    // Quando o usuário rola para baixo 20px do topo do documento, mostra o botão
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // Quando o usuário clica no botão, rola para o topo do documento
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// --- Bloco de código comentado (ignorado) ---
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