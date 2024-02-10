import { data } from "./data";

export default function Item() {
  const items = data.map((item, index) => (
    <div className="item" key={index}>
      <img src={item.url} alt={item.name} />
      <div className="text">
        <p>{item.name}</p>
        <p>{item.description}</p>
      </div>
    </div>
  ));

  return <>{items}</>;
}
