export default function CTA() {
  return (
    <section
      className="my-16 py-16 px-6 flex justify-center"
      id="cta"
    >
      <div className="relative w-full max-w-3xl mx-auto rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-tr from-primary via-secondary to-accent p-1">
        <div className="bg-white/95 rounded-[22px] p-6 md:p-16 flex flex-col items-center text-center gap-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-2 drop-shadow">
            Ready for Personalised Nurse-Led Care?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary font-medium mb-4">
            Whether you need staffing or support, we're Australia's trusted network for hospitals, aged care, and home care.
          </p>
          <a href="#contact">
            <button className="bg-accent text-primary font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full text-base sm:text-lg shadow-xl hover:bg-primary hover:text-white transition duration-200">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
