import { useState } from "react";

import css from "./ImageCart.module.css";
import { ImgModal } from "../Modal/Modal";

export function ImageCart({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <img
        className={css.img}
        src={item.urls.small}
        alt={item.urls.alt_description}
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <ImgModal
          item={item}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        ></ImgModal>
      )}
    </div>
  );
}
