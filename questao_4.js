
class aluno{
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota){
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  
  }

  nomeCompleto() {
    return this.primeiroNome + " " + this.segundoNome;
  }
    
  media(){
    return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
  }

  situacao(){
    if (this.media() > 6){
      return 'Aprovado';
    }
    else{
      return 'Reprovado';
    }
  }

}



var alunos = [
  new aluno('Marcos', 'Oliveira', 3, 6),
  new aluno('Marcos2', 'Oliveira', 9, 6),
  new aluno('Marcos3', 'Oliveira', 3, 8),
  new aluno('Marcos54', 'Oliveira', 6, 2),
  new aluno('Marcos7', 'Oliveira', 4, 0)
];

for(var i=0; i < alunos.length; i++){
  alert(alunos[i].nomeCompleto() + "\nMedia: " + alunos[i].media() + "\nSituação: " + alunos[i].situacao());
}

