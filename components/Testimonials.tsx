export default function Testimonials() {
  return (
    <section className="bg-blue-50 py-20 px-6" id="testimonials">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">What People Say</h2>
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <div className="bg-white rounded-2xl p-8 shadow-md border border-accent/20 w-full text-center">
          <p className="text-lg md:text-xl text-gray-700 italic">
            “Bless Caring Network connected us with the most compassionate and reliable nurses we’ve ever worked with. Truly life-changing.”
          </p>
          <div className="mt-4 font-bold text-primary">— Aged Care Facility Manager</div>
        </div>
      </div>
    </section>
  );
}
