import { GoogleLogin } from 'react-google-login'
import actions from '../api'

console.log(process.env)

const Auth = (props) => {

    const onResponse = (response) => {
        console.log(response)
        actions
            .logIn(response)
            .then(res => {
                console.log(res)
                props.setUser(res.data)
            })
            .catch(console.error)
    }

    return (
        <div className="Tob">
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLEID}
            buttonText="Signup"
            onSuccess={onResponse}
            onFailure={onResponse}
            cookiePolicy={"single_host_origin"}
        />
            <div className="Bob">
            <img src={"./images/coolCat2.gif"} style={{width:'100vh'}} alt="kids" />
            <h4>Click on Profile to start learning</h4>
            </div>
        </div>
    );
    
}

export default Auth