import React from "react";
import {PostItemType} from "../../../../components/state/state";

export const Post:React.FC<PostItemType> = (props) => {
    return (
        <div key={props.id}>
            {props.message}
        </div>
    )
}