import axiosInstance from "../../../helpers/axiosInstance"

export default  (history) => {
axiosInstance(history).get('/contacts/')
.then((res) => console.log("datta", res.data))
.catch((err) => console.log("err", err));
}