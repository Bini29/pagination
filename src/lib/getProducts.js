export default async function getProducts({ limit, page }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums/1/photos`
  );
  const data = await res.json();

  const paginatedProducts = data.slice((page - 1) * limit, page * limit);

  return { products: paginatedProducts, total: data.length };
}
