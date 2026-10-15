---
name: Portafolio de Franco Cortés
description: Un catálogo técnico vivo donde software, operación industrial y evolución profesional se leen como trabajo documentado.
colors:
  forest: "#173e35"
  ink: "#173b33"
  mint-field: "#e0eee2"
  paper: "#f7f8f4"
  signal-lime: "#d5f18c"
  muted-copy: "#53665e"
  structural-line: "#a9beb0"
  focus-blue: "#327be0"
typography:
  display:
    fontFamily: "Barlow, sans-serif"
    fontSize: "clamp(76px, 8vw, 96px)"
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Barlow, sans-serif"
    fontSize: "clamp(38px, 4.3vw, 62px)"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Barlow, sans-serif"
    fontSize: "35px"
    fontWeight: 600
    lineHeight: 1.12
  body:
    fontFamily: "Source, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Source, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  square: "0"
  pill: "30px"
spacing:
  page-gutter: "clamp(24px, 5.6vw, 88px)"
  section-y: "84px"
  section-y-mobile: "56px"
  project-gap-x: "30px"
  project-gap-y: "46px"
components:
  filter-chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "9px 17px"
  filter-chip-selected:
    backgroundColor: "{colors.forest}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "9px 17px"
  project-figure:
    backgroundColor: "{colors.mint-field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "30px"
    height: "265px"
  disclosure-summary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "15px 0"
---

# Design System: Portafolio de Franco Cortés

## Overview

**Creative North Star: "El Catálogo Técnico Vivo"**

El portafolio se comporta como una exposición técnica editorial: el trabajo aparece primero y la interfaz se retira para dejar que proyectos, diagramas y evolución profesional sostengan el relato. La atmósfera es sobria, industrial y humana. El verde bosque aporta autoridad; el campo menta mantiene la lectura abierta; la lima funciona como señal de actividad y dirección.

La composición convierte cada proyecto en una pieza catalogada, con metadatos, una lámina diagramática, rol personal, resultados y evidencia verificable. Antes del catálogo, un perfil de cuatro pilares explica cómo se aborda el trabajo. La tipografía condensada da a nombres y títulos la presencia de rótulos de exhibición, mientras Source Sans conserva una lectura franca y extensa. La experiencia evita ornamento superficial: estructura, contraste, líneas y cambios tonales hacen todo el trabajo visual.

**Key Characteristics:**

- Catálogo de proyectos antes que escaparate promocional.
- Diagramas abstractos y tipográficos en lugar de capturas de producto genéricas.
- Grandes rótulos condensados junto a columnas de lectura abiertas.
- Superficies planas separadas por color, líneas finas y ritmo vertical.
- Interacción discreta mediante filtros, enlaces direccionales y detalles nativos.
- Adaptación móvil que conserva la jerarquía y recompone las láminas técnicas.

## Colors

La paleta mezcla verdes de operación y archivo con una señal lima precisa; los azules y beiges de las láminas de proyecto son acentos temáticos locales, no nuevos colores de marca.

### Primary

- **Verde Bosque Operativo:** Fondo de cabecera, portada, bitácora y pie; también activa filtros y forma el núcleo de diagramas.
- **Lima de Señal:** Marca el punto del nombre, cargo, enlaces activos, selección de texto y la llamada de contacto. Su rareza le da fuerza.

### Secondary

- **Campo Menta:** Superficie principal del catálogo de proyectos y base de barras de desplazamiento.

### Neutral

- **Tinta Verde:** Color de lectura principal sobre superficies claras.
- **Papel Frío:** Fondo de lectura, texto inverso principal y superficie de experiencia.
- **Copia Atenuada:** Metadatos, descripciones auxiliares, fechas y notas.
- **Línea Estructural:** Divisores, contornos y límites de controles.
- **Azul de Foco:** Anillo de foco visible para teclado sobre cualquier superficie.

**The Signal Lime Rule.** Reserve la lima para énfasis funcional, identidad y llamadas; no la convierta en un relleno decorativo general.

**The Local Plate Rule.** Una lámina de proyecto puede usar un fondo contextual propio, pero la lectura que la rodea vuelve siempre al bosque, menta, papel y tinta.

