import {AppStateType} from "./reduxStore";

export const getAppInitialized = (state:AppStateType) => {
    return  state.app.initialized
}

