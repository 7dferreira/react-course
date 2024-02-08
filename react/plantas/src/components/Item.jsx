import { data } from "./data";

export default function Item() {
  const items = data.map((item) => (
    <div class="item">
      <img src={item.url} alt={item.name} />
      <div class="text">
        <p>{item.name}</p>
        <p>{item.description}</p>
      </div>
    </div>
  ));

  return <>{items}</>;
}
