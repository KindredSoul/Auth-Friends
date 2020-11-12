import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialState = {
    name: "",
    age: "",
    email: "",
}

const AddNewFriend = (props)=>{
    const [newFriend, setNewFriend] = useState(initialState)
    const {tab, setTab, setFriends} = props

    const addFriend = (e)=>{
        e.preventDefault()
        const friend = {
            name: newFriend.name,
            age: newFriend.age,
            email: newFriend.email,
        }
        axiosWithAuth()
            .post("/friends", friend)
            .then(res =>{
                console.log(res.data)
                setFriends(res.data)
            })
            .catch(err => console.dir(err))
        setTab(false)
    }

    const handleChange = e => {
        setNewFriend({...newFriend, [e.target.name]:e.target.value})
    }

    return(
        <div style={{borderTop:"1px solid black", borderBottom:"1px solid black", margin:"2% 0"}} >
            <form onSubmit={(e)=>addFriend(e)} style={{display: `${tab ? "block" : "none"}`}} >
                Name: <input type="text" name="name" value={newFriend.name} onChange={(e)=> handleChange(e)} /><br/>
                Age: <input type="text" name="age" value={newFriend.age} onChange={(e)=> handleChange(e)} /><br/>
                Email: <input type="text" name="email" value={newFriend.email} onChange={(e)=> handleChange(e)} /><br/>
                <input type="submit" value="Add Friend" />
            </form>
        </div>
    )
}

export default AddNewFriend