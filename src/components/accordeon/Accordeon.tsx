import React from "react";

type AccordeonPropsType = {
    title: string,
    collapsed: boolean
}

export let Accordeon = (props: AccordeonPropsType) => {
    console.log('Accordeon will be render')
    return props.collapsed === true
        ? <div>
            <AccordeonTitle title={props.title}/>
            <AccordeonBody/>
        </div>
        : <div>
            <AccordeonTitle title={props.title}/>
        </div>

}
type AccordeonTitlePropsType = {
    title: string
}

function AccordeonTitle(props: AccordeonTitlePropsType) {
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

