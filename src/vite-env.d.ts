/// <reference types="vite/client" />

declare module '*.html?raw' {
  const content: string;
  export default content;
}

interface Window {
  __portfolioInitialized?: boolean;
  toggleLanguage?: () => void;
  openModal?: (src: string, type: string) => void;
  closeModal?: () => void;
  loadIntoViewer?: (
    url: string,
    name: string,
    title: string,
    author: string,
    outlet: string,
    date: string
  ) => void;
  openMultimodal?: (type: string, src: string, title: string) => void;
  setViewerImage?: (src: string) => void;
  openCurrentViewer?: () => void;
  activeAudios?: HTMLAudioElement[];
  lucide?: { createIcons: () => void };
}
