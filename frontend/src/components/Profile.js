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
        <div>
            <h1>Welcome {props.user?.given_name}!</h1>

            <Link to="/variables">
                <h3>Variables</h3>
            </Link>

            <Link to="/strings">
                <h3>Strings</h3>
            </Link>

            <Link to="/arrays">
                <h3>Arrays</h3>
            </Link>

            <Link to="/objects">
                <h3>Objects</h3>
            </Link>
            
            <Link to="/functions">
                <h3>Functions</h3>
            </Link>

        </div>
    );
}

export default Profile;