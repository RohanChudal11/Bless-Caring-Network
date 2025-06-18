const stats = [
  { label: 'Healthcare Professionals', value: '2,500+' },
  { label: 'Healthcare Facilities', value: '150+' },
  { label: 'Client Satisfaction', value: '99.2%' },
  { label: 'Years of Excellence', value: '15+' }
];

export default function Stats() {
  return (
    <section className="bg-white py-16 px-6" id="stats">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="rounded-2xl bg-secondary/10 py-10 shadow border border-secondary/20">
            <div className="text-3xl md:text-4xl font-extrabold text-primary">{stat.value}</div>
            <div className="mt-2 text-gray-700 text-base md:text-lg">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
