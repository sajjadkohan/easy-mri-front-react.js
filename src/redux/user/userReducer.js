const initialState = {
    userInfo : {},
    first_name : "",
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
                    user : action.payload
                }

                case "GET_USER_REQUEST_FAILURE" :
                    return {
                        loading : false,
                        user : [],
                        error : action.payload
                    }

                case "PUSH_USER_INFO" : 
                return {
                    loading : false,
                    userInfo : action.payload
                }

        default:
            return state
        
    }
}

export default userReducer
