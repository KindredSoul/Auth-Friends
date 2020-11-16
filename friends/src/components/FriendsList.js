import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';
import AddMyFriend from './AddNewFriend';
import { fetchFriends } from './store/actions';
import { connect } from 'react-redux';

const initialState = {
    name: "",
    age: +"",
    email: "",
}

const FriendsList = (props)=>{
    // const [friends, setFriends] = useState([])
    // const [myFriend, setMyFriend] = useState(initialState)
    // const [tab, setTab] = useState(false)
    // const [editing, setEdit] = useState(false)
    const {friends, myFriend, tab, editing} = props

    console.log(friends)
    console.log(myFriend)

    useEffect(() => {
        // axiosWithAuth()
        // .get("/friends")
        // .then(res => {
        //     console.log(res.data);
        //     setFriends(res.data)
        // })
        // .catch(err => console.dir(err))
        props.fetchFriends()
    }, [editing]);

    // const deleteFriend = (id)=>{
        // axiosWithAuth()
        //     .delete(`/friends/${id}`)
        //     .then(res => {
        //         console.log(res.data)
        //         window.location.reload()
        //     })
        //     .catch(err => console.dir(err))
    // }

    const handleTab = ()=>{
        !tab
        if(editing&&tab){
            editing=false
            myFriend=initialState
        }
    }

    return(
        <div>
            <h1>Friends</h1>
            <button onClick={()=> handleTab() } >{!tab ? "Add Friend" : "Close" }</button>
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
            {friends.map(friend =>(
                <Friend key={friend.id} friend={friend} setTab={setTab} setEdit={setEdit} setMyFriend={setMyFriend} deleteFriend={deleteFriend} />
            ))}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        friends: state.friends,
        tab: state.tab,
        editing: state.editing,
        myFriend: state.myFriend,
    }
}

export default connect(mapStateToProps, {fetchFriends})(FriendsList)