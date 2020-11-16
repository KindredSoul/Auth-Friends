import {ADD_FRIEND, DELETE_FRIEND, EDIT_FRIEND, FETCH_FRIENDS} from "./actions"

const initialState = {
    friends: [],
    myFriend: {
        name: "",
        age: +"",
        email: "",
    },
    editing: false,
    tab: false,

}

export default function reducer(state=initialState, action){
    switch(action.type){
        case FETCH_FRIENDS:
            return {
                ...state,
                friends: action.payload
            }
        case ADD_FRIEND:
            return {
                ...state,
                friends: action.payload,
                tab: false,
            }
        case EDIT_FRIEND:
            return {
                ...state,
                friends: action.payload,
                tab: false,
                editing: false,
            }
        case DELETE_FRIEND:
            return {
                ...state,

            }
        default:
            return state
    }
}