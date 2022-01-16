
import {v1} from "uuid";
import {
    addPostCB,
    changePostCB,
    InitialStateProfileType,
    profileReducer,
    setUserProfile
} from "../components/state/profileReducer";


let initialState:InitialStateProfileType

beforeEach(()=> {
    initialState = {
        posts: [
        {_id:v1(), message:'Hi'},
    ],
        newMessage:'hi',
        profile: {
            aboutMe: null,
            contacts: {
                facebook: null,
                website: null,
                vk: null,
                twitter: null,
                instagram: null,
                youtube: null,
                github: null,
                mainLink: null,
            },
            lookingForAJob: false,
            lookingForAJobDescription: null,
            fullName: null,
            userId: 2,
            photos: {
                small: null,
                large: null,
            }
        }
    }
})
//export const changePostCB = (text:string):changePostActionType => ({type: CHANGE_POST, text })
// export const addPostCB = ():addPostActionType => ({type: ADD_POST})
// export const setUserProfile = (profile:ProfileType):setUserProfileActionType
test('post should be changed', ()=> {
    let newState = profileReducer(initialState,changePostCB('new text'))
    expect(newState.newMessage).toBe('new text')
})

test('new post should be added', ()=> {
    let newState = profileReducer(initialState,addPostCB())
    expect(newState.posts.length).toBe(2)
})

test('user profile about should be `some man`', ()=> {
    let newUserProfile =  {
        aboutMe: `some man`,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null,
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: null,
        userId: 2,
        photos: {
            small: null,
            large: null,
        }
    }
    let newState = profileReducer(initialState,setUserProfile(newUserProfile))
    expect(newState.profile.aboutMe).toBe('some man')
})


export default 1