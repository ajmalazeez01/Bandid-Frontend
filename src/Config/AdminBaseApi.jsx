import axios from "axios";

const USER_BASE_URL= `http://localhost:8000/admin`

const AdminApi =axios.create({
    baseURL:USER_BASE_URL
})

export default AdminApi