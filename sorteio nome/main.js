const btnSortear = document.querySelector('.sortear');
const textarea = document.querySelector('textarea');
const tagResultado = document.querySelector('.resultado p'); 
const popResultado = document.querySelector('.resultado'); 

function pegarDadosFormulario() {
  const valorCampo = textarea.value;
  const listaNomes = valorCampo.split(",");
  const tamanhoArray = listaNomes.length;
  const posicaoNome = gerarNumeroAleatório(tamanhoArray);
  const Nome = listaNomes[posicaoNome];

  mostraResultado(Nome);
  textarea.value = "";
}

btnSortear.addEventListener("click", pegarDadosFormulario);

function gerarNumeroAleatório(tamanhoArray) {
  return Math.floor(Math.random() * tamanhoArray);
}

// mostra resultado
function mostraResultado(Nome) {
  tagResultado.innerHTML = `Resultado: ${Nome}`; // Usando template string com crases
  popResultado.classList.add("resultado");
}