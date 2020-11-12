import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';
import AddNewFriend from './AddNewFriend';

const FriendsList = ()=>{
    const [friends, setFriends] = useState([])
    const [tab, setTab] = useState(false)
    console.log(friends)

    useEffect(() => {
        axiosWithAuth()
        .get("/friends")
        .then(res => {
            console.log(res.data);
            setFriends(res.data)
        })
        .catch(err => console.dir(err))
    }, []);

  return(
    <div>
        <h1>Friends</h1>
        <button onClick={()=> setTab(true) } >Add Friend</button>
        <AddNewFriend tab={tab} setTab={setTab} friends={friends} setFriends={setFriends} />
        {friends.map(friend =>(
            <Friend key={friend.id} friend={friend}/>
        ))}
    </div>
  )
}

export default FriendsList