import axios from "axios";

const USER_BASE_URL= `https://api.bandid.site/band`

const BandApi =axios.create({
    baseURL:USER_BASE_URL
})

export default BandApi