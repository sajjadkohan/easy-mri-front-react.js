import axios from "axios"

const testAction = (value)=> {
    return {type : "TEST" , payload:value}
}

const pushUserInfo = (value)=> {
    return {
        type : "PUSH_USER_INFO",
        payload : value
    }
}

const getUserRequest = ()=> {
    return {
        type: "GET_USER_REQUEST"
    }
}

const getUserRequestSuccess = (user)=> {
    return {
        type: "GET_USER_REQUEST_SUCCESS",
        payload : user
    }
}

const getUserRequestFailure = (error)=> {
    return {
        type: "GET_USER_REQUEST_FAILURE",
        payload : error
    }
}

const loginer = ()=> {
    return {
        type: "SET_LOGIN"
    }
}

const getUser = ()=> {
    return (dispath) => {
    
        dispath(getUserRequest());
        axios.get("http://localhost:5000/user/list")
        .then(response => {
            const user = response.data.allUsers;
            
            dispath(getUserRequestSuccess(user))
        })
        .catch((err)=> {
            dispath(getUserRequestFailure(err.message))
        })

    }
}


const autoLogin = ()=> {
    return (dispath) => {
        const tokenValue = localStorage.getItem("token");
        dispath(getUserRequest);
        axios.post("http://localhost:5000/user/access-token",{"token":tokenValue})
        .then(response => {
            const user = response.data.user;
            console.log(user);
            
            dispath(getUserRequestSuccess(user))
        })
        .catch((err)=> {
            dispath(getUserRequestFailure(err))
        })

    }
}

export {
    testAction,
    getUser,
    pushUserInfo,
    loginer,
    autoLogin
}

