import { useState, useEffect } from 'react';
import { NavLink, useSearchParams, useLocation } from 'react-router-dom';
import { getPbImage } from '@/utils';
import pb from '@/api/pocketbase';

const CATEGORIES = ['all', 'simple', 'daily', 'vintage'];

function getPbImageURL(item, fileName = 'images') {
  return `${import.meta.env.VITE_PB_URL}/api/files/${item.collectionId}/${item.id}/${item[fileName]}`;
}

async function getData() {
  const data = [
    {
      id: 'item-1',
      content: 'all content',
      category: 'all',
    },
    {
      id: 'item-2',
      content: 'vintage content',
      category: 'vintage',
    },
    {
      id: 'item-3',
      content: 'vintage content',
      category: 'vintage',
    },
    {
      id: 'item-4',
      content: 'simple content',
      category: 'simple',
    },
    {
      id: 'item-5',
      content: 'vintage content',
      category: 'vintage',
    },
    {
      id: 'item-6',
      content: 'simple content',
      category: 'simple',
    },
  ];
  return data;

  //   const styles = await pb.collection('styles').getFullList();
  //   const stylesImages = styles.map((style) => {
  //     const imageURL = getPbImage(style);
  //     style.image = imageURL;
  //     return style;
  //   });

  //   return {
  //     ...styles,
  //     image: stylesImages,
  //   };
}

const Category = ({ gap = 'gap-3' }) => {
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category');
  useEffect(() => {
    getData().then(setData);
  }, []);
  if (!data) {
    return <p>로딩 중...</p>;
  }
  const filteredCategoryData =
    selectedCategory === 'all' ? data : data.filter((item) => item.category === selectedCategory);
  return (
    <div className="mt-[5px] mb-[15px] w-full">
      <ul className={`flex flex-row ${gap} font-serif`}>
        {CATEGORIES.map((category) => (
          <li
            key={category}
            className={`cursor-pointer px-[0.5625rem] border border-gray-200 rounded-xl ${selectedCategory === category ? 'bg-black' : 'bg-white'} ${selectedCategory === category ? 'text-white' : 'text-gray-200'}`}
          >
            <NavLink to={`/category?category=${category}`}>{category[0].toUpperCase() + category.slice(1)}</NavLink>
          </li>
        ))}
      </ul>
      <ul>
        {filteredCategoryData.map((categoryItem) => (
          <li key={categoryItem.id}>{categoryItem.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
