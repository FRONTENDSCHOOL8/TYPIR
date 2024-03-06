import { useEffect, useState } from "react";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import pb from "@/api/pocketbase";
import CommunityImageTemplate from "../CommunityImageTemplate/CommunityImageTemplate";


const CATEGORIES = ['all', 'simple', 'daily', 'vintage']

function getPbImageURL(item, fileName = 'images') {
  return `${import.meta.env.VITE_PB_API}/api/files/${item.collectionId}/${item.id}/${item[fileName]}`
}

const CommunityCategory = ({ gap = 'gap-3' }) => {
  const [images, setImages] = useState([])
  const [selectedCategory, setSelectCategory] = useState("all")

  const location = useLocation()  // 현재 URL 정보 가져오기
  const searchParams = new URLSearchParams(location.search) // URLSearchParams 객체 : URL에서 쿼리 파라미터 추출

  useEffect(() => {
    async function fetchImage() {
      try {
        const styles = await pb.collection("communityPage").getFullList()
        console.log("styles : ", styles)
        const stylesWithImages = styles.map(style => {
          const imageURL = getPbImageURL(style)
          console.log("url : ", imageURL)
          return {...style, image: imageURL}
        })
        setImages(stylesWithImages)
      } catch (err) {
        console.error("Error fetching images : ", err)
      }
    }
    fetchImage()
  }, [])

  useEffect(() => {
    const categoryParam = searchParams.get("category")

    if (categoryParam && CATEGORIES.includes(categoryParam)) {
      setSelectCategory(categoryParam)
    }
  }, [location.search]) // location.search => URL이 변경될 때마다 쿼리 문자열 변경

  const filteredImages = selectedCategory === "all" ? images : images.filter(image => image.category === selectedCategory)

  const handleCategoryClick = category => {
    setSelectCategory(category)
  }

  return (
    <div className="mt-[5px] mb-[15px] w-full ">
      <ul className={`flex flex-row ${gap} font-serif sticky`}>
        {CATEGORIES.map(category => (
          <li key={category} className={`cursor-pointer px-[0.5625rem] border border-gray-200 rounded-xl ${selectedCategory === category ? "bg-black text-white" : "bg-white text-gray-200"}`}>
            <NavLink to={`/community?category=${category}`} onClick={() => handleCategoryClick(category)}>
              {category[0].toUpperCase() + category.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>
      <CommunityImageTemplate data={filteredImages}/>
    </div>    
  );
};

export default CommunityCategory;