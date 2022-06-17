import React,{createContext,useState,useReducer} from 'react';


const initialStatee = [{
    userID : "",
    Study : "",
    type : "",
    dateSave : "",
    firstName : "",
    lastName : "",
    fatherName : "",
    nationalCode : "",
    dateOfBirth : "",
    gender : "",
}
];
const reducer = (statee,action) => {

    switch(action.type) {
        case  "PUSH" : 
        return {
            ...statee,
            [action.field] : action.payload
        };

        default : 
        return statee;
    }

}

export const dataContext = createContext();


const ContextProvider = ({children}) => {


 const [statee, dispatchh] = useReducer(reducer,initialStatee);


    return (
        <dataContext.Provider value={{state : statee, dispatch : dispatchh}}>
            {children}
        </dataContext.Provider>
    );
};

export default ContextProvider;