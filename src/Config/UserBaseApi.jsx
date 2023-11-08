import axios from "axios";

const USER_BASE_URL= `https://bandidonline.netlify.app/backend/user`
// const USER_BASE_URL= `http://localhost:5000/backend/user`

const UserApi =axios.create({
    baseURL:USER_BASE_URL
})

export default UserApi