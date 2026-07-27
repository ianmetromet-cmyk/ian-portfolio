import { useEffect } from 'react';
import './App.css';
import portfolioHtml from './portfolioBody.html?raw';
import { initPortfolio } from './initPortfolio';
import { GalleryLightbox } from './GalleryLightbox';

function App() {
  useEffect(() => {
    (window as Window & { __portfolioInitialized?: boolean }).__portfolioInitialized = false;
    try {
      initPortfolio();
    } catch (err) {
      console.error('Portfolio init failed:', err);
      document.documentElement.classList.remove('js-enabled');
    }

    return () => {
      (window as Window & { __galleryInitAbort?: AbortController }).__galleryInitAbort?.abort();
    };
  }, [portfolioHtml]);

  return (
    <>
      <div id="portfolio-root" dangerouslySetInnerHTML={{ __html: portfolioHtml }} />
      <GalleryLightbox />
    </>
  );
}

export default App;
