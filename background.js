chrome.action.onClicked.addListener((tab) => {
  // Verificar si estamos en Goodreads
  if (!tab.url.includes("goodreads.com/book/show/")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => alert("Error: Esta extensión solo funciona en páginas de detalles de libros en Goodreads.")
    });
    return;
  }

  // Ejecutar el script de extracción en la página
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: extractBookData
  }, (results) => {
    if (results && results[0].result) {
      const { title, author } = results[0].result;
      const query = `${title} ${author}`.replace(/\s+/g, '+');
      const searchUrl = `https://annas-archive.li/search?&content=book_nonfiction&content=book_fiction&content=book_unknown&q=${query}`;
      
      chrome.tabs.create({ url: searchUrl });
    }
  });
});

function extractBookData() {
  const jsonScript = document.querySelector('script[type="application/ld+json"]');
  if (!jsonScript) return null;

  try {
    const data = JSON.parse(jsonScript.textContent);
    if (data["@type"] !== "Book") return null;

    // 1. Extraer y limpiar título (tomar lo anterior a los dos puntos)
    let fullTitle = data.name;
    let shortTitle = fullTitle.split(':')[0].trim();

    // 2. Extraer autor (manejar si es un array o un solo objeto)
    let authorName = "";
    if (Array.isArray(data.author)) {
      authorName = data.author[0].name;
    } else if (data.author) {
      authorName = data.author.name;
    }

    return { title: shortTitle, author: authorName };
  } catch (e) {
    console.error("Error parseando JSON-LD", e);
    return null;
  }
}