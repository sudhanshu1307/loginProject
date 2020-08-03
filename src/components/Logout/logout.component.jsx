import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core';
import './logout.style.css';

export default class admin extends Component {
    constructor (props) {
        super(props) 
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div className="text">
                <h1>Thank You for Using <span>😎</span></h1>
                <Button fullwidth variant="contained" color="secondry"> 
                    <Link to="/">LogIn Again</Link>
                </Button>
            </div>
        )
    }
}
