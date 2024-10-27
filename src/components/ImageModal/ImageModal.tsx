import Modal from "react-modal";

Modal.setAppElement("#root");

function ImageModal({ isOpen, image, isClose }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
      border: "none",
      borderRadius: "0",
      backgroundColor: "transparent",
      zIndex: "4",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      backdropFilter: "blur(10px)",
      zIndex: "3",
    },
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={isClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={image.urls.regular} alt={image.alt_description} />
      </Modal>
    </div>
  );
}

export default ImageModal;
