import BookmarkButton from '@/atoms/BookmarkButton/BookmarkButton';
import CommentCount from '@/atoms/CommentCount/CommentCount';
import HeartButton from '@/atoms/HeartButton/HeartButton';
import HeartCount from '@/atoms/HeartCount/HeartCount';
import TextContents from '@/atoms/TextContents/TextContents';
import Comment from '@/molecules/Comment/Comment';
import CommentWindow from '@/molecules/CommentWindow/CommentWindow';
import Profile from '@/molecules/Profile/Profile';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const CommunityDetail = () => {
  const location = useLocation();
  const imageSrc = location.state?.imageSrc;
  const context = location.state?.context;
  const imageId = location.state?.imageId

  console.log("location : ", location)
  console.log("imageSrc : ", imageSrc)
  console.log("context : ", context)
  console.log("imageId : ", imageId)

  const [comment, setComment] = useState([])
  const [likeCount, setLikeCount] = useState(0)

  // 댓글 & 좋아요
  useEffect(() => {
    const allComments = JSON.parse(localStorage.getItem("comment") || "{}")
    const allLikes = JSON.parse(localStorage.getItem("like") || "{}")

    // 댓글
    if (allComments[imageId]) {
      setComment(allComments[imageId])
    } else {
      setComment([])
    }

    // 좋아요
    if (allLikes[imageId]) {
      setLikeCount(allLikes[imageId])
    } else {
      setLikeCount(0)
    }
  }, [imageId])

  // 댓글 추가
  const handleAddComment = newComment => {
    const allComments = JSON.parse(localStorage.getItem("comment") || "{}")
    const imageComment = allComments[imageId] || []
    const updatedComment = [...imageComment, newComment]

    allComments[imageId] = updatedComment
    localStorage.setItem("comment", JSON.stringify(allComments))
    setComment(updatedComment)
  }
  
  const handleLikeChange = (change, imageId) => {
    console.log("handleLikeChange")
    setLikeCount(prev => {
      const allLikes = JSON.parse(localStorage.getItem("like") || "{}")
      const count = (allLikes[imageId] || 0) + change 
      
      allLikes[imageId] = Math.max(0, count)

      return allLikes[imageId]
    })
    const localStorageKey = `isClickedHeart_${imageId}`
    const isClickedHeart = change > 0
    localStorage.setItem(localStorageKey, JSON.stringify(isClickedHeart))
    console.log("click2")
  }

  useEffect(() => {
    const allLikes = JSON.parse(localStorage.getItem("like") || "{}")
    allLikes[imageId] = likeCount
    localStorage.setItem("like", JSON.stringify(allLikes))
  }, [likeCount, imageId])


  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <>
      {isMobile ? (
        <div className="w-[320px] mx-auto relative">
          <Profile />
          <div className="px-[15px] mt-[10px]">
            {/* <img src="/images/sampleImg.png"/>   */}
            <img src={imageSrc} />
            <div className="flex justify-between my-[10px]">
              <HeartButton imageId={imageId} onClick={handleLikeChange}/>
              <BookmarkButton />
            </div>
            <div className="flex justify-between mb-[10px]">
              <HeartCount count={likeCount} />
              <CommentCount count={comment.length} />
            </div>
            <TextContents text={context} />
            <div className="overflow-y-auto max-h-[160px]">
              <div className="w-full h-px bg-[#C4C4C4] my-[10px]"></div>
              {comment.map((comment, index) => (
                <Comment
                  onAddComment={handleAddComment}
                  key={index}
                  userName={comment.userName}
                  text={comment.text}
                />
              ))}
            </div>
            <CommentWindow onAddComment={handleAddComment} />
          </div>
          <div className="w-[320px] h-[55px]"></div>
        </div>
      ) : (
        <div className="flex gap-3 w-[100%] sm:w-[768px] h-[480px] justify-center items-center mt-5">
          <div className="w-[100%] sm:w-[350px] h-[480px] flex items-center justify-center ">
            <img src={imageSrc} className="rounded-l-2xl w-full h-full object-cover" /> {/*DB에서 뿌릴 이미지*/}
          </div>
          <div className="w-[100%] sm:w-[350px] h-[480px] relative flex flex-col">
            <Profile />
            <div className="px-[15px] my-[30px] w-[100%] sm:w-[350px] h-[90px]">
              <TextContents text={context} />
              {/* DB에서 뿌릴 텍스트 */}
            </div>
            <div className="flex justify-between mx-[15px]">
              <HeartButton imageId={imageId} onClick={handleLikeChange}/>
              <BookmarkButton />
            </div>
            <div className="flex justify-between mx-15px my-2">
              <HeartCount count={likeCount} />
              <CommentCount count={comment.length} />
            </div>
            <div className="h-px bg-[#C4C4C4] mx-[15px] my-[10px]"></div>
            <div className="overflow-y-auto max-h-[160px]">
              {comment.map((comment, index) => (
                <Comment
                  onAddComment={handleAddComment}
                  key={index}
                  userName={comment.userName}
                  text={comment.text}
                  time={comment.time}
                />
              ))}
            </div>
            <CommentWindow onAddComment={handleAddComment} imageId={imageId}/>
          </div>
        </div>
      )}
    </>
  );
};

export default CommunityDetail;
