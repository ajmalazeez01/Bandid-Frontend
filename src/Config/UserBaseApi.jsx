import axios from "axios";

const USER_BASE_URL= `https://bandid.site/api/user`
// const USER_BASE_URL= `http://localhost:5000/api/user`

const UserApi =axios.create({
    baseURL:USER_BASE_URL
})

export default UserApi