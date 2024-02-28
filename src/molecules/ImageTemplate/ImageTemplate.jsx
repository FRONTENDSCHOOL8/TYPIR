import Masonry from 'react-masonry-css';
import images from '/src/data/images.json';
import { motion } from 'framer-motion';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

function ImageTemplate({ boardText, margin = 'mt-[15px]', data = images }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const onBoxClicked = (imageId) => {
    const category = searchParams.get('category');
    if (location.pathname.endsWith('/style')) {
      navigate(`/style/detail/${imageId}?category=${category}`); //습의 시간 가지기!
    } else if (location.pathname.endsWith('/mypage')) {
      navigate(`/mypage/detail/${imageId}`);
    } else if (location.pathname.startsWith('/mypage/board')) {
      navigate(`/mypage/board/${boardText}/detail/${imageId}`);
    } else if (location.pathname.endsWith('/newpost')) {
      navigate(`/mypage/newpost/detail/${imageId}`);
    } else if (location.pathname.includes('/newpost/board')) {
      navigate(`/mypage/newpost/board/${boardText}/detail/${imageId}`);
    }
  };

  const breakpointColumnsObj = {
    default: 4,
    639: 3,
    450: 2,
  };

  return (
    <div className="w-[290px] h-auto bg-white">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid flex"
        columnClassName="my-masonry-grid_column flex flex-col items-center"
      >
        {images.map((item) => (
          <div
            key={item.id}
            className={`w-[135px] bg-gray-100 rounded-2xl mb-[15px]`}
            style={{ height: `${item.height}px` }}
          >
            {item.content}
          </div>
        ))}
      </Masonry>
    </ul>
  );
}
export default ImageTemplate;
