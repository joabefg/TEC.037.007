class celular {
  constructor(cor, modelo, armazenamento, anoLancamento){
    this.cor = cor;
    this.modelo = modelo;
    this.armazenamento = armazenamento;
    this.ligado = false;
    this.anoLancamento = anoLancamento;
  }

  ligarCelular(){
    this.ligado = true;
    console.log("O celular foi ligado")
  }
  desligarCelular(){
    this.ligado = false
    console.log("O celular foi desligado")
  }
  mostrarInformacoes(){
    console.log(`Celular: ${this.modelo}\nCor: ${this.cor}\nArmazenamento: ${this.armazenamento}\nAno de lançamento: ${this.anoLancamento}`)
  }
}


let meuCelular= new celular("rosa", "raquelly", 256, 2008);
meuCelular.ligarCelular();
meuCelular.desligarCelular();
meuCelular.mostrarInformacoes();