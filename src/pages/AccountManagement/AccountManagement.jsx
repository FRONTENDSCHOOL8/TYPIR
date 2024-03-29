import CommonButton from '@/atoms/CommonButton/CommonButton';
import CommonInput from '@/atoms/CommonInput/CommonInput';
import TextContents from '@/atoms/TextContents/TextContents';
import Backward from '@/atoms/Backward/Backward';
import DeleteModal from '@/molecules/DeleteModal/DeleteModal';
import { useDeleteModalStore, useProfileStore } from '@/zustand/useStore';
import ToggleButton from '@/atoms/ToggleButton/ToggleButton';
import { useState, useEffect } from 'react';

function AccountManagement() {
  const { openModal, closeModal, isModalOpen } = useDeleteModalStore();
  const { profiles, setProfiles, isPrivate, setIsPrivate, isProtect, setIsProtect } = useProfileStore();
  const [email, setEmail] = useState('');
  const profile = profiles[0];

  useEffect(() => {
    if (profiles.length > 0) {
      const profile = profiles[0];
      setEmail(profile.email);
      setIsPrivate(profile.isPrivate);
      setIsProtect(profile.isProtect);
    }
  }, [profiles, setIsPrivate, setIsProtect]);

  const togglePrivate = () => {
    const updatedProfiles = profiles.map((profile) => ({
      ...profile,
      isPrivate: !profile.isPrivate,
    }));
    setProfiles(updatedProfiles);
    localStorage.setItem('user', JSON.stringify(updatedProfiles[0]));
  };

  const toggleProtect = () => {
    const updatedProfiles = profiles.map((profile) => ({
      ...profile,
      isProtect: !profile.isProtect,
    }));
    setProfiles(updatedProfiles);
    localStorage.setItem('user', JSON.stringify(updatedProfiles[0]));
  };

  const handleDeleteAccountClick = () => {
    openModal();
  };

  return (
    <div className="w-full min-h-[570px] bg-white flex flex-col items-center mb-8">
      <div className="w-full flex justify-between p-7">
        <div className="flex-1">
          <Backward />
        </div>
        <TextContents text="계정 관리" fontWeight="font-bold" fontSize="text-[20px]" />
        <div className="flex-1"></div>
      </div>
      <CommonInput text="이메일" value={email} disabled={true} borderColor="border-transparent" />
      <CommonInput text="비밀번호" borderColor="border-content" margin="mt-2" />
      <CommonButton text="비밀번호 변경" width="w-[90px]" height="h-[33px]" margin="my-5" />
      <div className="w-[288px] flex items-center justify-between mt-8">
        <div className="flex flex-col w-[200px] gap-2">
          <TextContents text="비공개 프로필" fontWeight="font-bold" fontSize="text-[16px]" />
          <TextContents text="프로필이 비공개인 경우 승인된 사용자만 프로필, 찜목록, 게시물을 볼 수 있습니다." />
        </div>
        <ToggleButton isToggled={isPrivate} toggle={togglePrivate} />
      </div>
      <div className="w-[288px] flex items-center justify-between my-7">
        <div className="flex flex-col w-[210px] gap-2">
          <TextContents text="개인정보 보호 검색" fontWeight="font-bold" fontSize="text-[16px]" />
          <TextContents text="검색 엔진에서 프로필 및 찜목록을 숨깁니다." />
        </div>
        <ToggleButton isToggled={isProtect} toggle={toggleProtect} />
      </div>
      <div className="w-[288px] flex items-center justify-between mb-4">
        <div className="flex flex-col w-[200px] gap-2">
          <TextContents text="계정 삭제" fontWeight="font-bold" fontSize="text-[16px]" />
          <TextContents text="데이터 및 계정과 관련된 모든 정보를 영구적으로 삭제합니다." />
        </div>
        <CommonButton text="계정 삭제" width="w-[65px]" margin="mt-7" onClick={handleDeleteAccountClick} />
        {isModalOpen && <DeleteModal closeModal={closeModal} />}
      </div>
    </div>
  );
}
export default AccountManagement;
