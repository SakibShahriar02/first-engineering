import { useCallback, useEffect, useRef, useState } from "react";
import { contact, galleryItems } from "../../data/site";

/**
 * Home-page hero carousel.
 *
 * This is now the first section of the home page, replacing the old
 * separate hero section. The headline, Bengali line, and Call /
 * consultation CTAs from that hero are preserved here as a STATIC
 * overlay (they do not change with the slides), so the home page keeps
 * its main headline and conversion actions.
 *
 * Slides reuse the existing gallery items verbatim (title + caption).
 * No project names, clients, locations, dates, or prices are claimed:
 * every caption already says "style example", and the hero carries its
 * own visible style-example pill. Replace galleryItems entries with
 * real project photos when they are supplied.
 *
 * Auto-advance behaviour (documented): advances every 5 seconds.
 * There is NO Pause/Resume button, as requested. Auto-advance is
 * paused while the carousel is hovered or focused — that, plus the
 * arrows, dots, keyboard arrows, and swipe, is the remaining control
 * set. A manual arrow/dot/swipe move restarts the 5-second timer
 * cleanly (it does not stack timers and does not fight manual
 * navigation).
 */
export default function ProjectsCarousel() {
  const slides = galleryItems;
  const [index, setIndex] = useState(0);
  const [hoverOrFocus, setHoverOrFocus] = useState(false);
  // Incremented on every manual move so the auto-advance timer restarts
  // even when the user selects the slide already shown.
  const [manualTick, setManualTick] = useState(0);
  const pointerStartX = useRef<number | null>(null);

  const paused = hoverOrFocus;

  const goTo = useCallback((next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length);
    setManualTick((tick) => tick + 1);
  }, [slides.length]);

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (paused || slides.length <= 1) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
    // Restart the timer after any manual move (manualTick) or slide change.
  }, [paused, slides.length, index, manualTick]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  };

  const handlePointerDown = (event: React.PointerEvent) => {
    pointerStartX.current = event.clientX;
  };

  const handlePointerUp = (event: React.PointerEvent) => {
    if (pointerStartX.current === null) return;
    const delta = event.clientX - pointerStartX.current;
    pointerStartX.current = null;
    if (delta <= -50) goNext();
    else if (delta >= 50) goPrev();
  };

  const current = slides[index];

  return (
    <section id="projects" aria-label="Project showcase" className="projects-carousel-section">
      <div
        className="projects-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Project showcase"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setHoverOrFocus(true)}
        onMouseLeave={() => setHoverOrFocus(false)}
        onFocus={() => setHoverOrFocus(true)}
        onBlur={() => setHoverOrFocus(false)}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <div
          className="projects-carousel-viewport"
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${slides.length}: ${current.title}`}
          aria-live="polite"
        >
          <img
            key={current.src}
            src={current.src}
            alt={current.alt}
            className="projects-carousel-image"
            draggable={false}
          />
          <div className="projects-carousel-hero-scrim" aria-hidden="true" />
        </div>

        {/* Static hero overlay: same headline and CTAs as the old hero. */}
        <div className="projects-carousel-hero-overlay">
          <div className="wrap">
            <p className="projects-carousel-hero-kicker">First Engineering — Dhaka</p>
            <h1>Your space, your need — <span className="projects-carousel-hero-accent">solution in one place.</span></h1>
            <p className="projects-carousel-hero-bn bn">আপনার স্পেস, আপনার প্রয়োজন — সমাধান এক জায়গায়।</p>
            <div className="projects-carousel-hero-cta">
              <a className="btn btn-wood" href={`tel:${contact.phoneTel}`}>
                Call {contact.phoneShort}
              </a>
              <a className="btn btn-outline-w" href="/#contact">Request a consultation</a>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="projects-carousel-arrow projects-carousel-arrow-prev"
          aria-label="Previous project"
          onClick={goPrev}
        >
          ‹
        </button>
        <button
          type="button"
          className="projects-carousel-arrow projects-carousel-arrow-next"
          aria-label="Next project"
          onClick={goNext}
        >
          ›
        </button>

        <div className="projects-carousel-bottom">
          <div className="wrap projects-carousel-bottom-in">
            <div className="projects-carousel-caption">
              <span className="projects-carousel-note">Photos are style examples — real project photos will replace these.</span>
              <b>{current.title}</b>
              <span>{current.caption}</span>
            </div>
            <div className="projects-carousel-controls">
              <div
                className="projects-carousel-dots"
                role="group"
                aria-label="Choose a project slide"
              >
                {slides.map((slide, slideIndex) => (
                  <button
                    key={slide.src + slide.title}
                    type="button"
                    className="projects-carousel-dot"
                    aria-label={`Go to slide ${slideIndex + 1}: ${slide.title}`}
                    aria-current={slideIndex === index}
                    onClick={() => goTo(slideIndex)}
                  />
                ))}
              </div>
              <span className="projects-carousel-counter" aria-label={`Slide ${index + 1} of ${slides.length}`}>
                {index + 1} / {slides.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
