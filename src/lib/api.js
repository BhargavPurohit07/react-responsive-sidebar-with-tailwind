export const getData = async () => {
  const data = await fetch("https://dummyjson.com/products");
  return { data };
};
