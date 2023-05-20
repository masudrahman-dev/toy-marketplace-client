
const all_toys_loader = async () => {
  const res = await fetch(`http://localhost:3000/products`);
  const data = await res.json();
  return data;
};

export default all_toys_loader;
