/* ============================================================
   KIOSCO JTI — Datos de catálogo, quiz y gamificación
   Nombres de producto/sabor tomados literalmente de lo impreso en
   cada paquete/dispositivo (leído directamente de las fotos de la
   carpeta Productos). Donde el envase no imprime un nombre de sabor
   propio (la mayoría de dispositivos), se usa el nombre del color.
   ============================================================ */

// ---------- Categorías ----------
const CATEGORIES = [
  { id: 'calentado',   name: 'Tabaco Calentado',     brand: 'Ploom · Mevius · evo · lyo',         accent: '#5b6570', icon: 'flame' },
  { id: 'vapeo',       name: 'Vapeadores',            brand: 'Logic · with.',                      accent: '#00bb31', icon: 'cloud' },
  { id: 'pouches',     name: 'Bolsitas de Nicotina', brand: 'Nordic Spirit',                      accent: '#0f4067', icon: 'leaf' },
  { id: 'cigarrillos', name: 'Cigarrillos',          brand: '8 marcas clásicas',                  accent: '#c9a24b', icon: 'flag' },
  { id: 'accesorios',  name: 'Accesorios',           brand: 'JTI Collection',                     accent: '#f472b6', icon: 'gift' },
];

// ---------- Catálogo de productos ----------
const PRODUCTS = [
  // ============= TABACO CALENTADO — DISPOSITIVOS =============
  {
    id: 'ploom-x',
    cat: 'calentado',
    brand: 'Ploom X',
    name: 'Dispositivo Ploom X',
    price: 39.90,
    tags: ['calentado', 'clasico', 'moderno', 'cualquier-momento'],
    desc: 'El dispositivo de tabaco calentado de Ploom, compatible con sticks Mevius, evo y lyo.',
    badge: 'Best Seller',
    color: '#1c1c1e',
    shape: 'heated-device',
    swatches: ['#1c1c1e', '#c9a24b', '#8a8f98', '#173f5c'], // Black, Gold, Silver, Navy
  },
  {
    id: 'ploom-aura',
    cat: 'calentado',
    brand: 'Ploom Aura',
    name: 'Dispositivo Ploom Aura',
    price: 44.90,
    tags: ['calentado', 'moderno', 'llamativo', 'cualquier-momento'],
    desc: 'La generación más reciente de Ploom: tecnología inteligente y acabados de nueva generación.',
    badge: 'Novedad',
    color: '#173f5c',
    shape: 'heated-device',
    swatches: ['#173f5c', '#1c1c1e', '#8a8f98', '#e08bb0'], // Navy, Black, Silver, Rose Gold
  },

  // ============= TABACO CALENTADO — STICKS MEVIUS (para Ploom X) =============
  { id: 'mevius-yellow-option', cat: 'calentado', brand: 'Mevius', name: 'Mevius Yellow Option (Ploom X)', price: 5.70, tags: ['calentado', 'clasico'], desc: 'Sticks de tabaco calentado para Ploom X, opción clásica.', color: '#e8c33d', shape: 'stick-pack' },
  { id: 'mevius-smooth-regular', cat: 'calentado', brand: 'Mevius', name: 'Mevius Smooth Regular (Ploom X)', price: 5.70, tags: ['calentado', 'suave', 'ligero'], desc: 'Sticks de tabaco calentado para Ploom X, perfil suave.', color: '#2f6fb3', shape: 'stick-pack' },
  { id: 'mevius-muscat-green', cat: 'calentado', brand: 'Mevius', name: 'Mevius Muscat Green Option (Ploom X)', price: 5.70, tags: ['calentado', 'dulce', 'afrutado'], desc: 'Sticks de tabaco calentado para Ploom X con un toque de uva moscatel.', color: '#7ec93d', shape: 'stick-pack' },
  { id: 'mevius-deep-regular', cat: 'calentado', brand: 'Mevius', name: 'Mevius Deep Regular (Ploom X)', price: 5.70, tags: ['calentado', 'intenso', 'clasico'], desc: 'Sticks de tabaco calentado para Ploom X, sabor profundo e intenso.', color: '#173f8c', shape: 'stick-pack' },
  { id: 'mevius-sharp-cold-menthol', cat: 'calentado', brand: 'Mevius', name: 'Mevius Sharp Cold Menthol (Ploom X)', price: 5.70, tags: ['calentado', 'mentolado', 'fresco'], desc: 'Sticks de tabaco calentado para Ploom X con mentol afilado y frío.', color: '#1f8f82', shape: 'stick-pack' },
  { id: 'mevius-purple-option', cat: 'calentado', brand: 'Mevius', name: 'Mevius Purple Option (Ploom X)', price: 5.70, tags: ['calentado', 'llamativo', 'dulce'], desc: 'Sticks de tabaco calentado para Ploom X, edición Purple Option.', color: '#5b2a86', shape: 'stick-pack' },
  { id: 'mevius-red-option', cat: 'calentado', brand: 'Mevius', name: 'Mevius Red Option (Ploom X)', price: 5.70, tags: ['calentado', 'intenso'], desc: 'Sticks de tabaco calentado para Ploom X, edición Red Option.', color: '#b3273a', shape: 'stick-pack' },
  { id: 'mevius-cold-menthol', cat: 'calentado', brand: 'Mevius', name: 'Mevius Cold Menthol (Ploom X)', price: 5.70, tags: ['calentado', 'mentolado', 'fresco'], desc: 'Sticks de tabaco calentado para Ploom X, mentolado frío clásico.', color: '#2fc9a0', shape: 'stick-pack' },

  // ============= TABACO CALENTADO — STICKS evo (para Ploom) =============
  { id: 'evo-yellow', cat: 'calentado', brand: 'evo', name: 'evo Yellow (para Ploom)', price: 5.60, tags: ['calentado', 'clasico'], desc: 'Sticks de tabaco calentado evo para dispositivos Ploom.', color: '#f0c93d', shape: 'stick-pack' },
  { id: 'evo-amber', cat: 'calentado', brand: 'evo', name: 'evo Amber (para Ploom)', price: 5.60, tags: ['calentado', 'intenso', 'clasico'], desc: 'Sticks de tabaco calentado evo, perfil ámbar intenso.', color: '#c9832b', shape: 'stick-pack' },
  { id: 'evo-aquamarine', cat: 'calentado', brand: 'evo', name: 'evo Aquamarine (para Ploom)', price: 5.60, tags: ['calentado', 'fresco', 'mentolado'], desc: 'Sticks de tabaco calentado evo con frescor aquamarine.', color: '#2fc9c0', shape: 'stick-pack' },
  { id: 'evo-bronze', cat: 'calentado', brand: 'evo', name: 'evo Bronze (para Ploom)', price: 5.60, tags: ['calentado', 'clasico', 'intenso'], desc: 'Sticks de tabaco calentado evo, perfil bronce robusto.', color: '#8a6a3a', shape: 'stick-pack' },
  { id: 'evo-tan', cat: 'calentado', brand: 'evo', name: 'evo Tan (para Ploom)', price: 5.60, tags: ['calentado', 'suave'], desc: 'Sticks de tabaco calentado evo, perfil suave tan.', color: '#c1a074', shape: 'stick-pack' },
  { id: 'evo-white', cat: 'calentado', brand: 'evo', name: 'evo White (para Ploom)', price: 5.60, tags: ['calentado', 'ligero', 'suave'], desc: 'Sticks de tabaco calentado evo, el más ligero de la gama.', color: '#f2efe9', shape: 'stick-pack' },
  { id: 'evo-red', cat: 'calentado', brand: 'evo', name: 'evo Red (para Ploom)', price: 5.60, tags: ['calentado', 'intenso'], desc: 'Sticks de tabaco calentado evo, perfil rojo intenso.', color: '#b3273a', shape: 'stick-pack' },
  { id: 'evo-rose', cat: 'calentado', brand: 'evo', name: 'evo Rose (para Ploom)', price: 5.60, tags: ['calentado', 'dulce', 'suave'], desc: 'Sticks de tabaco calentado evo, perfil rosa suave.', color: '#e08bb0', shape: 'stick-pack' },
  { id: 'evo-green', cat: 'calentado', brand: 'evo', name: 'evo Green (para Ploom)', price: 5.60, tags: ['calentado', 'fresco', 'mentolado'], desc: 'Sticks de tabaco calentado evo, perfil verde fresco.', color: '#2f7d3c', shape: 'stick-pack' },

  // ============= TABACO CALENTADO — STICKS lyo (para Ploom) =============
  { id: 'lyo-zesty-pear', cat: 'calentado', brand: 'lyo', name: 'lyo Zesty Pear (para Ploom)', price: 5.50, tags: ['calentado', 'dulce', 'afrutado'], desc: 'Sticks de tabaco calentado lyo con sabor a pera fresca.', color: '#a8c93d', shape: 'stick-pack' },
  { id: 'lyo-arctic-mint', cat: 'calentado', brand: 'lyo', name: 'lyo Arctic Mint (para Ploom)', price: 5.50, tags: ['calentado', 'mentolado', 'fresco'], desc: 'Sticks de tabaco calentado lyo con frescor ártico de menta.', color: '#1f9c9c', shape: 'stick-pack' },
  { id: 'lyo-wild-berry', cat: 'calentado', brand: 'lyo', name: 'lyo Wild Berry (para Ploom)', price: 5.50, tags: ['calentado', 'dulce', 'afrutado'], desc: 'Sticks de tabaco calentado lyo con frutos del bosque.', color: '#9c1a6e', shape: 'stick-pack' },

  // ============= BOLSITAS DE NICOTINA (Nordic Spirit) =============
  { id: 'nordic-spirit-mint', cat: 'pouches', brand: 'Nordic Spirit', name: 'Nordic Spirit Mint', price: 6.90, tags: ['pouches', 'mentolado', 'fresco', 'discreto', 'manana'], desc: 'Bolsitas de nicotina sin humo ni tabaco, sabor menta fresca.', color: '#2f7d3c', shape: 'pouch-tin' },
  { id: 'nordic-spirit-forest-berries', cat: 'pouches', brand: 'Nordic Spirit', name: 'Nordic Spirit Forest Berries', price: 6.90, tags: ['pouches', 'dulce', 'afrutado'], desc: 'Bolsitas de nicotina con frutos del bosque.', color: '#7c2fd6', shape: 'pouch-tin' },
  { id: 'nordic-spirit-raspberry', cat: 'pouches', brand: 'Nordic Spirit', name: 'Nordic Spirit Raspberry', price: 6.90, tags: ['pouches', 'dulce', 'afrutado'], desc: 'Bolsitas de nicotina con sabor a frambuesa.', color: '#e08bb0', shape: 'pouch-tin' },
  { id: 'nordic-spirit-raspberry-max', cat: 'pouches', brand: 'Nordic Spirit', name: 'Nordic Spirit Raspberry Max', price: 6.90, tags: ['pouches', 'intenso', 'afrutado'], desc: 'Bolsitas de nicotina con frambuesa, la versión más intensa.', color: '#c2166e', shape: 'pouch-tin' },
  { id: 'nordic-spirit-lime', cat: 'pouches', brand: 'Nordic Spirit', name: 'Nordic Spirit Lime', price: 6.90, tags: ['pouches', 'fresco', 'afrutado'], desc: 'Bolsitas de nicotina con un toque cítrico de lima.', color: '#8bc93d', shape: 'pouch-tin' },
  { id: 'nordic-spirit-cherry', cat: 'pouches', brand: 'Nordic Spirit', name: 'Nordic Spirit Cherry', price: 6.90, tags: ['pouches', 'dulce', 'intenso'], desc: 'Bolsitas de nicotina con sabor a cereza.', color: '#b3273a', shape: 'pouch-tin' },
  { id: 'nordic-spirit-ice', cat: 'pouches', brand: 'Nordic Spirit', name: 'Nordic Spirit Ice', price: 6.90, tags: ['pouches', 'fresco', 'discreto'], desc: 'Bolsitas de nicotina heladas, frescor extremo.', color: '#0f4067', shape: 'pouch-tin' },

  // ============= CIGARRILLOS =============
  // --- Winston ---
  { id: 'winston-xstyle-lss-blue', cat: 'cigarrillos', brand: 'Winston', name: 'Winston XStyle LSS Blue', price: 5.60, tags: ['cigarrillos', 'suave', 'ligero', 'moderno'], desc: 'Formato XStyle, perfil suave y moderno.', color: '#2f6fb3', shape: 'cig-pack' },
  { id: 'winston-xstyle-lss-white', cat: 'cigarrillos', brand: 'Winston', name: 'Winston XStyle LSS White', price: 5.60, tags: ['cigarrillos', 'ligero', 'discreto'], desc: 'Formato XStyle, el más ligero de la línea.', color: '#8a8f98', shape: 'cig-pack' },
  { id: 'winston-super-slims-silver', cat: 'cigarrillos', brand: 'Winston', name: 'Winston Super Slims Silver', price: 5.70, tags: ['cigarrillos', 'discreto', 'ligero'], desc: 'Formato super slim, perfil plateado discreto.', color: '#8a8f98', shape: 'cig-pack' },
  { id: 'winston-super-slims-white', cat: 'cigarrillos', brand: 'Winston', name: 'Winston Super Slims White', price: 5.70, tags: ['cigarrillos', 'ligero', 'suave'], desc: 'Formato super slim, el perfil más ligero.', color: '#c9ccd1', shape: 'cig-pack' },
  { id: 'winston-super-slims-blue', cat: 'cigarrillos', brand: 'Winston', name: 'Winston Super Slims Blue', price: 5.70, tags: ['cigarrillos', 'suave', 'moderno'], desc: 'Formato super slim, perfil azul equilibrado.', color: '#2f6fb3', shape: 'cig-pack' },
  { id: 'winston-blue', cat: 'cigarrillos', brand: 'Winston', name: 'Winston Blue', price: 5.50, tags: ['cigarrillos', 'suave', 'ligero', 'clasico'], desc: 'Un clásico equilibrado, suave y de sabor consistente.', color: '#2f6fb3', shape: 'cig-pack' },
  { id: 'winston-red', cat: 'cigarrillos', brand: 'Winston', name: 'Winston Red', price: 5.50, tags: ['cigarrillos', 'intenso', 'clasico'], desc: 'El sabor intenso y robusto de siempre.', color: '#b3273a', shape: 'cig-pack' },

  // --- Camel ---
  { id: 'camel-filters', cat: 'cigarrillos', brand: 'Camel', name: 'Camel Filters', price: 5.60, tags: ['cigarrillos', 'clasico', 'intenso', 'despues-comer'], desc: 'El sabor robusto e icónico de siempre, desde 1913.', color: '#e8c33d', shape: 'cig-pack' },
  { id: 'camel-blue-compact', cat: 'cigarrillos', brand: 'Camel', name: 'Camel Blue Compact', price: 5.60, tags: ['cigarrillos', 'suave', 'discreto'], desc: 'Formato compacto, perfil azul suave.', color: '#173f8c', shape: 'cig-pack' },
  { id: 'camel-blue', cat: 'cigarrillos', brand: 'Camel', name: 'Camel Blue', price: 5.60, tags: ['cigarrillos', 'suave', 'ligero'], desc: 'Una versión más suave del clásico Camel.', color: '#2fc9c0', shape: 'cig-pack' },
  { id: 'camel-slims-blue', cat: 'cigarrillos', brand: 'Camel', name: 'Camel Slims Blue', price: 5.90, tags: ['cigarrillos', 'moderno', 'ligero'], desc: 'Formato slim, tabacos premium, perfil azul.', color: '#1c4fa8', shape: 'cig-pack' },

  // --- LD ---
  { id: 'ld-blue-100s', cat: 'cigarrillos', brand: 'LD', name: 'LD Blue 100s', price: 4.95, tags: ['cigarrillos', 'ligero', 'suave'], desc: 'American Blend, formato 100s, perfil azul ligero.', color: '#2f6fb3', shape: 'cig-pack' },
  { id: 'ld-red-100s', cat: 'cigarrillos', brand: 'LD', name: 'LD Red 100s', price: 4.95, tags: ['cigarrillos', 'intenso'], desc: 'American Blend, formato 100s, perfil rojo intenso.', color: '#b3273a', shape: 'cig-pack' },

  // --- Silk Cut ---
  { id: 'silk-cut-blue', cat: 'cigarrillos', brand: 'Silk Cut', name: 'Silk Cut Blue', price: 5.80, tags: ['cigarrillos', 'suave', 'ligero'], desc: 'Suavidad característica de Silk Cut.', color: '#2f6fb3', shape: 'cig-pack' },
  { id: 'silk-cut-silver', cat: 'cigarrillos', brand: 'Silk Cut', name: 'Silk Cut Silver', price: 5.80, tags: ['cigarrillos', 'discreto', 'ligero'], desc: 'Una opción discreta y equilibrada.', color: '#8a8f98', shape: 'cig-pack' },
  { id: 'silk-cut-purple', cat: 'cigarrillos', brand: 'Silk Cut', name: 'Silk Cut Purple', price: 5.80, tags: ['cigarrillos', 'llamativo', 'dulce'], desc: 'Un perfil más llamativo dentro de la gama.', color: '#5b2a86', shape: 'cig-pack' },

  // --- Sobranie ---
  { id: 'sobranie-blue', cat: 'cigarrillos', brand: 'Sobranie', name: 'Sobranie Blue', price: 6.20, tags: ['cigarrillos', 'clasico', 'moderno'], desc: 'London, desde 1879. "Less Smoke Smell".', color: '#173f8c', shape: 'cig-pack' },
  { id: 'sobranie-gold', cat: 'cigarrillos', brand: 'Sobranie', name: 'Sobranie Gold', price: 6.50, tags: ['cigarrillos', 'clasico', 'intenso'], desc: 'La edición dorada, un icono del lujo discreto.', color: '#c9a24b', shape: 'cig-pack' },
  { id: 'sobranie-blacks', cat: 'cigarrillos', brand: 'Sobranie', name: 'Sobranie Blacks', price: 6.50, tags: ['cigarrillos', 'llamativo', 'moderno'], desc: 'La versión más sofisticada y llamativa de Sobranie.', color: '#1c1c1e', shape: 'cig-pack' },

  // --- Natural American Spirit ---
  { id: 'american-spirit-original', cat: 'cigarrillos', brand: 'American Spirit', name: 'Natural American Spirit (Original)', price: 6.10, tags: ['cigarrillos', 'clasico'], desc: 'Tabaco 100% natural, sabor clásico.', color: '#e8c33d', shape: 'cig-pack' },
  { id: 'american-spirit-turquesa', cat: 'cigarrillos', brand: 'American Spirit', name: 'Natural American Spirit (Turquesa)', price: 6.10, tags: ['cigarrillos', 'suave'], desc: 'Tabaco 100% natural, sin aditivos, perfil suave.', color: '#4fb8d6', shape: 'cig-pack' },
  { id: 'american-spirit-naranja', cat: 'cigarrillos', brand: 'American Spirit', name: 'Natural American Spirit (Naranja)', price: 6.10, tags: ['cigarrillos', 'afrutado', 'intenso'], desc: 'Tabaco 100% natural, sin aditivos, perfil cálido.', color: '#d97a2e', shape: 'cig-pack' },
  { id: 'american-spirit-onyx', cat: 'cigarrillos', brand: 'American Spirit', name: 'Natural American Spirit (Onyx)', price: 6.10, tags: ['cigarrillos', 'intenso'], desc: 'Tabaco 100% natural, la versión más intensa de la gama.', color: '#1c1c1e', shape: 'cig-pack' },
  { id: 'american-spirit-organic-mint', cat: 'cigarrillos', brand: 'American Spirit', name: 'Natural American Spirit Organic Mint', price: 6.10, tags: ['cigarrillos', 'fresco', 'mentolado'], desc: 'Tabaco 100% natural con menta orgánica.', color: '#2f7d3c', shape: 'cig-pack' },

  // --- Benson & Hedges ---
  { id: 'benson-blue-gold', cat: 'cigarrillos', brand: 'Benson & Hedges', name: 'Benson & Hedges Blue Gold', price: 6.00, tags: ['cigarrillos', 'clasico', 'moderno'], desc: 'Established 1873, London. El equilibrio entre clásico y moderno.', color: '#173f8c', shape: 'cig-pack' },
  { id: 'benson-special-filter-gold', cat: 'cigarrillos', brand: 'Benson & Hedges', name: 'Benson & Hedges Special Filter', price: 6.00, tags: ['cigarrillos', 'clasico'], desc: 'El icónico dorado "By Appointment to Her Majesty the Queen".', color: '#c9a24b', shape: 'cig-pack' },
  { id: 'benson-silver', cat: 'cigarrillos', brand: 'Benson & Hedges', name: 'Benson & Hedges Silver', price: 6.00, tags: ['cigarrillos', 'discreto', 'moderno'], desc: 'Una opción discreta y moderna, 5x20 cigarettes.', color: '#8a8f98', shape: 'cig-pack' },
  { id: 'benson-special-filter-red', cat: 'cigarrillos', brand: 'Benson & Hedges', name: 'Benson & Hedges Special Filter Red', price: 6.00, tags: ['cigarrillos', 'intenso'], desc: 'Edición Special Filter con toque rojo y perfil más intenso.', color: '#b3273a', shape: 'cig-pack' },

  // ============= ACCESORIOS =============
  {
    id: 'correa-personalizable',
    cat: 'accesorios',
    brand: 'JTI Collection',
    name: 'Correa para dispositivo',
    price: 11.90,
    tags: ['accesorio', 'calentado'],
    desc: 'Correa ajustable para llevar tu dispositivo siempre a mano.',
    color: '#1c8fd6',
    shape: 'lanyard',
    swatches: ['#1c8fd6', '#7c2fd6', '#1c1c1e', '#b3273a'], // Azul, Lila, Negra, Roja
  },
  {
    id: 'ploom-funda',
    cat: 'accesorios',
    brand: 'Ploom',
    name: 'Funda Ploom X Personalizable',
    price: 14.90,
    tags: ['accesorio', 'calentado'],
    desc: 'Funda protectora de piel sintética para tu Ploom X. Grábala con tu nombre o frase favorita.',
    color: '#1c1c1e',
    shape: 'case',
    customizable: true,
    customTemplate: 'case',
    swatches: ['#1c1c1e', '#3a4a5c', '#8a1f2b', '#c9a24b'],
  },
  {
    id: 'nordic-spirit-estuche',
    cat: 'accesorios',
    brand: 'Nordic Spirit',
    name: 'Estuche de Bolsillo Personalizable',
    price: 9.90,
    tags: ['accesorio', 'pouches'],
    desc: 'Pequeño estuche para llevar tus bolsitas siempre contigo, con grabado a tu gusto.',
    color: '#0f4067',
    shape: 'case',
    customizable: true,
    customTemplate: 'pouchcase',
    swatches: ['#0f4067', '#2f7d3c', '#9c1a6e', '#ffffff'],
  },
  {
    id: 'pitillera-personalizable',
    cat: 'accesorios',
    brand: 'JTI Collection',
    name: 'Pitillera Personalizable',
    price: 16.90,
    tags: ['accesorio', 'cigarrillos'],
    desc: 'Pitillera metálica resistente para llevar tu paquete de cigarrillos, grabada con tu nombre o frase.',
    color: '#1c1c1e',
    shape: 'case',
    customizable: true,
    customTemplate: 'pitillera',
    swatches: ['#1c1c1e', '#1c4fa8', '#c6c8ca', '#b3273a'],
  },
];

