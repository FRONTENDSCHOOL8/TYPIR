const CloseButton = ({ handleCloseModal }) => {
  return (
        <button onClick={handleCloseModal} className="absolute top-4 right-4">
          <img src="/public/modalButton/close.svg" className="w-[13px] h-[13px]"/>
        </button>
  );
};

export default CloseButton;