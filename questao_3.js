var nome = ["Luiza Lopes", "Pedro Maia", "Marina Oliveira"];
var nota1 = [10, 9, 5];
var nota2 = [9.8, 8.4, 7.5];

for (var i = 0; i < nome.length; i++) {
  var mult1 = nota1[i] * 0.6;
  var mult2 = nota2[i] * 0.4;
  var soma = mult1 + mult2;



  alert("Nome do aluno: " + nome[i] + "\nNota 1: " + nota1[i] + "\nNota 2: " + nota2[i]);

  alert("Nome do aluno: " + nome[i] + "\nNota Final: " + soma);


}