// ============= VAPEADORES =============
// with. se traslada aquí desde Tabaco Calentado, y los 6 acabados de
// Logic se unifican en un único producto con selector de color.
PRODUCTS.push(
  {
    id: 'with-device',
    cat: 'vapeo',
    brand: 'with.',
    name: 'Dispositivo with.',
    price: 32.90,
    tags: ['vapeo', 'clasico', 'discreto', 'cualquier-momento'],
    desc: 'Dispositivo with. en sus dos acabados principales: negro y gris.',
    color: '#1c1c1e',
    shape: 'heated-device',
    swatches: ['#1c1c1e', '#8a8f98'], // Negro, Gris
  },
  {
    id: 'with-mini',
    cat: 'vapeo',
    brand: 'with.',
    name: 'Dispositivo mini with.',
    price: 32.90,
    tags: ['vapeo', 'clasico', 'discreto', 'cualquier-momento'],
    desc: 'Formato mini with. compacto, disponible en acabados de color.',
    color: '#f2efe9',
    shape: 'heated-device',
    swatches: ['#f2efe9', '#6fc3e8', '#b3273a', '#2f7d3c'], // Blanco, Azul, Rojo, Verde
  },
  {
    id: 'logic-compact',
    cat: 'vapeo',
    brand: 'Logic',
    name: 'Logic Compact',
    price: 12.90,
    tags: ['vapeo', 'moderno', 'discreto'],
    desc: 'Vapeador desechable Logic Compact, disponible en 6 acabados de color.',
    color: '#1c4fa8',
    shape: 'vape-pen',
    swatches: ['#1c4fa8', '#101111', '#e54889', '#c9253d', '#ec8db4', '#28a77b'], // Azul, Negro, Pink, Rojo, Rosa, Verde
  },
);

