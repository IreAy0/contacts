import { CONTACT_LOADING, CONTACT_LOAD_ERROR, CONTACT_LOAD_SUCCESS, LOGOUT_USER } from "../../constants/actionTypes";

import contactsInitialState from '../initialstates/contactsInitialState'

const contacts = (state, {payload, type}) =>{
    switch (type) {
        case CONTACT_LOADING:{
            return {
                ...state,
                contacts:{
                    ...state.contacts,
                    loading:true,
                }
            }
        }
        case CONTACT_LOAD_SUCCESS :{
            return {
                ...state,
                contacts:{
                    ...state.contacts,
                    loading:false,
                    data:payload
                }
            }
        }
        case CONTACT_LOAD_ERROR :{
            return{
                ...state,
                contacts:{
                    ...state.contacts,
                    loading :false,
                    error:payload,
                }
            }
        }
        case LOGOUT_USER: {
            return {
                ...state,
                contactsInitialState,
            }
        }
        default:
           return state;
    }
    }
    
    export default contacts;