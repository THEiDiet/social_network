const ADD_POST = 'ADD_POST'
const CHANGE_POST = 'CHANGE_POST'

export const changePostAC = (text:string) => ({type: CHANGE_POST, text })
export const addPostAC = () => ({type: ADD_POST})

let initialState = {
    posts: [
        {id:1, message:'Hi'},
        {id:2, message:'Hello'},
        {id:3, message:'Heyo'},
        {id:4, message:'Hohoho'}
    ],
        newMessage:'hi'
}

export const profileReducer = (state:any = initialState, action:any) => {
    switch (action.type) {
        case ADD_POST:
            state.posts.push({id:5, message: state.newMessage})
            // this._state.mainPage.newMessage = ''
            break
        case CHANGE_POST:
            state.newMessage = action.text
            break
        default:
            return state
    }
}