## Typography

**Display Font:** Barlow Condensed, cargada localmente bajo la familia `Barlow`, con sans-serif como respaldo.  
**Body Font:** Source Sans 3, cargada localmente bajo la familia `Source`, con sans-serif como respaldo.

**Character:** Barlow Condensed produce rótulos compactos, técnicos y de gran presencia sin consumir toda la anchura. Source Sans 3 aporta una voz neutral y legible para explicar sistemas, decisiones y trayectorias con precisión.

### Hierarchy

- **Display:** Peso semibold, escala fluida y línea muy cerrada. Se reserva para el nombre en portada; en móvil conserva una presencia deliberadamente grande.
- **Headline:** Peso semibold, escala fluida y espaciado levemente negativo. Introduce cada gran capítulo del catálogo.
- **Title:** Peso semibold y línea compacta. Nombra proyectos, cargos, hitos y formación; las variantes se ajustan entre 26px y 35px según densidad.
- **Body:** Peso regular, 18px y línea 1.55 como base; los bloques de proyecto usan 17px con línea 1.6. Los párrafos no superan 72 caracteres de ancho.
- **Label:** 11px–16px según jerarquía. Identifica estado, tecnología, fecha, pie de figura y categoría sin competir con el título.

**The Two-Voice Rule.** Use Barlow solo para identidad, encabezados y rótulos; mantenga explicación, metadatos y controles en Source Sans.

**The Compressed Authority Rule.** Los grandes títulos ganan fuerza con peso 600, línea cerrada y poco espacio entre letras; no los diluya con pesos livianos ni líneas altas.

## Layout

La página usa un margen lateral fluido que crece desde 24px hasta 88px. Sobre 1500px, el contenido se centra dentro de una anchura efectiva de 1380px. Las secciones respiran con 84px verticales en escritorio y 56px en móvil.

La portada y el contacto forman composiciones de dos columnas. La portada reparte nombre y contexto a la izquierda y un directorio de proyectos a la derecha, con una separación fluida de 45px a 150px. El perfil profesional distribuye cuatro pilares en una línea abierta. El catálogo usa dos columnas iguales con 30px entre columnas y 46px entre filas. Experiencia y bitácora comparten una columna lateral de fechas de 230px; habilidades usan dos columnas para sostener descripciones y evidencia; formación y cursos usan dos.

A 950px se reduce la densidad sin cambiar la arquitectura principal: la columna temporal baja a 175px y el perfil pasa de cuatro a dos columnas. A 640px, portada, perfil, proyectos, habilidades, cronología, formación, cursos y contacto pasan a una sola columna; la navegación se envuelve, el margen lateral queda en 24px y los filtros permiten varias filas. A 380px, la lámina CONNEKT aumenta su altura, reduce tipografía y recompone sus variables en tres columnas flexibles para que sus etiquetas no se recorten.

**The Catalogue Rhythm Rule.** Conserve los grandes campos de color y las separaciones verticales; no encierre cada bloque en una tarjeta independiente.

**The Diagram First Rule.** En los proyectos principales, la lámina técnica precede a metadatos, título y explicación. En móvil se apila sin perder esa secuencia.

## Elevation & Depth

El sistema no usa sombras. La profundidad se construye con campos tonales completos, bordes de un píxel, grandes cambios de escala y la alternancia entre fondos bosque, menta, papel y lima. Los elementos interactivos permanecen en el plano y comunican estado mediante color, subrayado, rotación o desplazamiento corto.

**The Flat Evidence Rule.** No añada sombras a proyectos, filtros o secciones. La jerarquía debe surgir de la evidencia, la tipografía, el color y las líneas.

## Shapes

La forma dominante es ortogonal y sin radio: secciones, láminas, enlaces, líneas temporales y disclosures se sienten construidos como fichas y planos técnicos. Los filtros son la única silueta redondeada recurrente, con forma de píldora de 30px, porque representan una selección temporal y compacta. Las láminas recortan su contenido al rectángulo y usan líneas rectas, flechas y conectores como vocabulario gráfico.

**The One Rounded Exception Rule.** Reserve la píldora para filtros. No redondee láminas, contenedores ni disclosures.

