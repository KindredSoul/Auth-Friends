import React from 'react';
import {deleteFriend} from './store/actions'
import { connect } from 'react-redux';

const Friend = ({friend, tab, editing, myFriend, deleteFriend}) =>{

    const handleEdit = ()=>{
        // setTab(true); 
        // setEdit(true); 
        // setMyFriend(friend); 
        tab=true,
        editing=true,
        myFriend=friend,
        document.location.hash = "#friendForm"
    }

    return(
        <div style={{border: "1px solid black", borderRadius: "15px"}} >
            <h2>{friend.name}</h2>
            <h3>Age:{friend.age} </h3>
            <h3>Email:{friend.email} </h3>
            <button onClick={()=>handleEdit()}  >Edit Friend</button>
            <button onClick={()=>deleteFriend(friend.id)} >Delete Friend</button>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        friend: state.friend,
        editing: state.editing,
        tab: state.tab,
        myFriend: myFriend,
    }
}

export default connect(mapStateToProps, {deleteFriend})(Friend)