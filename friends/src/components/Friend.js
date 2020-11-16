import React from "react"
import { deleteFriend } from "./store/actions"
import { connect } from "react-redux"

const Friend = (props) => {
	const { friend, tab, editing, myFriend, setTab, setEdit, setMyFriend, deleteFriend } = props
	const handleEdit = () => {
		setTab(true)
		setEdit(true)
		setMyFriend(friend)
		document.location.hash = "#friendForm"
	}

	return (
		<div style={{ border: "1px solid black", borderRadius: "15px" }}>
			<h2>{friend.name}</h2>
			<h3>Age:{friend.age} </h3>
			<h3>Email:{friend.email} </h3>
			<button onClick={() => handleEdit()}>Edit Friend</button>
			<button onClick={() => deleteFriend(friend.id)}>Delete Friend</button>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		editing: state.editing,
		tab: state.tab,
		myFriend: state.myFriend
	}
}

export default connect(mapStateToProps, { deleteFriend })(Friend)
