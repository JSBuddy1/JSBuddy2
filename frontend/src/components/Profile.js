import React, { useState, useEffect } from 'react';
import actions from '../api'
import {Link} from 'react-router-dom'


function Profile(props) {
    const [myPosts, setMyPosts] = useState([])


    useEffect(() => {
        console.log(props)
        if (!props.user.email) {
            props.history.push('/')
        }
        actions.getMyPosts().then(res => setMyPosts(res.data))
    }, [])

    console.log(myPosts)
    return (
        <div className = "prof">
            <h1>Welcome {props.user?.given_name}!</h1>

            <Link to="/variables/0">
                <h3>Variables</h3>
            </Link>

            <Link to="/strings/0">
                <h3>Strings</h3>
            </Link>

            <Link to="/arrays/0">
                <h3>Arrays</h3>
            </Link>

            <Link to="/objects/0">
                <h3>Objects</h3>
            </Link>
            
            <Link to="/functions/0">
                <h3>Functions</h3>
            </Link>

        </div>
    );
}

export default Profile;