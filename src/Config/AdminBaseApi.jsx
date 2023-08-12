import axios from "axios";

const USER_BASE_URL= `https://bandid.site/backend/admin`
// const USER_BASE_URL= `http://localhost:5000/backend/admin`

const AdminApi =axios.create({
    baseURL:USER_BASE_URL
})

export default AdminApi