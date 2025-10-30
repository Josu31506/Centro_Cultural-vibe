import type { Event } from './event';

export const events: Event[] = [
  {
    id: 'arte-digital',
    title: 'Conferencia de Arte Digital',
    category: 'Conferencia',
    summary: 'Explora las últimas tendencias en arte digital con expertos internacionales.',
    description:
      'Sumérgete en un viaje creativo con profesionales que comparten sus técnicas, procesos y herramientas para crear arte digital impactante. Ideal para artistas, estudiantes y entusiastas.',
    tags: ['arte', 'digital', 'tecnología'],
    location: 'Centro de Convenciones',
    date: '16/10/25',
    time: '4pm - 6pm',
    price: 'S/ 8',
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80',
    startDate: '2025-10-16T16:00:00'
  },
  {
    id: 'arte-contemporaneo',
    title: 'Exposición de Arte Contemporáneo',
    category: 'Exposición',
    summary: 'Un recorrido por piezas innovadoras de artistas latinoamericanos.',
    description:
      'Conoce obras inéditas y colecciones privadas que celebran la diversidad cultural y las nuevas expresiones del arte contemporáneo.',
    tags: ['exposición', 'arte'],
    location: 'Sala Principal',
    date: '05/11/25',
    time: '10am - 7pm',
    price: 'Ingreso libre',
    image:
      'https://images.unsplash.com/photo-1520690214124-2405f3f338b9?auto=format&fit=crop&w=800&q=80',
    startDate: '2025-11-05T10:00:00'
  },
  {
    id: 'musica-folclorica',
    title: 'Noche de Música Folclórica',
    category: 'Concierto',
    summary: 'Vive una experiencia sonora con ritmos tradicionales y fusiones modernas.',
    description:
      'Disfruta de un repertorio especial dedicado a las raíces afroperuanas y andinas en un ambiente acogedor y festivo.',
    tags: ['música', 'folclore'],
    location: 'Auditorio Principal',
    date: '20/12/25',
    time: '8pm - 10pm',
    price: 'S/ 30',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    startDate: '2025-12-20T20:00:00'
  },
  {
    id: 'taller-danza',
    title: 'Taller de Danza Afroperuana',
    category: 'Taller',
    summary: 'Aprende pasos tradicionales y su significado cultural en este taller vivencial.',
    description:
      'Guiados por maestros reconocidos, descubrirás la historia y energía de la danza afroperuana a través de dinámicas participativas.',
    tags: ['danza', 'afroperuano', 'cultura'],
    location: 'Sala de Ensayos',
    date: '12/01/26',
    time: '3pm - 5pm',
    price: 'S/ 20',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    startDate: '2026-01-12T15:00:00'
  }
];
