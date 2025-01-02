import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const LikeButton = ({likes}) => {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(likes);

  const handleClick = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
  }

  return (
    <button style={{fontSize:"12px", backgroundColor:"transparent", border:"none", cursor:"pointer", color: isLiked ? 'red' : "gray"}} onClick = {handleClick} >
      <FontAwesomeIcon icon={faHeart} /> {likeCount}
    </button>
  )
};




export default LikeButton;