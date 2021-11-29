import React from "react";

export let Accordeon = (props:any) => {
    console.log('Accordeon will be render')
    return (
        <div>
            <AccordeonTitle title={props.title}/>
            <AccordeonBody/>
        </div>
    )
}

function AccordeonTitle(props:any) {
    console.log('AccordeonTitle will be render')
    return (
        <h3>{props.title}</h3>
    )
}

function AccordeonBody() {
    console.log('AccordeonBody will be render')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

