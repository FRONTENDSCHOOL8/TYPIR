import FileInput from '@/molecules/FileInput/FileInput';
import CommonInput from '@/atoms/CommonInput/CommonInput';
import CommonTextarea from '@/atoms/CommonTextarea/CommonTextarea';
import CommonButton from '@/atoms/CommonButton/CommonButton';
import Backward from '@/atoms/Backward/Backward';
import TextContents from '@/atoms/TextContents/TextContents';
import DetailImageFile from '@/molecules/DetailImageFile/DetailImageFile';
import CategoryButton from '@/molecules/CategoryButton/CategoryButton';
import StrokeButton from '@/atoms/StrokeButton/StrokeButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { useBoardInputStore, useFileInputStore, useFormReset } from '@/zustand/useStyleStore';
import pb from '@/api/pocketbase';

const NewBoard = ({ imageId, category }) => {
  const location = useLocation();
  const imageSrc = location.state?.imageSrc;

  const { title, context, setTitle, setContent, selectedCategory, setSelectedCategory } = useBoardInputStore();
  const { image, preview, setImage, setPreview } = useFileInputStore();
  const { submitted, setSubmitted } = useFormReset;

  // 제목 상태 업데이트
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // 내용 상태 업데이트
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate('/style');
  };

  async function handleSave(e) {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    const userName = user.id;
    const formData = new FormData();
    console.log(userName);

    const blob = await fetch(preview).then((res) => res.blob());
    const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });
    formData.append('image', file);
    formData.append('username', userName);
    formData.append('title', `${title}`);
    formData.append('category', `${selectedCategory}`);
    formData.append('context', `${context}`);

    await pb.collection('communityPage').create(formData);
    navigate('/community');
    setTitle('');
    setContent('');
    setSelectedCategory('');
    setImage(null);
    setPreview('');
    setSubmitted(true);
  }

  return (
    <div className="w-[320px] mx-auto">
      <Header />
      <div className="mx-[15px]">
        <p className="font-serif text-center text-[24px] font-extrabold my-[10px]">Let's Copy This Style!</p>
        <FileInput />
        <CommonInput text="" placeholder="제목" border="rounded-2xl" borderColor="border-gray-200" />
        <CommonTextarea />
        <div className="flex flex-row justify-center gap-[20px] mt-[15px]">
          <CommonButton fontSize="text-[14px]" bgColor="bg-white" fontColor="text-black" text="취소" />
          <CommonButton fontSize="text-[14px]" />
        </div>
      </div>
    </div>
  );
};

export default NewBoard;
