import { useEffect } from 'react';

function stopLightboxEvent(e: React.MouseEvent | React.PointerEvent) {
  e.preventDefault();
  e.stopPropagation();
}

export function GalleryLightbox() {
  useEffect(() => {
    window.bindGalleryLightboxControls?.();
  }, []);

  return (
    <div
      id="galleryLightbox"
      className="gallery-lightbox"
      role="dialog"
      aria-modal="true"
      aria-labelledby="galleryLightboxTitle"
      aria-hidden="true"
      tabIndex={-1}
    >
      <h2 id="galleryLightboxTitle" className="sr-only">
        Expanded gallery view
      </h2>

      <div className="gallery-lightbox__chrome">
        <button
          type="button"
          className="gallery-lightbox__close"
          data-gallery-close
          aria-label="Close expanded view"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.closeGalleryLightbox?.();
          }}
        >
          &times;
        </button>
        <button
          type="button"
          className="gallery-lightbox__nav gallery-lightbox__nav--prev"
          data-gallery-prev
          aria-label="Previous asset"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.stepGalleryLightbox?.(-1);
          }}
        >
          <span aria-hidden="true">&#8249;</span>
        </button>
        <button
          type="button"
          className="gallery-lightbox__nav gallery-lightbox__nav--next"
          data-gallery-next
          aria-label="Next asset"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.stepGalleryLightbox?.(1);
          }}
        >
          <span aria-hidden="true">&#8250;</span>
        </button>

        <div className="gallery-lightbox__zoom is-hidden" data-gallery-zoom aria-hidden="true">
          <button
            type="button"
            data-gallery-zoom-out
            aria-label="Zoom out"
            onClick={(e) => {
              stopLightboxEvent(e);
              window.adjustGalleryZoom?.(-0.25);
            }}
          >
            −
          </button>
          <button
            type="button"
            data-gallery-zoom-reset
            aria-label="Reset zoom"
            onClick={(e) => {
              stopLightboxEvent(e);
              window.resetGalleryZoom?.();
            }}
          >
            100%
          </button>
          <button
            type="button"
            data-gallery-zoom-in
            aria-label="Zoom in"
            onClick={(e) => {
              stopLightboxEvent(e);
              window.adjustGalleryZoom?.(0.25);
            }}
          >
            +
          </button>
        </div>
      </div>

      <div className="gallery-lightbox__stage">
        <div className="gallery-lightbox__media" data-gallery-stage />
        <div className="gallery-lightbox__caption-row">
          <p className="gallery-lightbox__caption" data-gallery-caption />
          <button
            type="button"
            className="gallery-lightbox__cc is-hidden"
            data-gallery-cc
            aria-pressed="false"
            aria-label="Toggle captions"
            aria-hidden="true"
            onClick={(e) => {
              stopLightboxEvent(e);
              window.toggleGalleryCaptions?.();
            }}
          >
            CC
          </button>
        </div>
        <p className="gallery-lightbox__counter mono-text" data-gallery-counter aria-live="polite" />
      </div>
    </div>
  );
}
