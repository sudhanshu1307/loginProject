import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
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
            loggedIn,
            usersData: []
        }
    }

    componentDidMount() {
        axios.get('https://reqres.in/api/login')
            .then(res => {
            const users = res.data.data;
            this.setState({ usersData: users });
            })
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
                <div>
                    <table className="user">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Year</th>
                                <th>Color</th>
                                <th>pantone_value</th>   
                            </tr>
                        </thead>
                        {this.state.usersData.map(x => (
                        <tbody>
                            <tr>
                                <td>{x.id}</td>
                                <td>{x.name}</td>
                                <td>{x.year}</td>
                                <td>{x.color}</td>
                                <td>{x.pantone_value}</td>
                            </tr>
                        </tbody>
                    ))}
                    </table>
                </div>
            </div>
        )
    }
}
