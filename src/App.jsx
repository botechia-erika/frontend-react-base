import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="parent">
        <header>
          <h1>API-BRAND</h1>
          <nav>
            <button>Home</button>
            <button>Comprar</button>
            <button>Vender</button>
            <button>Club</button>
          </nav>
        </header>
        <div class="left-side">
          <h2>Buscar</h2>
        </div>
        <main>PRODUTOS</main>
        <div class="right-side">Right Snidebar</div>
        <footer>
          <p>brand name </p>
          <span>&copy 2023</span>
        </footer>
      </div>
    </>
  );
}

export default App;
