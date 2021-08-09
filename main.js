const nome = "Jozeanne";
const ano = "2021";
alert("Bem vindo, " + nome + "! Estamos em " + ano);

console.log(nome);

let frutas = ["maçã", "pera"];
frutas.push("uva");
console.log(frutas);
console.log(frutas.join(" - "));

const maca = { nome: "maçã", cor: "vermelha" };
console.log(maca.nome);
console.log(maca.cor);

const uva = { nome: "uva", cor: "roxa" };

frutas = [maca, uva];
console.log(frutas);

const idade = prompt("Qual a sua idade?");
if (idade > 18) alert("Maior de Idade");
else alert("Menor de Idade");

let contador = 0;
while (contador < 5) {
  console.log(contador);
  contador++;
}

for (contador = 5; contador > 0; contador--) console.log(contador);

const data = new Date();
alert(data.toDateString());

function soma(numero01, numero02) {
  return numero01 + numero02;
}

alert(soma(5, 10));

function setReplace(frase, palavra, novaPalavra) {
  return frase.replace(palavra, novaPalavra);
}

alert(setReplace("Vai Japão!", "Japão", "Brasil"));

function maiorDeIdade(idade) {
  if (idade >= 18) return true;

  return false;
}

const idadeVisitantePagina = prompt("Qual a sua idade?");
if (maiorDeIdade(idadeVisitantePagina)) alert("Você é maior de idade!");
else alert("Você é menor de idade!");

function alertaBotao() {
  return alert("Vocẽ clicou no botão.");
}
