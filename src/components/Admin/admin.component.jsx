import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './admin.style.css';

export default class admin extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn = false
        }

        this.state = {
            loggedIn
        }
    }
    render() {
        if(this.state.loggedIn === false){
            return <Redirect to="/" />
        }
        return (
            <div>
                <nav>
                    <label className="logo">My Logo</label>
                    <ul>
                        <li className="link"><Link to="#">Home</Link></li>
                        <li className="link"><Link to="#">About</Link></li>
                        <li className="link"><Link to="/logout">Logout</Link></li>
                    </ul>
                </nav>
                <h1 className="heading">Welcome, User</h1>
                <div className='card-container'>
                    <img src={`http://t13.deviantart.net/SxdwD4sD5IjXwx0AgCBQ9xXOBqQ=/300x200/filters:fixed_height(100,100):origin()/pre01/d87e/th/pre/i/2012/207/c/1/coucher_de_soleil_02_by_b_melodie-d58n2yg.jpg`} alt='Image' />    
                </div>
            </div>
        )
    }
}
