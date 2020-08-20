import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from './../redux'

function user({Data, fetchUsers}) {
    useEffect(() => {
        fetchUsers()
    }, [])
    return Data.loading ? (
        <h2>Loading</h2>
    ) : Data.error ? (
        <h2>{ Data.error }</h2>
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
                {Data.users.map(x => (
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

export default user
