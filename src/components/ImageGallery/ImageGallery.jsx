import { ImageCart } from "../ImageCart/ImageCart";
import css from "./ImageGallery.module.css";

export function ImageGallery({ items }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCart item={item} />
        </li>
      ))}
    </ul>
  );
}
