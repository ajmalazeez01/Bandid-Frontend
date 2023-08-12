import axios from "axios";

const USER_BASE_URL= `https://bandid.site/backend/band`
// const USER_BASE_URL= `http://localhost:5000/backend/band`

const BandApi =axios.create({
    baseURL:USER_BASE_URL
})

export default BandApi