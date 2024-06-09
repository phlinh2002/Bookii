
import { useState } from "react";

export interface LikeCounterProps{
    likes:number;
    onLikesChange: (newLikes:number)=>void;
}
export function LikeCounter({ likes,onLikesChange} :LikeCounterProps){
    const [count,setCount] = useState(likes);
    const incrementCounters = function(){
        const newCount = count+1;
        setCount(newCount);
        onLikesChange(newCount);
    };
    return (
        <div className="like-button" onClick={incrementCounters}>
                <div className="heart"></div>
                <div className="like-popup">{count} Likes</div>
        </div>

    )
}