// ---------- Fotografía de producto local ----------
// Se asigna la foto de Productos/ al SKU correspondiente. Mantener estas
// rutas relativas permite ejecutar el kiosco sin red y publicar la carpeta tal cual.
const PRODUCT_IMAGES = {
  'ploom-x':'ploom negro.png', 'ploom-aura':'ploom aura negro.png', 'with-device':'with negro.png', 'with-mini':'with blanco.png',
  'mevius-yellow-option':'mevius amarillo.png', 'mevius-smooth-regular':'mevius azul.png', 'mevius-muscat-green':'mevius greeen.png', 'mevius-deep-regular':'mevius lila.png', 'mevius-sharp-cold-menthol':'mevius menthol.png', 'mevius-purple-option':'mevius purple.png', 'mevius-red-option':'mevius rojo.png', 'mevius-cold-menthol':'mevius verde.png',
  'evo-yellow':'evo amarilo.png', 'evo-amber':'evo amber.png', 'evo-aquamarine':'evo aquamarine.png', 'evo-bronze':'evo bronze.png', 'evo-tan':'evo tan.png', 'evo-white':'evo blanco.png', 'evo-red':'evo rojo.png', 'evo-rose':'evo rosa.png', 'evo-green':'evo verde.png',
  'lyo-zesty-pear':'lyo amarillo.png', 'lyo-arctic-mint':'lyo azul.png', 'lyo-wild-berry':'lyo rosa.png',
  'nordic-spirit-mint':'nordic spirit verde.png', 'nordic-spirit-forest-berries':'nordic spirit lila.png', 'nordic-spirit-raspberry':'nordic spirit rosa.png', 'nordic-spirit-raspberry-max':'nordic spirit rosita.png', 'nordic-spirit-lime':'nordic spirit lime.png', 'nordic-spirit-cherry':'nordic spirit rojo.png', 'nordic-spirit-ice':'nordinspirit azul.png',
  'winston-xstyle-lss-blue':'winston 1.png', 'winston-xstyle-lss-white':'winston 2.png', 'winston-super-slims-silver':'winston 3.png', 'winston-super-slims-white':'winston 4.png', 'winston-super-slims-blue':'winston 5.png', 'winston-blue':'winston azu.png', 'winston-red':'winston rojo.png',
  'camel-filters':'camel amarillo.png', 'camel-blue-compact':'camel azul.png', 'camel-blue':'camel light blue.png', 'camel-slims-blue':'camel premium.png', 'ld-blue-100s':'LD azul.png', 'ld-red-100s':'LD rojo.png',
  'silk-cut-blue':'silk cut azul.png', 'silk-cut-silver':'silk cut gris.png', 'silk-cut-purple':'silk cut lila.png', 'sobranie-blue':'soberanie azul.png', 'sobranie-gold':'soberanie gold.png', 'sobranie-blacks':'soberanie negro.png',
  'american-spirit-original':'american spirit amarillo.png', 'american-spirit-turquesa':'american spirit azul.png', 'american-spirit-naranja':'american spirit naranja.png', 'american-spirit-onyx':'american spirit negro.png', 'american-spirit-organic-mint':'american spirit verde.png',
  'benson-blue-gold':'benson blue gold.png', 'benson-special-filter-gold':'benson gold.png', 'benson-silver':'benson plata.png', 'benson-special-filter-red':'benson rojo.png',
  'logic-compact':'logic azul.png',
  'correa-personalizable':'correa negra.png',
  'ploom-funda':'carcasa ploom negra.png',
  'nordic-spirit-estuche':'funda nordic azul.png',
  'pitillera-personalizable':'pitillera negra.png',
};
// Variantes fotografiadas para los selectores de acabado/color.
const PRODUCT_IMAGE_VARIANTS = {
  'ploom-x': { '#1c1c1e':'ploom negro.png', '#c9a24b':'ploom dorado.png', '#8a8f98':'ploom plata.png', '#173f5c':'ploom azul.png' },
  'ploom-aura': { '#173f5c':'ploom aura azul.png', '#1c1c1e':'ploom aura negro.png', '#8a8f98':'ploom aura plata.png', '#e08bb0':'ploom aura rosa.png' },
  'with-device': { '#1c1c1e':'with negro.png', '#8a8f98':'with gris.png' },
  'with-mini': { '#f2efe9':'with blanco.png', '#6fc3e8':'with azul.png', '#b3273a':'with rojo.png', '#2f7d3c':'with verde.png' },
  'logic-compact': { '#1c4fa8':'logic azul.png', '#101111':'logic negro.png', '#e54889':'logic pink.png', '#c9253d':'logic rojo.png', '#ec8db4':'logic rosa.png', '#28a77b':'logic verde.png' },
  'correa-personalizable': { '#1c8fd6':'correa azul.png', '#7c2fd6':'correa lila.png', '#1c1c1e':'correa negra.png', '#b3273a':'correa roja.png' },
  'ploom-funda': { '#1c1c1e':'carcasa ploom negra.png', '#3a4a5c':'carcasa ploom azul.png', '#8a1f2b':'carcasa ploom rosa.png', '#c9a24b':'carcasa ploom dorada.png' },
  'nordic-spirit-estuche': { '#0f4067':'funda nordic azul.png', '#2f7d3c':'funda nordic verde.png', '#9c1a6e':'funda nordic negra.png', '#ffffff':'funda nordic blanca.png' },
  'pitillera-personalizable': { '#1c1c1e':'pitillera negra.png', '#1c4fa8':'pitillera azul.png', '#c6c8ca':'pitillera plata.png', '#b3273a':'pitillera roja.png' },
};
// Imágenes que representan la acción al abrir/interactuar con cada producto.
// Se mantienen separadas de las fotos de portada para que el catálogo no cambie.
const CLICK_IMAGE_NAMES = {
  'ploom negro.png':'Ploom Negro.png','ploom dorado.png':'ploom dorado.png','ploom plata.png':'ploom plata.png','ploom azul.png':'ploom azul.png',
  'ploom aura azul.png':'ploom aura azul.png','ploom aura negro.png':'ploom aura negro.png','ploom aura plata.png':'ploom aura gris.png','ploom aura rosa.png':'ploom aura rosa.png',
  'with negro.png':'witth grande negro.png','with gris.png':'with grande gris.png','with blanco.png':'with blanco.png','with azul.png':'with azul.png','with rojo.png':'with rojo.png','with verde.png':'with verde.png',
  'logic azul.png':'logic azul.png','logic negro.png':'logic negro.png','logic pink.png':'logic pink.png','logic rojo.png':'logic rojo.png','logic rosa.png':'logic rosa.png','logic verde.png':'logic verde.png',
  'lyo amarillo.png':'lyo amarillo.png','lyo azul.png':'lyo azul.png','lyo rosa.png':'lyo rosa.png',
  'mevius amarillo.png':'mevius yellow.png','mevius azul.png':'mevius azul.png','mevius greeen.png':'mevius green.png','mevius verde.png':'mevius cold menthol.png','mevius menthol.png':'mevius sharp cold menthol.png','mevius purple.png':'mevius purple.png','mevius rojo.png':'mevius rojo.png','mevius lila.png':'mevius deep regular.png',
  'nordic spirit verde.png':'nordic verde.png','nordic spirit lila.png':'nordic lila.png','nordic spirit rosa.png':'nordic rosa.png','nordic spirit rosita.png':'nordic raspberry.png','nordic spirit lime.png':'nordic lime.png','nordic spirit rojo.png':'nordic rojo.png','nordinspirit azul.png':'nordic azul.png',
  'winston 1.png':'winston xstyle.png','winston 2.png':'winston white.png','winston 3.png':'winston silver.png','winston 4.png':'winston gris.png','winston 5.png':'winston blue.png','winston azu.png':'winston blue.png','winston rojo.png':'winston classic.png',
  'evo aquamarine.png':'evo aquamarine.png','evo bronze.png':'evo bronze.png','evo tan.png':'evo tan.png','evo blanco.png':'evo blanco.png','evo rojo.png':'evo burgundy.png','evo verde.png':'evo green option.png','evo rosa.png':'evo purple.png',
  'camel amarillo.png':'camel amarillo.png','camel azul.png':'camel blue.png','camel light blue.png':'camel blue claro.png','camel premium.png':'camel slims.png',
  'LD azul.png':'ld azul.png','LD rojo.png':'ld rojo.png',
  'silk cut azul.png':'silk cut azul.png','silk cut gris.png':'silk cut gris.png','silk cut lila.png':'silk cut lila.png',
  'soberanie azul.png':'sobranie azul.png','soberanie gold.png':'sobranie dorado.png','soberanie negro.png':'sobranie negro.png',
  'american spirit amarillo.png':'american amarillo.png','american spirit azul.png':'american azul.png','american spirit naranja.png':'american naranja.png','american spirit negro.png':'american negra.png','american spirit verde.png':'american verde.png',
  'benson blue gold.png':'benson azul.png','benson plata.png':'benson silver.png','benson rojo.png':'benson spceial.png',
  'correa negra.png':'correa negra.png','correa azul.png':'correa azul.png','correa lila.png':'correa lila.png','correa roja.png':'correa roja.png'
};
const clickFilename=filename=>CLICK_IMAGE_NAMES[filename]||'';
PRODUCTS.forEach(product => {
  if(PRODUCT_IMAGES[product.id]) product.image = `Productos/${PRODUCT_IMAGES[product.id]}`;
  if(PRODUCT_IMAGE_VARIANTS[product.id]) {
    product.imageVariants = Object.fromEntries(Object.entries(PRODUCT_IMAGE_VARIANTS[product.id]).map(([color, filename]) => [color, `Productos/${filename}`]));
  }
  if(product.image) product.image = product.image.replace('Productos/', 'Productos/recortados/');
  if(product.imageVariants) Object.keys(product.imageVariants).forEach(color => { product.imageVariants[color] = product.imageVariants[color].replace('Productos/', 'Productos/recortados/'); });
  const baseClick=clickFilename(PRODUCT_IMAGES[product.id]);
  if(baseClick) product.clickImage=`Productos/Clic/${baseClick}`;
  if(PRODUCT_IMAGE_VARIANTS[product.id]) {
    product.clickImageVariants=Object.fromEntries(Object.entries(PRODUCT_IMAGE_VARIANTS[product.id]).map(([color,filename])=>[color,clickFilename(filename)?`Productos/Clic/${clickFilename(filename)}`:'']));
  }
});

