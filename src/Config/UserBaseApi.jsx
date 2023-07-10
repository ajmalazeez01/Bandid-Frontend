import axios from "axios";

const USER_BASE_URL= `http://localhost:8000/user`

const UserApi =axios.create({
    baseURL:USER_BASE_URL
})

export default UserApi