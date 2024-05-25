import React from 'react';

function Home() {
  // Array de presentes
  const presentes = [
    'Livros',
    'Flores',
    'Chocolates',
    'Jóias',
    'Roupas',
    // Adicione mais presentes conforme necessário
  ];

  // Mapeie a array de presentes para elementos de lista
  const listaDePresentes = presentes.map((presente, index) => (
    <li key={index}>{presente}</li>
  ));

  return (
    <div>
      <h1>Sugestões de Presente:</h1>
      <ul>
        {listaDePresentes}
      </ul>
    </div>
  );
}

export default Home;
