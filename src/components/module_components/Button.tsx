import React from "react";
import {Button} from "@mui/material";

type MyButtonType = {
    callback: ()=> void
    className?:string
    value: string
    disabled:boolean
}

export const MyButton = ({callback, className,value, disabled}:MyButtonType) => {
    return <Button disabled={disabled} onClick={callback} className={className}  variant="contained">{value}</Button>
}