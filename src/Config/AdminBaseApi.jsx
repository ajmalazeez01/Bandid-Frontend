import axios from "axios";

const USER_BASE_URL= `https://bandid.site/api/admin`

const AdminApi =axios.create({
    baseURL:USER_BASE_URL
})

export default AdminApi