import React, { Component } from 'react';
import { Container, TextField, Button, Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';

import axios from 'axios';
import './SignIn.style.css';


class SignIn extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn = false
        }

        this.state = {
            email: '',
            password: '',
            loggedIn
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value  
        })
    }

    submitForm = (e) => {
        e.preventDefault()
        const { email, password } = this.state

        const data = {
            email,
            password
        }

        axios.post(`https://reqres.in/api/login`, data )
        .then(res => {
            const apiToken = res.data.token
            localStorage.setItem("token", apiToken)
            this.setState({
                loggedIn: true
            })
        })
    }

    render() {
        const style = {
            textAlign: 'center'
        }
        const buttonStyle = {
            marginLeft: '40%'
        }

        if(this.state.loggedIn){
            return <Redirect to="/admin" />
        }

        return (
            <Container className="paper" component="main" maxWidth="xs" >
                <Typography style={style} component="h1" variant="h5">
                    Sign In
                </Typography>
                <form onSubmit = {this.submitForm}>
                    <TextField 
                        variant="outlined" 
                        margin="normal" 
                        required 
                        fullWidth
                        id="email" 
                        label="Email Address" 
                        name="email" 
                        autoFocus 
                        value={this.state.email}
                        onChange={this.onChange}
                    />
                    <TextField 
                        variant="outlined" 
                        margin="normal" 
                        required 
                        fullWidth 
                        id="password" 
                        type="password"
                        label="Password" 
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                    />
                    <Button style={buttonStyle} type="submit" fullwidth variant="contained" color="primary"> Sign In </Button>
                </form>
            </Container>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         email: state.email,
//         password: state.password,
//         loggin: state.loggedIn
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         onChange: () => dispatch({type: 'CHANGE'}),
//         onSubmit: () => dispatch({type: 'SUBMIT'})
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

export default SignIn
