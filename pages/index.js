import React from 'react';

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

  const estilo = {
    textAlign: 'center', // Centralizar o texto
    fontFamily: 'cursive', // Usar uma fonte cursiva (por exemplo, 'cursive')
    fontStyle: 'italic', // Definir estilo como itálico
    // Adicione mais estilos conforme necessário
  };

  return (
    <div>
      <h2 style={estilo}>Sugestões de Presente:</h2>
      <ul style={{ ...estilo, listStyleType: 'none', padding: 0 }}>
        {listaDePresentes}
      </ul>
    </div>
  );
}

export default Home;
