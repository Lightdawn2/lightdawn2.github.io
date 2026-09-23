# Fuentes y decisiones de contenido

Revisión: 16 de septiembre de 2026. Este documento acompaña el contenido público sin copiar datos operacionales, credenciales, endpoints internos ni registros de clientes.

| Ficha | Evidencia revisada | Criterio editorial |
| --- | --- | --- |
| Ventec APP | `ventec-mobile-app/README.md`, `docs/ESTADO.md`, `docs/bigquery-erp-integration.md`, documentación histórica e historial Git | El README todavía se presenta como demo, pero el registro fechado del 9 de septiembre documenta marcha blanca y despliegues. La flota se describe como desarrollo pendiente de despliegue. No se afirma que Cliente 360 esté operativo. |
| CKT / CONNEKT | `connekt-mobile/README.md`, servicios de telemetría e historial Git | App en desarrollo; datos reales a través de proxy, pero catálogo y permisos demo. No se presenta la autenticación ni los umbrales como aptos para producción. |
| Ecosistema web | `belray-webs/README.md` y README de ambos sitios implementados | Bel-Ray y Ventec reconstruidos. Connekt y RPurple por implementar. Los dominios existentes no se enlazan como si fueran las nuevas versiones. |
| Agua Dúctil | `aguaductil/README.md`, `package.json`, catálogo y commits del 15–16 de septiembre | Trabajo independiente en desarrollo. La maqueta tiene publicación de revisión; no equivale a lanzamiento comercial. No se afirma que el formulario envíe correo sin configurar un transporte. |
| CRM y Proyecto AB | README locales y descripción de `proyecto-ab` en GitHub | Se conserva el antecedente del CRM. Proyecto AB archivado el 8 de septiembre; no se equipara archivo de AB con archivo del repositorio CRM. |
| Proyectos anteriores, cursos y formación | `index.html` anterior a la remodelación; importado a `content/legacy.json` | Descripciones conservadas. No se revalidó la operación actual de los sitios Crexer ni se obtuvieron archivos originales de los certificados. |

## Confirmaciones pendientes

- Años de inicio y término de Crexer: el usuario corrigió los meses a mayo–abril. El dato anterior decía junio de 2025–presente y quedó reemplazado. Los años no se infirieron.
- Mes y año de ingreso a Belray: se muestra «Actualidad» y el cargo indicado por el usuario.
- URLs personales de LinkedIn e Indeed: los enlaces anteriores apuntaban a las portadas genéricas y fueron retirados. Reincorporar únicamente URLs de perfiles confirmados.
- Evidencias descargables de cursos: no había archivos en el portafolio original; se conservan sus nombres, emisores y años sin crear enlaces ficticios.

## Reglas para continuar

1. Una fecha de commit prueba actividad en el repositorio; no prueba inicio de contrato laboral.
2. Una funcionalidad implementada no se anuncia como desplegada sin evidencia de despliegue.
3. Guardar hitos significativos, incluso migraciones o prototipos descartados, sin transformar cada commit en una afirmación curricular.
4. Revisar contenido privado antes de incorporarlo a esta página pública. Publicar aportes técnicos, no datos de clientes ni métricas internas.
5. Mantener fuente y fecha de revisión cuando cambie una ficha. Las mediciones del portafolio anterior se conservan como historial, no como una nueva auditoría.
