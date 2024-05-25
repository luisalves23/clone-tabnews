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
    <li key={index} style={{ fontSize: '1.2em', fontFamily: 'Arial, sans-serif' }}>
      {presente}
    </li>
  ));

  const estiloTitulo = {
    textAlign: 'center', // Centralizar o texto
    fontFamily: 'cursive', // Usar uma fonte cursiva para o título
    fontStyle: 'italic', // Definir estilo como itálico
    // Adicione mais estilos conforme necessário
  };

  return (
    <div>
      <h2 style={estiloTitulo}>Sugestões de Presente:</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {listaDePresentes}
      </ul>
    </div>
  );
}

export default Home;