## Components

### Filter Chips

Controles compactos y tranquilos que se leen como índice de catálogo.

- **Shape:** Píldora completa con radio de 30px.
- **Default:** Fondo transparente, tinta verde y borde transparente; padding de 9px por 17px.
- **Hover:** Fondo verde menta más denso.
- **Selected:** Fondo bosque con texto blanco, expresado por `aria-pressed="true"`.
- **Mobile:** Fuente de 14px y padding de 8px por 12px; el contador baja a una nueva línea.

### Project Plates

Cada proyecto principal tiene una lámina de 265px con un diagrama propio, pie de figura y composición centrada. Ventec usa arquitectura de nodos; CONNEKT organiza variables y flujo; Belray enfrenta dos marcas; Agua Dúctil dibuja tuberías; el archivo comercial representa evolución con flechas. Los fondos locales distinguen dominios, pero todos usan tipografía, línea y densidad comunes.

- **Shape:** Rectángulo sin radio y con recorte de desborde.
- **Internal Padding:** 30px en escritorio, 23px bajo 950px.
- **Responsive:** 245px de alto en móvil; CONNEKT usa 290px bajo 380px para proteger texto y flujo.

### Project Disclosures

El detalle usa el elemento nativo `details` para mantener una interacción accesible, directa y sin interfaz adicional.

- **Structure:** Líneas superior e inferior, resumen de 15px verticales y contenido inferior de 25px.
- **State:** La flecha gira 90° al abrir; el texto se vuelve verde medio al pasar el cursor.
- **Focus:** Anillo azul de 3px con 5px de separación.
- **Behavior:** Un enlace por hash revela cualquier proyecto filtrado, abre su disclosure y lo desplaza al inicio.

### Professional Profile and Skills

El perfil profesional usa cuatro columnas abiertas separadas por líneas superiores. Las habilidades siguen el mismo lenguaje, pero en dos columnas más amplias para relacionar capacidad, evidencia y herramientas sin convertir la sección en una nube de palabras clave. En móvil ambos conjuntos se apilan.

### Navigation

La cabecera comparte el campo bosque de la portada y usa enlaces de 16px. El logotipo tipográfico `fc /` actúa como ancla; la barra principal se subraya al pasar el cursor y el contacto cambia a lima. Bajo 640px, la navegación se envuelve en un ancho máximo de 250px y el enlace de contacto de cabecera se oculta.

### Directory Links

El directorio de portada es una lista de enlaces grandes separados por líneas superiores. Cada entrada combina una categoría pequeña, un título Barlow de 32px y una flecha diagonal. En hover, el texto pasa a lima; la llamada principal desplaza su flecha 5px.

### Timeline Rows

Las filas de experiencia y bitácora usan una fecha lateral y contenido principal separados por una línea superior. En móvil, fecha y contenido se apilan con 13px de separación para preservar una lectura cronológica clara.

**The Native Interaction Rule.** Prefiera enlaces, botones y `details` nativos con estados visibles. La interacción debe aclarar el catálogo, no convertirse en el espectáculo.

## Do's and Don'ts

### Do:

- **Do** deje que proyectos, diagramas y trayectorias ocupen el primer plano.
- **Do** use campos de color completos y líneas finas para organizar la página sin tarjetas elevadas.
- **Do** mantenga la pareja Barlow Condensed / Source Sans 3 y su división clara de funciones.
- **Do** diseñe cada lámina de proyecto como un diagrama editorial específico de su sistema.
- **Do** conserve foco visible, HTML nativo, reducción de movimiento y una alternativa de impresión legible.
- **Do** compruebe las láminas técnicas a 320px, especialmente etiquetas largas y flujos horizontales.

### Don't:

- **Don't** convierta el portafolio en una cuadrícula de capturas de pantalla o mockups de dispositivos.
- **Don't** añada sombras, vidrio, gradientes o radios de tarjeta al lenguaje plano existente.
- **Don't** use la lima como fondo general ni compita con su función de señal.
- **Don't** reemplace los detalles verificables por frases promocionales vagas.
- **Don't** comprima texto técnico hasta cortar etiquetas; recomponga el diagrama en el breakpoint adecuado.
