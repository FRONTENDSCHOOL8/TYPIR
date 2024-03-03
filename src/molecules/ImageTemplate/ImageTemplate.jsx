import Masonry from 'react-masonry-css';
import images from '/src/data/images.json';

function ImageTemplate({ data = images }) {
  const breakpointColumnsObj = {
    default: 4,
    650: 3,
    500: 2,
  };

  return (
    <ul className="max-w-screen-md h-auto mt-[15px]">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid flex gap-[12px]"
        columnClassName="my-masonry-grid_column flex flex-col items-center"
      >
        {data.map((item) => (
          <li key={item.id}>
            <img
              src={item.image}
              alt={item.alt}
              className={`w-[170px] bg-gray-100 rounded-2xl mb-[15px]`}
              style={{ height: `${item.height}px` }}
            />
          </li>
        ))}
      </Masonry>
    </ul>
  );
}
export default ImageTemplate;
