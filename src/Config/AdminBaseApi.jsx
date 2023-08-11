import axios from "axios";

const USER_BASE_URL= `http://bandid.site/api/admin`

const AdminApi =axios.create({
    baseURL:USER_BASE_URL
})

export default AdminApi