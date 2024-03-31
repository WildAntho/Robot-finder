import { useState } from 'react';
import './likebuttons.css'
import { IoMdThumbsUp } from "react-icons/io";
import { IoMdThumbsDown } from "react-icons/io";

function LikeButtons() {

    //Initialisation du state
    const [like, setLike] = useState('likeButton');
    const [dislike, setDislike] = useState('dislikeButton');
    const [count, setCount] = useState(0);

    //Comportements
    const handleToggle = () => {
        dislike === 'dislikeButton' ? setDislike('dislikeButton none') : setDislike('dislikeButton')
        count > 0 && dislike === 'dislikeButton' && setCount(count - 1);
        count > 0 && dislike === 'dislikeButton none' && setCount(count + 1)
        setLike('likeButton')
    }

    const handleClick = () => {
        setCount(count + 1);
        like === 'like' ? setLike('like yes') : setLike('like yes');
        dislike === 'dislikeButton none' && setDislike('dislikeButton')
    }


    return (
        <div className='thumbsButtons'>
            <div className='likebutton-container' onClick={handleClick}>
                <IoMdThumbsUp className={like} />
                <p>{count}</p>
            </div>
            <IoMdThumbsDown className={dislike} onClick={handleToggle} />
        </div>
    )

}

export default LikeButtons