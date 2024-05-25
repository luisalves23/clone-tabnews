import React from 'react';
import './Home.css'; // Importando o arquivo CSS onde você definirá a fonte

function Home() {
  const presentes = [
    'Livros',
    'Flores',
    'Chocolates',
    'Jóias',
    'Roupas',
    // Adicione mais presentes conforme necessário
  ];

  const listaDePresentes = presentes.map((presente, index) => (
    <li key={index}>{presente}</li>
  ));

  return (
    <div>
      <h1 className="titulo">Sugestões de Presente:</h1>
      <ul className="lista">
        {listaDePresentes}
      </ul>
    </div>
  );
}

export default Home;
