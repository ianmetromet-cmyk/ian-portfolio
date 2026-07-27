/// <reference types="vite/client" />

declare module '*.html?raw' {
  const content: string;
  export default content;
}

interface Window {
  __portfolioInitialized?: boolean;
  __galleryLightboxState?: {
    currentItems: Element[];
    currentIndex: number;
    lastTrigger: Element | null;
    zoom?: { scale: number; x: number; y: number };
  };
  bindGalleryLightboxControls?: () => void;
  adjustGalleryZoom?: (delta: number) => void;
  resetGalleryZoom?: () => void;
  __galleryLightboxAbort?: AbortController;
  __galleryVideoEscapeAbort?: AbortController | null;
  __galleryInitAbort?: AbortController;
  toggleLanguage?: () => void;
  openModal?: (src: string, type: string) => void;
  closeModal?: () => void;
  openGalleryLightbox?: (galleryEl: Element, index: number, trigger?: Element | null) => void;
  closeGalleryLightbox?: () => void;
  stepGalleryLightbox?: (delta: number) => void;
  toggleGalleryCaptions?: () => void;
  activeAudios?: HTMLAudioElement[];
  lucide?: { createIcons: () => void };
}
