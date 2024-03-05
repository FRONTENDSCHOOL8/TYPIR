import CategoryButton from '@/atoms/CategoryButton/CategoryButton';

const Category = ({ gap = 'gap-3' }) => {
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'all';

  const categoryImageMatch = useMatch('/category/detail/:imageId');
  const layoutId = categoryImageMatch?.params.imageId;
  const styles = useStyleStore((state) => state.styles);
  const imageSrc = styles.find((style) => style.id === layoutId)?.image;

  async function getData() {
    try {
      const styles = await pb.collection('styles').getFullList();
      const stylesWithImages = styles.map((style) => {
        const imageURL = getPbImage(style);
        return { ...style, image: imageURL };
      });

      // 상태를 컴포넌트 내부에서 업데이트
      useStyleStore.getState().setStyles(stylesWithImages);

      return stylesWithImages;
    } catch (error) {
      console.error('Error fetching data :', error);
    }
  }

  useEffect(() => {
    getData().then(setData);
  }, []);
  if (!data) {
    return <p>로딩 중...</p>;
  }
  const filteredCategoryData =
    selectedCategory === 'all' ? data : data.filter((item) => item.category === selectedCategory);

  return (
    <div className="mt-[5px] mb-[15px]">
      <ul className={`flex flex-row ${gap} font-serif`}>
        {categories.map((item) => (
          <li
            key={item}
            onClick={() => handleClick(item)}
            className={`cursor-pointer px-[9px] border border-gray-200 rounded-xl ${selectedCategory === item ? 'bg-black' : 'bg-white'} ${selectedCategory === item ? 'text-white' : 'text-gray-200'}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
