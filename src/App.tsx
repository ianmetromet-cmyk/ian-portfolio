import { useEffect } from 'react';
import './App.css';
import portfolioHtml from './portfolioBody.html?raw';
import { initPortfolio } from './initPortfolio';

function App() {
  useEffect(() => {
    initPortfolio();
  }, []);

  return <div id="portfolio-root" dangerouslySetInnerHTML={{ __html: portfolioHtml }} />;
}

export default App;
