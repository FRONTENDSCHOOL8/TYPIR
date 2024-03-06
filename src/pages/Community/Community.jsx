import CommunityCategory from "@/molecules/CommunityCategory/CommunityCategory";
import ImageTemplate from "@/molecules/ImageTemplate/ImageTemplate";
import SearchBar from "@/molecules/SearchBar/SearchBar";

const Community = () => {
  return (
    <>
      <div className="flex relative">
        <CommunityCategory />
        <SearchBar />
      </div>
    </>
  );
};

export default Community;