import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./../user/userType"
import axios from "axios"

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}



export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        // const url1 ='https://jsonplaceholder.typicode.com/users'
        const url2 = 'https://reqres.in/api/login'
        axios.get(url2)
            .then(response => {
                const users = response.data.data
                dispatch(fetchUsersSuccess(users))
                console.log(users)
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUsersFailure(errorMsg))
            })
    }
}