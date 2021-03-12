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
            <h3>Click on the first letter and work your way down cool cat.</h3>

            <Link to="/variables/0">
                {/* <h3>Variables</h3> */}
                <div className="text middle">
                    <span>V</span>
                    < span class="hidden">a</span>
                    < span class="hidden">r</span>
                    < span class="hidden">i</span>
                    < span class="hidden">a</span>
                    < span class="hidden">b</span>
                    < span class="hidden">l</span>
                    < span class="hidden">e</span>
                    < span class="hidden">s</span>
                </div>
            </Link>

            <Link to="/strings/0">
                {/* <h3>Strings</h3> */}
                <div className="text middle2">
                    <span>S</span>
                    < span class="hidden">t</span>
                    < span class="hidden">r</span>
                    < span class="hidden">i</span>
                    < span class="hidden">n</span>
                    < span class="hidden">g</span>
                    < span class="hidden">s</span>
                </div>
            </Link>

            <Link to="/arrays/0">
                {/* <h3>Arrays</h3> */}
                <div className="text middle3">
                    <span>A</span>
                    < span class="hidden">r</span>
                    < span class="hidden">r</span>
                    < span class="hidden">a</span>
                    < span class="hidden">y</span>
                    < span class="hidden">s</span>
                </div>
            </Link>

            <Link to="/objects/0">
                {/* <h3>Objects</h3> */}
                <div className="text middle4">
                    <span>O</span>
                    < span class="hidden">b</span>
                    < span class="hidden">j</span>
                    < span class="hidden">e</span>
                    < span class="hidden">c</span>
                    < span class="hidden">t</span>
                    < span class="hidden">s</span>
                </div>
            </Link>
            
            <Link to="/functions/0">
                {/* <h3>Functions</h3> */}
                <div className="text middle5">
                    <span>F</span>
                    < span class="hidden">u</span>
                    < span class="hidden">n</span>
                    < span class="hidden">c</span>
                    < span class="hidden">t</span>
                    < span class="hidden">i</span>
                    < span class="hidden">o</span>
                    < span class="hidden">n</span>
                    < span class="hidden">s</span>
                </div>
            </Link>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
        </div>
    );
}

export default Profile;