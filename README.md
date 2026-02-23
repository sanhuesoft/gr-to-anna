# Goodreads to Anna's Archive 📚

Una extensión ligera para Google Chrome (Manifest V3) diseñada para agilizar la búsqueda de libros. Permite saltar de una página de detalles en **Goodreads** directamente a los resultados de búsqueda en **Anna's Archive**.

## ✨ Características

- **Extracción Inteligente:** Obtiene el título y el autor directamente del esquema `application/ld+json` de la página.
- **Títulos Limpios:** Formatea automáticamente los títulos largos, conservando solo la parte principal (antes de los dos puntos).
- **Validación de URL:** Evita ejecuciones innecesarias fuera de las páginas de libros de Goodreads.

## 🚀 Instalación

Al ser una extensión de desarrollo personal, se instala de la siguiente manera:

1. Descarga o clona este repositorio.
2. Abre Google Chrome y dirígete a `chrome://extensions/`.
3. Activa el **"Modo de desarrollador"** en la esquina superior derecha.
4. Haz clic en **"Cargar descomprimida"** y selecciona la carpeta del proyecto.

## 📖 Uso

1. Navega a cualquier libro en [Goodreads](https://www.goodreads.com/).
2. Haz clic en el ícono de la extensión en la barra de herramientas de Chrome.
3. Se abrirá una nueva pestaña con la búsqueda del libro en Anna's Archive.

## 🛠️ Tecnologías

- JavaScript (Service Workers)
- JSON (Manifest V3)
- Chrome Scripting API

---
*Nota: Esta herramienta es para uso personal y de investigación.*