function Home() {
  const styles = {
    width: '100vw',
    height: '100vh',
    objectFit: 'cover'
  };

  return (
    <div>
      <img src="./imagem.png" alt="Imagem" style={styles} />
    </div>
  );
}

export default Home;
