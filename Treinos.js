let heroi = {
    nome: 'Kuroh',
    idade: 34, 
    poder: 'Super Inteligência',
    emMissao: true,
    missaoAtual: 'Proteger a Cidade de New Tokyo'

};

console.log (`O herói ${heroi.nome}, de ${heroi.idade} anos, possui o poder de ${heroi.poder}. Está em missão?`)

if (heroi.emMissao) {
    console.log(`Missão Atual: ${heroi.missaoAtual}`);
}