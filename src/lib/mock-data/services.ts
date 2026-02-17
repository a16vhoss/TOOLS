import { ServiceCategory } from '../types';

export const mockServiceCategories: ServiceCategory[] = [
  {
    id: 'plomeria', name: 'Plomería', description: 'Reparaciones e instalaciones de agua', icon: 'Droplets', active: true,
    subcategories: [
      { id: 'p1', name: 'Fuga de agua', description: 'Reparación de fugas en tuberías', avgPrice: 800 },
      { id: 'p2', name: 'Destape de drenaje', description: 'Destape de tuberías y drenajes', avgPrice: 600 },
      { id: 'p3', name: 'Instalación de WC', description: 'Instalación o cambio de inodoro', avgPrice: 1500 },
      { id: 'p4', name: 'Calentador de agua', description: 'Instalación y reparación de boiler', avgPrice: 2000 },
      { id: 'p5', name: 'Tubería nueva', description: 'Instalación de tubería nueva', avgPrice: 3000 },
    ],
  },
  {
    id: 'electricidad', name: 'Electricidad', description: 'Instalaciones y reparaciones eléctricas', icon: 'Zap', active: true,
    subcategories: [
      { id: 'e1', name: 'Apagón parcial', description: 'Diagnóstico y reparación de fallas', avgPrice: 700 },
      { id: 'e2', name: 'Instalación de contactos', description: 'Contactos y apagadores nuevos', avgPrice: 500 },
      { id: 'e3', name: 'Centro de carga', description: 'Instalación de centro de carga', avgPrice: 2500 },
      { id: 'e4', name: 'Iluminación', description: 'Instalación de lámparas y luminarias', avgPrice: 800 },
      { id: 'e5', name: 'Cableado', description: 'Cableado eléctrico nuevo', avgPrice: 3500 },
    ],
  },
  {
    id: 'pintura', name: 'Pintura', description: 'Pintura interior y exterior', icon: 'Paintbrush', active: true,
    subcategories: [
      { id: 'pi1', name: 'Pintura interior', description: 'Pintura de paredes interiores', avgPrice: 3000 },
      { id: 'pi2', name: 'Pintura exterior', description: 'Pintura de fachada', avgPrice: 5000 },
      { id: 'pi3', name: 'Impermeabilización', description: 'Impermeabilización de techos', avgPrice: 4000 },
      { id: 'pi4', name: 'Acabados especiales', description: 'Texturas y acabados decorativos', avgPrice: 4500 },
    ],
  },
  {
    id: 'limpieza', name: 'Limpieza', description: 'Limpieza profunda del hogar', icon: 'Wind', active: true,
    subcategories: [
      { id: 'l1', name: 'Limpieza profunda', description: 'Limpieza completa del hogar', avgPrice: 1500 },
      { id: 'l2', name: 'Limpieza regular', description: 'Limpieza de mantenimiento', avgPrice: 800 },
      { id: 'l3', name: 'Post-construcción', description: 'Limpieza después de obra', avgPrice: 3000 },
      { id: 'l4', name: 'Limpieza de muebles', description: 'Lavado de salas y tapices', avgPrice: 1200 },
    ],
  },
  {
    id: 'cerrajeria', name: 'Cerrajería', description: 'Cerraduras, llaves y seguridad', icon: 'Shield', active: true,
    subcategories: [
      { id: 'ce1', name: 'Apertura de puerta', description: 'Apertura sin llave', avgPrice: 500 },
      { id: 'ce2', name: 'Cambio de chapa', description: 'Cambio de cerradura completa', avgPrice: 1200 },
      { id: 'ce3', name: 'Copia de llaves', description: 'Duplicado de llaves', avgPrice: 200 },
      { id: 'ce4', name: 'Cerradura digital', description: 'Instalación de cerradura inteligente', avgPrice: 3500 },
    ],
  },
  {
    id: 'mudanzas', name: 'Mudanzas', description: 'Transporte y mudanzas', icon: 'Truck', active: true,
    subcategories: [
      { id: 'm1', name: 'Mudanza local', description: 'Mudanza dentro de la ciudad', avgPrice: 3000 },
      { id: 'm2', name: 'Mudanza foránea', description: 'Mudanza a otra ciudad', avgPrice: 8000 },
      { id: 'm3', name: 'Flete express', description: 'Transporte rápido de objetos', avgPrice: 1000 },
      { id: 'm4', name: 'Empaque', description: 'Servicio de empaque profesional', avgPrice: 1500 },
    ],
  },
  {
    id: 'jardineria', name: 'Jardinería', description: 'Mantenimiento de jardines', icon: 'Flower2', active: true,
    subcategories: [
      { id: 'j1', name: 'Poda y mantenimiento', description: 'Poda de árboles y arbustos', avgPrice: 800 },
      { id: 'j2', name: 'Diseño de jardín', description: 'Diseño y creación de jardines', avgPrice: 5000 },
      { id: 'j3', name: 'Sistema de riego', description: 'Instalación de riego automático', avgPrice: 3500 },
      { id: 'j4', name: 'Fumigación', description: 'Control de plagas en jardín', avgPrice: 600 },
    ],
  },
  {
    id: 'general', name: 'Reparaciones Generales', description: 'Mantenimiento general del hogar', icon: 'Wrench', active: true,
    subcategories: [
      { id: 'g1', name: 'Carpintería', description: 'Reparación de muebles y puertas', avgPrice: 1200 },
      { id: 'g2', name: 'Herrería', description: 'Soldadura y trabajos en metal', avgPrice: 1500 },
      { id: 'g3', name: 'Tablaroca', description: 'Instalación de muros y plafones', avgPrice: 2000 },
      { id: 'g4', name: 'Instalación de accesorios', description: 'Montaje de repisas, cortinas, etc.', avgPrice: 500 },
    ],
  },
];
