import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const AddMyFriend = (props)=>{
    const {tab, editing, myFriend, addFriend, editFriend } = props

    const friendHandler = (e)=>{
        e.preventDefault()
        const friend = {
            name: myFriend.name,
            age: +myFriend.age,
            email: myFriend.email,
        }

        if(friend.name === "" && friend.age === 0 && friend.email === ""){
            setTab(false); setEdit(false)
        }
        else if(!editing){
            axiosWithAuth()
                .post("/friends", friend)
                .then(res =>{
                    console.log(res.data)
                    setFriends(res.data)
                })
                .catch(err => console.dir(err))
            setTab(false)
        }
        else{
            axiosWithAuth()
                .put(`/friends/${myFriend.id}`, friend)
                .then(res =>{
                    console.log(res.data)
                    setFriends(res.data)
                    setEdit(false)
                })
                .catch(err => console.dir(err))
            setTab(false)
        }
    }

    const handleChange = e => {
        myFriend={...myFriend, [e.target.name]:e.target.value}
    }

    return(
        <div style={{borderTop:"1px solid black", borderBottom:"1px solid black", margin:"2% 0"}} >
            <form onSubmit={(e)=>friendHandler(e)} style={{display: `${tab ? "block" : "none"}`}} id="friendForm" >
                Name: <input type="text" name="name" value={myFriend.name} onChange={(e)=> handleChange(e)} /><br/>
                Age: <input type="number" name="age" value={myFriend.age} onChange={(e)=> handleChange(e)} /><br/>
                Email: <input type="text" name="email" value={myFriend.email} onChange={(e)=> handleChange(e)} /><br/>
                <input type="submit" value={editing ? "Edit Friend" : "Add Friend"} />
            </form>
        </div>
    )
}

export default AddMyFriend