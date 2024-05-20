// Função que gera um objeto com dados aleatórios e exibe na tela
function gerarEDisplayDados() {
  const temperatura = Math.round(Math.random() * 100);
  const watt = Math.round(Math.random() * 100);
  const pressao = Math.round(Math.random() * 100);

  const dados = {
    temperatura: temperatura,
    watt: watt,
    pressao: pressao,

  }; console.log(dados);

  if (temperatura >= 80) {
    toggleDiv();
  }

  // Atualiza os elementos HTML com os dados gerados
  document.getElementById('p_temp').textContent = temperatura + " °C";
  document.getElementById('p_Watt').textContent = watt + " Watts";
  document.getElementById('p_press').textContent = pressao + " Psi";


  // Chama a função novamente após 2 segundos
  setTimeout(gerarEDisplayDados, 3000);
}

// Iniciar a geração de dados imediatamente
gerarEDisplayDados();

function toggleDiv() {
  var show = document.getElementById("alert");
  show.style.display = "block";

}

function hideDiv() {
  var hide = document.getElementById("alert");
  hide.style.display = "none";

}

setInterval(hideDiv, 5000);

