import React, { useState, Component } from "react";

import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const clientId = '241312776861-adcat9fecspcobkg88lkb0fpgn3544l2.apps.googleusercontent.com';




export class Login extends Component {
    state = {
        username: '',
        password: '',
        // userInfo: {},
        // isLoggedIn: false,
        showLoginButton: true,
        showLogoutButton: false,
    }

    onSubmitSuccess = (props) => {
        const { history } = this.props
        history.push('/')
    }

    submitForm = async event => {
        event.preventDefault()
        const { username, password } = this.state
        const userDetails = { username, password }
        const url = 'https://apis.ccbp.in/login'
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
        }
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.ok === true) {
            this.onSubmitSuccess()
        }
    }

    onChangeUsername = event => {
        this.setState({ username: event.target.value })
    }

    onChangePassword = event => {
        this.setState({ password: event.target.value })
    }

    onSuccess = (response) => {
        console.log(response)
        let userInfo = {
            name: response.profileOnj.name,
            emailId: response.profileObj.email,
        };
        this.setState({
            userInfo,
            isLoggedIn: true,
        });
        const { history } = this.props
        history.push('/')
    }

    onFailure = (res) => {
        console.log(res)   
    }
    
    responseFacebook = (response) => {
        console.log(response);
        this.FacebookLoginPage();
    }
    FacebookLoginPage = () => {
        const [showLoginButton, setLoginButton] = useState(true);
        const [showLogoutButton, setLogoutButton] = useState(false);
        const loginHandler = (res) => {
            console.log("res", res.profileObj);
            setLoginButton(false);
            setLogoutButton(true);
        };
        const failureHandler = (res) => {
            console.log("login failed", res);
        };
        const logoutHandler = (res) => {
            alert("logout sucessfully");
            setLoginButton(true);
            setLogoutButton(false);
        };
    }
    
    render() {
        return (
            <div className='flex flex-col justify-center items-center h-screen'>

                <form className='w-80 h-min py-16 shadow my-12 flex flex-col justify-center items-center h-screen'>
                    <h1 className='text-2xl py-2 font-bold'>Login</h1>

                    <div className='flex flex-col justify-start'>
                        <span className='my-2'>
                            <p className='font-semibold text-gray-500'>Username</p>
                            <input value={this.state.username} placeholder='  Username' onChange={this.onChangeUsername} className='border-2 border-gray-500 rounded-sm w-60 py-1' type='text' />
                        </span>
                        <span>
                            <p className='font-semibold text-gray-500'>Password</p>
                            <input value={this.state.password} placeholder='  Password' onChange={this.onChangePassword} className='border-2 border-gray-500 rounded-sm w-60 py-1' type='password' />
                        </span>
                        <span>
                            <button onSubmit={this.submitForm} className='h-8 text-white my-3 w-60 bg-blue-500 rounded-sm font-semibold py-1' type='submit'>Login</button>
                        </span>
                        <span>
                            <GoogleLogin clientId={clientId} 
                            buttonText="Login"
                            onSuccess={this.onSuccess}
                            onFailure={this.onFailure}
                            cookiePolicy={`single_host_origin`}
                            style={{marginTop: '100px'}}
                            isSignedIn={true}/>
                        </span>
                        <span className="bg-gray-200 px-2 shadow h-8 rounded">
                            <FacebookLogin
                                appId="270794275210431"
                                autoLoad={true}
                                fields="name,email,picture"
                                scope="public_profile,user_friends,user_actions.books"
                                callback={this.responseFacebook}
                            />
                        </span>
                    </div>
                </form>

            </div>
        )
    }
}
export default Login