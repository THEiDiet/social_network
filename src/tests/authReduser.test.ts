
import {authReducer, InitialStateAuthType, setUserData} from "../components/state/authReducer";

let initialState:InitialStateAuthType

beforeEach(()=> {
initialState = {
    id: null ,
    login: '',
    email: null,
    isAuth: false
}
})

test('user info should be set to initial state', ()=> {
    let newState = authReducer(initialState,setUserData(15 ,'login','123@123.12'))
    expect(newState.id).toBe(15)
    expect(newState.isAuth).toBe(true)
})


export default 1