import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

export class LoginForm extends Component {
    state = {
        username: "",
        password: "",
    }

    usernameInput = (event) => {
        const { username } = this.state;
        this.setState({ username: event.target.value })
        console.log(username)
    }

    passwordInput = (event) => {
        const { password } = this.state
        this.setState({ password: event.target.value })
        console.log(password)
    }

    onSubmitSuccess = () => {
        const history = useHistory();
        history.replace('/')
    }

    submitLogin = async event => {
        event.preventDefault();
        console.log("cool");
        const { username, password } = this.state
        const userDetails = { username, password }
        const url = "https://apis.ccbp.in/login"

        const options = {
            method: "POST",
            body: JSON.stringify(userDetails)
        }

        const response = await fetch(url, options)
        const data = await response.json()
        if (response.ok === true) {
            this.onSubmitSuccess()
        }
    }

    render() {
        return <div className='flex flex-row justify-center items-center h-screen'>
            <img className='w-80 m-8' src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" />
            <form onSubmit={this.submitLogin} className='py-6 flex flex-col justify-center items-center w-60 bg-white px-4 rounded my-8 py-4 shadow'>
                <img className='p-3' src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" />

                <label className=''>
                    <p className='font-semibold text-gray-500'>USERNAME</p>
                    <input onChange={this.usernameInput} type="text" placeholder='Username' className='px-2 py-1 border-2 border-gray-400 rounded w-48' />
                </label>
                <label className=''>
                    <p className='font-semibold text-gray-500'>PASSWORD</p>
                    <input onChange={this.passwordInput} type="password" placeholder='Username' className='px-2 py-1 border-2 border-gray-400 rounded w-48' />
                </label>
                <button type='submit' className='text-center bg-blue-600 hover:bg-blue-700 py-2 w-48 text-white font-semibold my-3 rounded'>
                    Login
                </button>
            </form>
        </div>;
    }
}

export default LoginForm;
