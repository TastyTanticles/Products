export default function Local() {
  const getData = localStorage.getItem("products");
  return JSON.parse(getData) || [];
}
