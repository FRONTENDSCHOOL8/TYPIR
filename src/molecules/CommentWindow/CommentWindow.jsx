import pb from "@/api/pocketbase";
import { useEffect, useState } from "react";

const CommentWindow = ({ onAddComment, profileImage, userData }) => {
  const [text, setText] = useState("")

  // const [comments, setComments] = useState([])
  const [comments, setComments] = useState(() => {
    const savedComment = localStorage.getItem("comments")
    return savedComment ? JSON.parse(savedComment) : []
  })

  const handleInputChange = (e) => {
    setText(e.target.value)
  }

  const handleAddComment = () => {
    if (text.trim() !== "") {
      const newComment = {
        profileImg: profileImage,
        userName: userData.userName, // DB에서 받아오기
        text: text,
        daysAgo: "방금 전",
      };
      onAddComment(newComment)
      setComments(prev => [...prev, newComment])
      setText("")

      localStorage.setItem("comments", JSON.stringify([...comments, newComment]))
    }
  }

  useEffect(() => {
    const savedComments = localStorage.getItem("comments")
    if (savedComments) {
      setComments(JSON.parse(savedComments))
    }
  }, [])

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleAddComment()
    }
  }


  return (
    <div className="absolute bottom-0 w-[320px] h-[54px] bg-white flex items-center mx-0 sm:mx-[15px]">
      <img src={profileImage} className="w-[30px] h-[30px] rounded-full"/>
      <input 
        type="text" 
        value={text}
        onChange={handleInputChange}
        onKeyPress={handleEnterPress}
        className="w-[240px] h-[33px] bg-[#FAFAFA] placeholder-[#B9B9B9] ml-3 rounded-3xl pl-3 outline-none text-sm" 
        placeholder="댓글을 남기세요"/>
    </div>
  )
}

export default CommentWindow;