// ---------- Quiz ----------
const QUIZ = [
  {
    id: 'formato',
    question: '¿Qué formato de consumo te resulta más interesante?',
    options: [
      { label: 'Tabaco calentado', tag: 'calentado', icon: 'flame' },
      { label: 'Bolsitas de nicotina sin humo', tag: 'pouches', icon: 'leaf' },
      { label: 'Cigarrillo tradicional', tag: 'cigarrillos', icon: 'flag' },
    ],
  },
  {
    id: 'sabor',
    question: '¿Qué tipo de sabor prefieres?',
    options: [
      { label: 'Intenso y clásico', tag: 'intenso', icon: 'bolt' },
      { label: 'Dulce y afrutado', tag: 'afrutado', icon: 'berry' },
      { label: 'Mentolado y fresco', tag: 'fresco', icon: 'snow' },
      { label: 'Ligero y suave', tag: 'suave', icon: 'feather' },
    ],
  },
  {
    id: 'momento',
    question: '¿En qué momento del día sueles consumir más?',
    options: [
      { label: 'Por la mañana', tag: 'manana', icon: 'sun' },
      { label: 'Después de comer', tag: 'despues-comer', icon: 'plate' },
      { label: 'Socializando con amigos', tag: 'social', icon: 'people' },
      { label: 'En cualquier momento', tag: 'cualquier-momento', icon: 'clock' },
    ],
  },
  {
    id: 'estilo',
    question: '¿Qué estilo te representa mejor?',
    options: [
      { label: 'Clásico y elegante', tag: 'clasico', icon: 'star' },
      { label: 'Moderno y minimalista', tag: 'moderno', icon: 'square' },
      { label: 'Discreto y compacto', tag: 'discreto', icon: 'box' },
      { label: 'Llamativo y con personalidad', tag: 'llamativo', icon: 'spark' },
    ],
  },
];

