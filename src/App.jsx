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
          <span>
            <button>TrackOffers</button>
            <button>Snippets</button>
            <button>ToolsAndTips</button>
            <button>ColabCLUB</button>
          </span>
        </header>
        <div class="left-side">
          <form></form>
        </div>
        <main>Main Content</main>
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
