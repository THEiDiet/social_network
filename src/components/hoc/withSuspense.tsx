import React, {ComponentType, Suspense} from 'react';
import {Loader} from "../assets/Loader";

function WithSuspense <T>(Component:ComponentType<T>) {
    return (props:any)=> {
        return (
            <Suspense fallback={<Loader/>} >
                <Component{...props as T}/>
            </Suspense>
        );
    }
};

export default WithSuspense;