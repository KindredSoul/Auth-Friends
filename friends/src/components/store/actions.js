import { axiosWithAuth } from "../../utils/axiosWithAuth"

export const ADD_FRIEND = "ADD_FRIEND"
export const EDIT_FRIEND = "EDIT_FRIEND"
export const DELETE_FRIEND = "DELETE_FRIEND"
export const FETCH_FRIENDS = "FETCH_FRIENDS"

export const fetchFriends = () => (dispatch) => {
	axiosWithAuth()
		.get("/friends")
		.then((res) => {
			dispatch({ type: FETCH_FRIENDS, payload: res.data })
		})
		.catch((err) => console.dir(err))
}

export const addFriend = (data) => (dispatch) => {
	axiosWithAuth()
		.post("/friends", data)
		.then((res) => {
			console.log(res.data)
			dispatch({ type: ADD_FRIEND, payload: res.data })
		})
		.catch((err) => console.dir(err))
}

export const editFriend = (data, id) => (dispatch) => {
	axiosWithAuth()
		.put(`/friends/${id}`, data)
		.then((res) => {
			console.log(res.data)
			dispatch({ type: EDIT_FRIEND, payload: res.data })
		})
		.catch((err) => console.dir(err))
}

export const deleteFriend = (id) => (dispatch) => {
	axiosWithAuth()
		.delete(`/friends/${id}`)
		.then((res) => {
			console.log(res.data)
			window.location.reload()
		})
		.catch((err) => console.dir(err))
}
