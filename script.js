const alunos = [
  {
    name: "Luiz",
    nota1: 11,
    nota2: 5,
  },
  {
    name: "Roger",
    nota1: 2,
    nota2: 5,
  },
  {
    name: "Luiz",
    nota1: 1,
    nota2: 1,
  },
];

function average(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

function printnota(alunos) {
  return `
          Aluno ${alunos.name} possui a média
          de  ${average(alunos.nota1, alunos.nota2)}
        `;
}

for (let aluno of alunos) {
  let notaAluno = printnota(aluno);
  alert(notaAluno);
}
