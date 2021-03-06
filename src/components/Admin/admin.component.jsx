import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchUsers } from './../../redux'

function admin({ userData, fetchUsers }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetchUsers()
    }, [])
    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
    <h2>{ userData.error }</h2>
    ) : (
        <div>
             <nav>
                    <label className="logo">My Logo</label>
                    <ul>
                        <li className="link"><Link to="#">Home</Link></li>
                        <li className="link"><Link to="#">About</Link></li>
                        <li className="link"><Link to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            <h2>User List</h2>
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
                {userData.users.map(x => (
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

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(admin)
