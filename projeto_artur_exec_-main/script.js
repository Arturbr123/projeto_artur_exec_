var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função somar
  somar();

});


//Função somar
function somar() {

  //Captura o que está dentro do primeiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let primeiro_numero = Number(document.getElementById("primeiro_numero").value);

  //Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  //Realiza a soma do valor que está na variável "primeiro_numero_inteiro" com o valor que está na
  //variável "segundo_numero_inteiro"
  //E a variável "resultado_soma" recebe o valor da soma
  let resultado_soma = primeiro_numero_inteiro

  if (primeiro_numero_inteiro % 3 == 0 && primeiro_numero_inteiro % 7 == 0 ) {
    É divisivel por 3 e 7 ao mesmo tempo
  }

  //Aqui vai escrever no input "resultado_soma" o valor que está armazenado na variável "resultado_soma"
  document.getElementById("resultado_soma").value = resultado_soma;


}
