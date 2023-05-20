
const view_details_loader = async ({params}) => {
  console.log(params.id);
  const res = await fetch(`http://localhost:3000/products/${params.id}`);
  const data = await res.json();
  return data;
};

export default view_details_loader;
