export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endPoint = categoryId ? `category=${categoryId}` : `q=${query}`;
  const url = `https://api.mercadolibre.com/sites/MLB/search?${endPoint}`;
  const response = await fetch(url);
  const data = response.json();
  return data;
}

// Codigo Bruno
// const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
// const response = await fetch(url);
// const data = response.json();
// return data;
