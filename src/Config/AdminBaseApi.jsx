import axios from "axios";

const USER_BASE_URL= `https://api.bandid.site/admin`

const AdminApi =axios.create({
    baseURL:USER_BASE_URL
})

export default AdminApi