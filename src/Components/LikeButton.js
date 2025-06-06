import React, { useState } from 'react';
import {AiFillLike, AiFillDislike} from 'react-icons/ai'


const LikeButton = () => {
    const [Liked, setLiked] = useState(false);
    const handleClick = () => {
        setLiked(!Liked);
    };
    if(Liked){
        return(<AiFillLike 
        color="blue"
        size="50"
        onClick={handleClick}/>)
    }
    return(
        <AiFillDislike
        Color="red"
        size="50"
        onClick={handleClick}/>
    )

    return(
        <div>
            
        </div>
    )
}

export default LikeButton;