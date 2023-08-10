import axios from "axios";

const USER_BASE_URL= `https://api.bandid.site/user`

const UserApi =axios.create({
    baseURL:USER_BASE_URL
})

export default UserApi