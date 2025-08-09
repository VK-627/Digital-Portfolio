export default function ScrollIndicator() {
  const scrollToContent = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute bottom-1 right-8 animate-bounce">
      <button
        onClick={scrollToContent}
        className="flex flex-col items-center gap-2 text-white/60 hover:text-white/80 transition-colors duration-300"
        aria-label="Scroll to content"
      >
        <span className="text-xs">Scroll</span>
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
    </div>
  );
}