// ---------- Combos de upselling ----------
// Cada producto solo sugiere lo que tiene sentido comprar junto a él:
// el dispositivo <-> sus sticks compatibles y su funda, la bolsita <->
// su estuche, el cigarrillo <-> la pitillera, y viceversa. Se genera a
// partir del propio catálogo para no dejarse ningún sabor/marca fuera.
const BUNDLES = {};
const MEVIUS_IDS = PRODUCTS.filter(p => p.brand === 'Mevius').map(p => p.id);
const EVO_LYO_IDS = PRODUCTS.filter(p => p.brand === 'evo' || p.brand === 'lyo').map(p => p.id);
const NORDIC_IDS = PRODUCTS.filter(p => p.cat === 'pouches').map(p => p.id);
const CIGARRILLO_IDS = PRODUCTS.filter(p => p.cat === 'cigarrillos').map(p => p.id);
const LOGIC_IDS = PRODUCTS.filter(p => p.brand === 'Logic').map(p => p.id);

// Dispositivos de tabaco calentado -> sus sticks compatibles + su funda/correa
BUNDLES['ploom-x'] = ['mevius-smooth-regular', 'mevius-deep-regular', 'ploom-funda'];
BUNDLES['ploom-aura'] = ['evo-amber', 'lyo-arctic-mint', 'correa-personalizable'];
BUNDLES['with-device'] = ['correa-personalizable'];
BUNDLES['with-mini'] = ['correa-personalizable'];

