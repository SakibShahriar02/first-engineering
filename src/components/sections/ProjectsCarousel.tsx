import { useCallback, useEffect, useRef, useState } from "react";
import { galleryItems } from "../../data/site";

/**
 * Project showcase carousel.
 *
 * Slides reuse the existing gallery items verbatim (title + caption).
 * No project names, clients, locations, dates, or prices are claimed:
 * every caption already says "style example", and the section carries
 * its own visible style-example note. Replace galleryItems entries with
 * real project photos when they are supplied.
 *
 * Auto-advance behaviour (documented): advances every 5 seconds.
 * It is paused while the carousel is hovered or focused, and while the
 * user has pressed the Pause button. A manual arrow/dot/swipe move
 * restarts the 5-second timer cleanly (it does not stack timers and
 * does not fight manual navigation).
 */
export default function ProjectsCarousel() {
  const slides = galleryItems;
  const [index, setIndex] = useState(0);
  const [hoverOrFocus, setHoverOrFocus] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  // Incremented on every manual move so the auto-advance timer restarts
  // even when the user selects the slide already shown.
  const [manualTick, setManualTick] = useState(0);
  const pointerStartX = useRef<number | null>(null);

  const paused = hoverOrFocus || userPaused;

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
      <div className="wrap">
        <div className="sec-head">
          <p className="kicker">Project showcase</p>
          <h2>Project Showcase</h2>
          <p className="projects-carousel-note">
            Photos are style examples — real project photos will replace these.
          </p>
        </div>

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
            <div className="projects-carousel-caption">
              <b>{current.title}</b>
              <span>{current.caption}</span>
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

          <div className="projects-carousel-controls">
            <button
              type="button"
              className="projects-carousel-pause"
              aria-label={userPaused ? "Resume automatic slide show" : "Pause automatic slide show"}
              aria-pressed={userPaused}
              onClick={() => setUserPaused((value) => !value)}
            >
              {userPaused ? "▶ Resume" : "❚❚ Pause"}
            </button>
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
    </section>
  );
}
