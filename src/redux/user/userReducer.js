const initialState = {
    isLogin : false,
    userInfo : {},
    loading : false,
    error: ""
}

const userReducer = (state = initialState,action)=>{
    switch(action.type){
        case "TEST" :
            return {
                first_name :action.payload
            }

            case "GET_USER_REQUEST" :
                return {
                    ...state,
                    loading : true
                }

                
            case "GET_USER_REQUEST_SUCCESS" :
                return {
                    loading : false,
                    userInfo : action.payload
                }

                case "GET_USER_REQUEST_FAILURE" :
                    return {
                        loading : false,
                        userInfo : [],
                        error : action.payload
                    }

                case "PUSH_USER_INFO" : 
                return {
                    loading : false,
                    userInfo : action.payload
                }

                case "SET_LOGIN" : 
                return {
                    isLogin : true
                }

        default:
            return state
        
    }
}

export default userReducer
