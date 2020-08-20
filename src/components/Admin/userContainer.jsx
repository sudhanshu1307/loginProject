import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../redux'   

function userContainer({ userData, fetchUsers }) {
    console.log("userData",userData)
    console.log("user", fetchUsers)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])
    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
    <h2>{ userData.error }</h2>
    ) : (
        <div>
            <h2>User List</h2>
            <div>
            <table>
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
        userData: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(userContainer)
