import axios from "axios";

const USER_BASE_URL= `http://bandid.site/api/user`

const UserApi =axios.create({
    baseURL:USER_BASE_URL
})

export default UserApi