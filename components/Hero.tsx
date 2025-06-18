export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex items-center justify-center pt-24 bg-gradient-to-br from-primary via-secondary to-white"
    >
      {/* Soft dark overlay for text legibility */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-banner.jpg"
          alt="Bless Caring staff"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 md:bg-primary/60" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow">
          Nurse-Led. <span className="text-accent">Personally Matched.</span> Always There.
        </h1>
        <p className="text-lg md:text-2xl mb-4 font-medium drop-shadow">
          Care and support that fits your life — not the other way around.
        </p>
        <p className="mb-8 max-w-xl mx-auto font-light drop-shadow">
          Australia’s trusted nurse-owned agency for Hospitals, Aged Care, and Home Care.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#about">
            <button className="bg-accent text-primary font-bold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-accent transition">
              Get Started
            </button>
          </a>
          <a href="#services">
            <button className="bg-white border-2 border-accent text-primary font-bold py-3 px-8 rounded-full shadow hover:bg-accent/10 transition">
              Our Services
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
