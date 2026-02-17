'use client';

const stats = [
  { value: '2,800+', label: 'Servicios Completados' },
  { value: '1,200+', label: 'Usuarios Activos' },
  { value: '380+', label: 'Profesionales' },
  { value: '4.7', label: 'Calificación Promedio' },
];

export function StatsSection() {
  return (
    <section className="py-12 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-blue-200 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
