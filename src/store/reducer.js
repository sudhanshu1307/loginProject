const token = localStorage.getItem("token");

let loggedIn = true;

if(token == null){
    loggedIn = false
}

const initialState = {
        email: '',
        password: '',
        loggedIn
}

const reducer = (state = initialState, action) => {
    if (action.type === 'CHANGE') {
        return (e) => {
            this.state({
                [e.target.name]: e.target.value
            })
        }
    }
    if (action.type === 'SUBMIT'){
        return (e) => {
            e.preventDefault()
        }
    }
    return state
};

export default reducer;