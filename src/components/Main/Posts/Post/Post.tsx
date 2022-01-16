import React from "react";
import {PostType} from "../../../state/profileReducer";

export const Post:React.FC<PostType> = ({_id,message}) => {
    return (
        <div key={_id}>
            {message}
        </div>
    )
}