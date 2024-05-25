import React from 'react';

function Home() {
  const presentes = [
    'Livros',
    'Flores',
    'Chocolates',
    'Jóias',
    'Roupas',
  ];

  const listaDePresentes = presentes.map((presente, index) => (
    <li key={index}>{presente}</li>
  ));

  const estilo = {
    fontFamily: 'cursive', // Aqui você pode definir a fonte manuscrita desejada
    // Adicione mais estilos conforme necessário
  };

  return (
    <div>
      <h1 style={estilo}>Sugestões de Presente:</h1>
      <ul style={estilo}>
        {listaDePresentes}
      </ul>
    </div>
  );
}

export default Home;
