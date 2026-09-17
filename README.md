# Kiosco JTI

Experiencia táctil de descubrimiento de producto para JTI, pensada para pantalla de cartelería digital / kiosco en punto de venta.

## Cómo abrirlo

Al ser una web estática (HTML + CSS + JS, sin backend), no puede abrirse con doble clic sobre `index.html` porque el navegador bloquea la carga de `data.js`/`app.js` como `file://`. Sirve la carpeta con un servidor local:

```bash
npx serve .
```

o, si tienes Python:

```bash
python -m http.server 8080
```

y abre `http://localhost:8080`. Para GitHub Pages, sube el contenido de esta carpeta tal cual (no requiere build).

## Flujo de la experiencia

1. **Age gate**: confirmación de mayoría de edad (18+) antes de entrar. Es obligatorio para cualquier contenido de marcas de nicotina/tabaco.
2. **Home**: acceso al quiz de gustos o al catálogo completo, y accesos directos por categoría (Tabaco calentado / Vapeadores / Bolsitas de nicotina / Cigarrillos / Accesorios).
3. **Quiz** (`data.js` → `QUIZ`): 4 preguntas (formato, sabor, momento de consumo, estilo). Motor de recomendación por coincidencia de tags en `renderResults()` (`app.js`).
4. **Resultados**: 3 productos recomendados + puntos de bienvenida.
5. **Catálogo**: filtros por categoría, tarjetas de producto.
6. **Ficha de producto**: selector de color, upselling ("También te puede interesar") y packs con descuento automático (`BUNDLES` en `data.js`).
7. **Personalización**: para accesorios (`customizable: true`), editor con canvas en vivo — color base, tipografía y grabado de texto (nombre/palabra/frase, máx. 14 caracteres) que el propio cliente escribe en pantalla.
8. **Carrito ("Tu selección")**: resumen con precio total. El pago y la verificación de edad se completan en caja con personal — el kiosco no procesa pagos.
9. **Gamificación**: puntos JTI por completar el quiz, añadir productos y personalizar; niveles (`LEVELS` en `data.js`) con recompensas; ruleta de premios al subir de nivel.
10. **Reinicio por inactividad**: tras 45s sin interacción se avisa, y a los 60s se reinicia la sesión (vuelve al age gate) para el siguiente cliente.

## Editar el catálogo

Todo el contenido (productos, precios, tags del quiz, combos de upselling y niveles) vive en [data.js](data.js) — no hace falta tocar `app.js` para añadir o modificar productos.

## Personalización de marca

Los productos y accesorios usan nombres de marcas reales del portafolio de JTI (Ploom, Logic, Nordic Spirit, Winston, Camel, LD) a modo de ejemplo/mockup.

- **Colores**: los `color`/`swatches` de cada producto en `data.js` están calibrados a partir de la identidad visual pública de cada marca (Ploom = negro grafito minimalista, Logic = púrpura vibrante, Nordic Spirit = azul marino con tapas verde menta / magenta frutos del bosque, Winston = azul clásico, Camel = tostado "camel", LD = rojo).
- **Fotografía real de producto**: por límites de derechos de autor, no se han incorporado fotografías oficiales de JTI — cada producto se representa con una ilustración SVG generada en `productIllustrationSVG()` (`app.js`), coloreada con la paleta de marca. Antes de producción, sustituir esas ilustraciones por fotografía/renders con licencia (banco de imágenes o material de marca cedido por Admira/JTI).
- Revisar los textos legales del footer y age gate y adaptarlos a los exigidos en el mercado de despliegue.
