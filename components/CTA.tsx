'use client';

export default function CTA() {
  return (
    <section
      id="cta"
      className="my-10 sm:my-16 py-12 px-4 sm:px-6 flex justify-center"
    >
      <div className="relative w-full max-w-3xl mx-auto rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-tr from-primary via-secondary to-accent p-[2px]">
        <div className="bg-white/95 rounded-[22px] px-4 py-8 sm:px-8 sm:py-12 md:px-16 md:py-16 flex flex-col items-center text-center gap-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary leading-snug drop-shadow-sm">
            Ready for <span className="text-accent">Personalised</span> Nurse-Led Care?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-primary font-medium max-w-2xl">
            Whether you need staffing or support, we're Australia's trusted network for hospitals, aged care, and home care.
          </p>
          <a href="#contact">
            <button className="bg-accent text-primary font-bold py-2.5 px-6 sm:py-3 sm:px-10 rounded-full text-sm sm:text-base md:text-lg shadow-xl hover:bg-primary hover:text-white transition duration-300">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