// Sticks -> el dispositivo para el que están hechos + su funda
MEVIUS_IDS.forEach(id => { BUNDLES[id] = ['ploom-x', 'ploom-funda']; });
EVO_LYO_IDS.forEach(id => { BUNDLES[id] = ['ploom-aura', 'correa-personalizable']; });

// Bolsitas de nicotina -> el estuche para llevarlas
NORDIC_IDS.forEach(id => { BUNDLES[id] = ['nordic-spirit-estuche']; });

// Cigarrillos (cualquier marca) -> la pitillera
CIGARRILLO_IDS.forEach(id => { BUNDLES[id] = ['pitillera-personalizable']; });

// Vapeadores Logic -> correa para llevarlo encima
LOGIC_IDS.forEach(id => { BUNDLES[id] = ['correa-personalizable']; });

// Accesorios -> el producto para el que están pensados
BUNDLES['ploom-funda'] = ['ploom-x'];
BUNDLES['correa-personalizable'] = ['ploom-x', 'logic-compact'];
BUNDLES['nordic-spirit-estuche'] = ['nordic-spirit-mint'];
BUNDLES['pitillera-personalizable'] = ['winston-blue', 'camel-filters'];

// ---------- Niveles de gamificación ----------
const LEVELS = [
  { name: 'Explorador', min: 0,   perk: 'Acceso al catálogo completo' },
  { name: 'Conocedor',  min: 50,  perk: '5% en tu próximo accesorio' },
  { name: 'Experto',    min: 120, perk: '10% en tu próximo accesorio + grabado gratis' },
  { name: 'Insider JTI',min: 220, perk: '15% + acceso a ediciones limitadas' },
];
