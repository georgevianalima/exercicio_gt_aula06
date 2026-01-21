import express from 'express';


const app = express();

const alunos = [
  { id: 1, nome: "Ana", mediaMatematica: 8.7 },
  { id: 2, nome: "Bruno", mediaMatematica: 6.5 },
  { id: 3, nome: "Carla", mediaMatematica: 9.2 },
  { id: 4, nome: "Diego", mediaMatematica: 7.4 },
  { id: 5, nome: "Eduarda ", mediaMatematica: 5.9 }
];

app.get("/", (req, res) => {
  res.json({ mensagem: "API online. Acesse /alunos para ver a lista." });
});

app.get("/alunos", (req, res) => {
  res.json(alunos);
});


app.get("/alunos/:id", (req, res) => {
  const id = Number(req.params.id);
  const aluno = alunos.find((a) => a.id === id);

  if (!aluno) {
    return res.status(404).json({ erro: "Aluno não encontrado" });
  }

  res.json(aluno);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta http://localhost:3000");    
})