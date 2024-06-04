import React from 'react';
import imagem from './imagem.png';  // Importa a imagem usando caminho relativo

function Home() {
  // Defina estilos para que a imagem ocupe toda a tela
  const styles = {
    width: '100vw',
    height: '100vh',
    objectFit: 'cover'  // Garante que a imagem cubra a área inteira
  };

  return (
    <div>
      <img src={imagem} alt="Imagem" style={styles} />
    </div>
  );
}
