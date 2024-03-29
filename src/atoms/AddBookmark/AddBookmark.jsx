const AddBookmark = ({ onClick, text = '나만의 북마크 만들기' }) => {
  return (
    <div className="sticky bottom-0 bg-white border-t border-black h-[60px] w-full flex">
      <button onClick={onClick} className="flex items-center my-3">
        <img src="/images/addBookmark.svg" className="w-10 h-10 ml-3" />
        <p className="text-sm ml-3 font-semibold">{text}</p>
      </button>
    </div>
  );
};

export default AddBookmark;
