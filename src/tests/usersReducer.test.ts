import {
    follow, setCurrentPage, setIsDisabled, setIsFetching,
    setTotalUsersCount,
    setUsers,
    StateUsersType,
    unFollow,
    usersReducer
} from "../components/state/usersReducer";

let initialState:StateUsersType

beforeEach(()=> {
    initialState = {
        users: [{
            "name": "Steapn",
            "id": 21851,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
            {
                "name": "Balvanchik",
                "id": 21850,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "mmavka",
                "id": 21849,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },],
        totalUsersCount: 0,
        pageSize: 5,
        currentPage: 1,
        isFetching: false,
        isDisabled: []
    }
})

test('user with id 21851 should be followed', ()=> {
    let actionFollow = follow(21851)
    let newState = usersReducer(initialState, actionFollow)
    expect(newState.users[0].followed).toBe(true)
})

test('user with id 21851 should be unfollowed', ()=> {
    let actionUnFollow = unFollow(21851)
    let newState = usersReducer(initialState, actionUnFollow)
    expect(newState.users[0].followed).toBe(false)
})

test('users length should be incremented', ()=> {
    let users = [{
        "name": "Balvanchik",
        "id": 21850,
        "uniqueUrlName": null,
        "photos": {
            "small": null,
            "large": null
        },
        "status": null,
        "followed": false
    }]
    let actionSetUsers = setUsers(users)
    let newState = usersReducer(initialState, actionSetUsers)
    expect(newState.users.length).toBe(1)
})

test('total users count should be equal 10', ()=> {
    let actionSetTotalUsersCount = setTotalUsersCount(10)
    let newState = usersReducer(initialState, actionSetTotalUsersCount)
    expect(newState.totalUsersCount).toBe(10)
})

test('current page should be equal 2', ()=> {
    let actionSetCurrentPage = setCurrentPage(2)
    let newState = usersReducer(initialState,actionSetCurrentPage)
    expect(newState.currentPage).toBe(2)
})
test('isFetching should be true', ()=> {
    let actionSetIsFetching = setIsFetching(true)
    let newState = usersReducer(initialState,actionSetIsFetching)
    expect(newState.isFetching).toBe(true)
})
test('user id 21851 should be in array isDisabled', ()=> {
    let actionSetIsFetching = setIsDisabled(true,21851)
    let newState = usersReducer(initialState,actionSetIsFetching)
    expect(newState.isDisabled).toEqual([21851])
})

export default 1