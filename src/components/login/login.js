import React, { useState, useReducer } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const initialState = {
    userName: '',
    password: '',
    message: '',
    valid: false
}


const reducer = (state, action) => {
    // console.log(state, action)
    switch (action.type) {
        case "validName":
            return { ...state, userName: action.data, message: '', valid: true };
        case "invalidName":
            return { ...state, userName: action.data, message: 'Invalid username', valid: false };
        case "validPassword":
            return { ...state, password: action.data, message: '', valid: true };
        case "invalidPassword":
            return { ...state, password: action.data, message: 'Invalid Password', valid: false };
        default:
            return state;
    }
}


const Login = (props) => {
    console.log(props)
    const history = props.history
    console.log(history)
    const [userObj, dispatchAction] = useReducer(reducer, initialState);
    const [name, setname] = useState('');
    const [password, setPassword] = useState('');


    const unserNameHandler = (ev) => {
        const isUserValid = ev.target.value.match(/[\w.+\-]*@gmail\.com(\W|$)/ig);
        if (isUserValid && isUserValid[0] === 'hruday@gmail.com') {
            dispatchAction({ type: 'validName', data: isUserValid[0] })
        } else {
            dispatchAction({ type: 'invalidName', data: ev.target.value })
        }
    }
    const unserPasswordHandler = (ev) => {
        const password = ev.target.value
        if (password && password === 'hruday123') {
            dispatchAction({ type: 'validPassword', data: password })
        } else {
            dispatchAction({ type: 'invalidPassword', data: ev.target.value })
        }
    }
    const login = () => {
        console.log(userObj)
        if (userObj.valid) {
            history.push('/dashboard')
        }

    }
    return (
        <div>
            {userObj.valid ? <span>{userObj.message}</span> : ''}

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '30%', marginTop: '50px' }} >
                <TextField onChange={unserNameHandler} id="outlined-basic" value={userObj.userName} label="User Name" variant="outlined" />
                <TextField onChange={unserPasswordHandler} style={{ marginTop: '20px' }} type="password" id="outlined-basic" value={userObj.password} label="Password" variant="outlined" />
                <Button onClick={login} style={{ marginTop: '20px' }} variant="contained" color="primary">  Login </Button>
            </div>
        </div>
    )




}

export default Login;