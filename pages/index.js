import React from 'react';

function Home() {
  const categorias = [
    {
      nome: 'Coisas de Cozinha',
      presentes: [
        'Jogo de copo',
        'Jogo de talher',
        'Jogo de prato',
        'Potes (tamanho diversos)',
        'Jogo de pano de prato',
        'Jogo de colher para cozinhar',
        'Kit mesa posta',
        'Batedeira',
        'Liquidificador',
        'Cafeteira',
        'Microondas',
        'Sanduicheira',
        'Jogo de taças',
        'Porta temperos',
        'Jogo de panelas',
        'Jogo de facas',
        'Jarra',
        'Jogo americano',
        'Assadeiras',
        'Xícaras/ canecas'
      ]
    },
    {
      nome: 'Lavanderia',
      presentes: [
        'Aspirador de pó',
        'Rodo flat mob',
        'Tábua de passar roupa',
        'Ferro de passar roupa',
        'Kit de ferramentas'
      ]
    },
    {
      nome: 'Quarto',
      presentes: [
        'Jogo de cama',
        'Edredom',
        'Travesseiro',
        'Almofada',
        'Kit cabides',
        'Lençóis',
        'Caixas organizadoras',
        'Cortina/ blackout',
        'Espelho'
      ]
    },
    {
      nome: 'Banheiro',
      presentes: [
        'Toalha de banho',
        'Roupão',
        'Kit de lavabo'
      ]
    }
    // Adicione mais categorias conforme necessário
  ];

  const listaDeCategorias = categorias.map((categoria, index) => (
    <div key={index}>
      <h2>{categoria.nome}</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {categoria.presentes.map((presente, i) => (
          <li key={i} style={{ fontSize: '1.2em', fontFamily: 'Arial, sans-serif' }}>
            {presente}
          </li>
        ))}
      </ul>
    </div>
  ));

  const estiloTitulo = {
    textAlign: 'center', // Centralizar o texto
    fontFamily: 'cursive', // Usar uma fonte cursiva para o título
    fontStyle: 'italic', // Definir estilo como itálico
    // Adicione mais estilos conforme necessário
  };

  return (
    <div>
      <h1 style={estiloTitulo}>Sugestões de Presente por Categoria:</h1>
      {listaDeCategorias}
    </div>
  );
}

export default Home;
