
const resultado = obterNomesUnicos(dados);

montaSelect();
function montaSelect() {
  let selectEstudante = document.getElementById("select-estudante")
  //console.log(selectEstudante)
  let listaSelect = "";
  for (let nome of resultado) {
    listaSelect += `
      <option value="${nome}">${nome}</option>
    `
  }
  selectEstudante.innerHTML = listaSelect;
}


function limparFormulario() {
  let section = document.getElementById("resultados-pesquisa")
  section.innerHTML = "";
}
function pesquisar() {
  // Seleciona a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let nomeEstudante = document.getElementById("select-estudante").value
  ///
  // Inicializa uma string vazia para armazenar os resultados HTML
  let resultados = "";

  // Itera sobre cada elemento (dado) do array de dados
  for (let dado of dados) {
    // Constrói a estrutura HTML de cada resultado
    if (nomeEstudante == dado.nomeAluno) {
      resultados += `
            <div class="item-resultado">
                <div class="nome-e-imagem">
                    <img src=${dado.imagemAtestado} alt="Atestado" class="imagem-atestado">
                    <h2 class="nome">${dado.nomeAluno}</h2>
                </div>
                <p class="descricao-meta">Início ${dado.dataInicio} Término ${dado.dataTermino}</p>
            </div>
     `;
    }
  }
  // Atribui a string com os resultados ao conteúdo HTML da seção
  section.innerHTML = resultados;
}

function obterNomesUnicos(dados) {
  // Cria um conjunto (Set) para armazenar os nomes únicos
  const nomesUnicos = new Set();

  // Itera sobre cada objeto no array de dados
  dados.forEach(aluno => {
    // Adiciona o nome do aluno ao conjunto
    nomesUnicos.add(aluno.nomeAluno);
  });

  // Converte o conjunto de volta para um array
  return Array.from(nomesUnicos).sort();
}

