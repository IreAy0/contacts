import { CONTACT_LOADING, CONTACT_LOAD_ERROR, CONTACT_LOAD_SUCCESS } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance"

export default  (history) => (dispatch )=>{
    dispatch({
        type:CONTACT_LOADING,
    })
axiosInstance(history).get('/contacts/')
.then((res) => {
    dispatch({
        type:CONTACT_LOAD_SUCCESS,
        payload: res.data,
    })
console.log("data", res.data)

})

.catch((err) => {
    dispatch({
        type:CONTACT_LOAD_ERROR,
        payload:err.response?err.response.data:"could not connect to server"
    })

    
console.log("err", err)
}
);
}