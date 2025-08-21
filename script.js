const resultado = document.getElementById('resultado');
const calcular = document.getElementById('calcular');

function imc() {
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;

  if (nome !== '' && altura !== '' && peso !== '') {
    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacao = '';

    if (valorIMC < 18.5) {
      classificacao = 'abaixo do peso.';
    } else if (valorIMC < 25) {
      classificacao = 'com peso ideal. Parabéns!!';
    } else if (valorIMC < 30) {
      classificacao = 'levemente acima do peso.';  
    }

    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

  } else {
    resultado.textContent = 'Preencha todos os campos!!';
  }
}

calcular.addEventListener('click', imc);