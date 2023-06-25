import axios from "axios";

const USER_BASE_URL= `http://localhost:8000/band`

const BandApi =axios.create({
    baseURL:USER_BASE_URL
})

export default BandApi