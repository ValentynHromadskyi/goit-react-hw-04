import Modal from "react-modal";
import { AiOutlineLike } from "react-icons/ai";
import css from "./Modal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export function ImgModal({ item, isOpen, onClose }) {
  return (
    <div>
      <Modal isOpen={isOpen} style={customStyles} onRequestClose={onClose}>
        <img
          className={css.img}
          src={item.urls.regular}
          alt={item.urls.alt_description}
        />
        <p className={css.like}>
          <AiOutlineLike />
          <span className={css.img}>Likes:</span> {item.likes}
        </p>
      </Modal>
    </div>
  );
}
