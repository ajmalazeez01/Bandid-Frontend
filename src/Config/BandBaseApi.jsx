import axios from "axios";

const USER_BASE_URL= `http://bandid.site/api/band`

const BandApi =axios.create({
    baseURL:USER_BASE_URL
})

export default BandApi