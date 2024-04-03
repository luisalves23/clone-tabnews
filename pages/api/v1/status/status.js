function status(request, response) {
  response
    .status(200)
    .json({ mensagem: "Alunos do Curso.dev são pessoas acima da média" });
}

export default status;
