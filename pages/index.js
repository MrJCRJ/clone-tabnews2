function Home() {
  return (
    <div>
      <h1>Bem-vindo à página inicial</h1>
      <p>Esta é a página principal da nossa aplicação.</p>
      <p>Para iniciar o servidor de desenvolvimento, execute <code>npm run dev</code>.</p>
      <Footer></Footer>
    </div>
    
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2023 Minha Aplicação. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Home;