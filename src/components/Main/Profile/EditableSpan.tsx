import React, {ChangeEvent, useState} from 'react';

type propsType = {
    value:string
    onChange:(text:string)=>void
}

const EditableSpan = ({value,onChange}:propsType) => {
    const [editMode,setEditMode] = useState(false)
    const onBlurHandler = () => {setEditMode(false)}
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {onChange(e.currentTarget.value)}
    const onDoubleClickHandler = () => {setEditMode(true)}
    return (
        <div>
            {
                editMode &&
            <div>
                <input value={value} autoFocus onChange={onChangeHandler} onBlur={onBlurHandler} type="text"/>
            </div>
            }
            {
                !editMode &&
                <div>
                    <span onDoubleClick={onDoubleClickHandler}>{value}</span>
                </div>
            }
        </div>
    );
};

export default EditableSpan;