import React, { useState, useEffect } from 'react';
import actions from '../api'

function Profile(props) {
    const [myPosts, setMyPosts] = useState([])


    useEffect(() => {
        console.log(props)
        if (!props.user.email) {
            props.history.push('/')
        }
        actions.getMyPosts().then(res => setMyPosts(res.data))
    }, [])

    const showPosts = () => {
        return myPosts.map(post => {
            return (
                <li key={post._id}>{post.post}</li>
            )
        })
    }
    console.log(myPosts)
    return (
        <div>
            <h1>Welcome {props.user?.given_name}!</h1>
     
          

            {showPosts()} 
        </div>
    );
}

export default Profile;