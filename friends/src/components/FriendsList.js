import React, { useEffect, useState } from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import Friend from "./Friend"
import AddMyFriend from "./AddNewFriend"
import { fetchFriends, deleteFriend } from "./store/actions"
import { connect } from "react-redux"

const initialState = {
	name: "",
	age: +"",
	email: ""
}

const FriendsList = (props) => {
	const [ friends, setFriends ] = useState(props.friends || [])
	const [ myFriend, setMyFriend ] = useState(initialState)
	const [ tab, setTab ] = useState(false)
	const [ editing, setEdit ] = useState(false)

	useEffect(() => {
		props.fetchFriends()
	}, [])

	const handleTab = () => {
		setTab(!tab)
		if (editing && tab) {
			setEdit(false)
			setMyFriend(initialState)
		}
	}

	return (
		<div>
			<h1>Friends</h1>
			<button onClick={() => handleTab()}>{!tab ? "Add Friend" : "Close"}</button>
			<AddMyFriend
				tab={tab}
				editing={editing}
				friends={friends}
				myFriend={myFriend}
				setTab={setTab}
				setEdit={setEdit}
				setFriends={setFriends}
				setMyFriend={setMyFriend}
			/>
			{props.friends.length > 0 ? (
				props.friends.map((friend) => (
					<Friend
						key={friend.id}
						friend={friend}
						setTab={setTab}
						setEdit={setEdit}
						setMyFriend={setMyFriend}
						deleteFriend={props.deleteFriend}
					/>
				))
			) : null}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		friends: state.friends || [],
		tab: state.tab,
		editing: state.editing,
		myFriend: state.myFriend
	}
}

export default connect(mapStateToProps, { fetchFriends, deleteFriend })(FriendsList)
