import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';

const clientId = '241312776861-adcat9fecspcobkg88lkb0fpgn3544l2.apps.googleusercontent.com';

export class Login extends Component {
    state = {
        username: '',
        password: '',
        userInfo: {},
        isLoggedIn: false,
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


    render() {
        return (
            <div className='flex flex-col justify-center items-center h-screen'>

                <form className='w-80 h-80 shadow py-4 flex flex-col justify-center items-center h-screen'>
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
                    </div>
                </form>

            </div>
        )
    }
}
export default Login